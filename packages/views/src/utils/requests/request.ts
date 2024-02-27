import { useConfig } from '../../config';
import { EventChannel, InternalCardEvents, InternalEvents } from "@code-wallet/events";
import { decode, encode, Intent } from "@code-wallet/intents";
import { PublicKey } from "@code-wallet/keys"
import * as Kik from '@code-wallet/kikcode';
import * as proto from '@code-wallet/rpc';

export interface CodeRequest {
    emitter: EventChannel<InternalEvents> | null;
    intent: Intent;
    kikCode?: Uint8Array;

    generateKikCode(): Promise<void>;
    toPayload(): string;
    toProto(): Promise<proto.SendMessageRequest>;
    openStream(emitter: EventChannel<InternalEvents>): Promise<void>;
    closeStream(): void;
}

export type CodeRequestFromPayload = (
    payload: string, 
    options?: { 
        clientSecret?: string; 
        idempotencyKey?: string; 
        successUrl?: string; 
        cancelUrl?: string; 
    }) => CodeRequest;

abstract class AbstractRequest implements CodeRequest {
    emitter: EventChannel<InternalEvents> | null;
    intent: Intent;
    kikCode?: Uint8Array

    constructor(intent: Intent) {
        this.intent = intent;
        this.emitter = null;
    }

    async generateKikCode() {
        const { rendezvousPayload } = this.intent;
        this.kikCode = await Kik.encode(rendezvousPayload.toBinary());
    }

    toPayload() {
        const opts = this.intent.options;
        if (!opts.clientSecret || !opts.idempotencyKey) {
            opts.clientSecret = this.intent.getClientSecret();
        }

        const payload = encode(opts);
        return payload;
    }

    static bodyFromPayload(val: string, opt: { 
        clientSecret?: string,
        idempotencyKey?: string,
        successUrl?: string,
        cancelUrl?: string,
    } = {}) {
        const body = decode(val);

        if (opt.clientSecret) {
            body.clientSecret = opt.clientSecret;
        }

        if (opt.idempotencyKey) {
            body.idempotencyKey = opt.idempotencyKey;
        }

        if (opt.successUrl) {
            body.confirmParams = {
                ...body.confirmParams,
                success: { 
                    ...body.confirmParams?.success,
                    url: opt.successUrl
                },
            }
        }

        if (opt.cancelUrl) {
            body.confirmParams = {
                ...body.confirmParams,
                cancel: { 
                    ...body.confirmParams?.cancel,
                    url: opt.cancelUrl
                },
            }
        }

        return body;
    }

    abstract toProto(): Promise<proto.SendMessageRequest>;

    closeStream() {
        this.emitter = null;
    }

    async openStream(emitter: EventChannel<InternalEvents>) {
        this.emitter = emitter;
        await this.listen();
    }

    private async getStatus() : Promise<proto.GetStatusResponse | undefined> {
        const config = useConfig();
        const getStatus = await proto.RpcStream.createUnaryMethod(proto.MicroPayment, "getStatus", config.wsPath());
        try {
            const intentId = PublicKey.fromBase58(this.intent.getIntentId());
            const res = await getStatus(new proto.GetStatusRequest({
                intentId: {
                    value: intentId.toBuffer(),
                },
            }));
            return res;
        } catch (error) {
            if (this.emitter) {
                this.emitter.emit("error", error as any);
            }
        }
    }

    private async sendRequest() : Promise<proto.SendMessageResponse | undefined> {
        const config = useConfig();
        const req = await this.toProto();
        const msgSend = await proto.RpcStream.createUnaryMethod(proto.Messaging, "sendMessage", config.wsPath());
        try {
            const res = await msgSend(req);
            if (res.result == proto.SendMessageResponse_Result.OK) {
                return res;
            } else {
                if (this.emitter) {
                    this.emitter.emit("error", { message: "Failed to send message" });
                }
            }
        } catch (error) {
            if (this.emitter) {
                this.emitter.emit("error", error as any);
            }
        }
    }

    private async listen() {
        if (!this.emitter) { return; }

        const { rendezvousKeypair } = this.intent;
        const config = useConfig();

        await this.generateKikCode();

        const msgStream = await proto.RpcStream.create(proto.Messaging, "openMessageStream", config.wsPath(), {
            onClose: () => {
                if (this.emitter) {
                    this.emitter.emit("streamClosed");
                }
            },
            onError: (err: any) => {
                if (this.emitter) {
                    this.emitter.emit("error", err);
                }
            },
        });

        // Get the status of the intent (in case the server already requested it)
        const status = await this.getStatus();
        if (!status) {
            return; // Something went wrong, don't continue
        }

        // If the intent does not exist, send the initial request here
        if (!status.exists) {
            const res = await this.sendRequest();
            if (!res) {
                return; // Something went wrong, don't continue
            }
        }

        // Open the message stream
        msgStream.write(new proto.OpenMessageStreamRequest({
            rendezvousKey: new proto.RendezvousKey({
                value: rendezvousKeypair.getPublicKey().value,
            }),
        }));

        for await (const [res, err] of msgStream.read()) {
            // Check emitter at the start of the loop (if it is null, then this
            // stream has been closed)
            if (!this.emitter) break;

            if (err) {
                if (this.emitter) {
                    this.emitter.emit("error", err)
                }
                break;
            }

            if (res) {
                if (res instanceof proto.OpenMessageStreamResponse) {
                    for (const msg of res.messages) {
                        // Check emitter within the inner loop as well
                        if (!this.emitter) break;

                        if (this.emitter) {
                            this.emitter.emit(msg.kind.case as keyof InternalCardEvents);
                        }
                    }
                }
            }
        }
    }
}

export {
    AbstractRequest
}