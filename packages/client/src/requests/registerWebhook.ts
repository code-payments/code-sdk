import * as proto from "@code-wallet/rpc";
import { PublicKey, } from "@code-wallet/library";
import { CodeRequest } from "../request";
import { Client } from "../client";

export type RegisterWebhookResult = 'unknown' | 'ok' | 'already_registered' | 'request_not_found' | 'invalid_url' | 'intent_exists';

export interface RegisterWebhookResponse {
    success: boolean,
    message: RegisterWebhookResult,
}

export interface RegisterWebhookOptions {
    intent: string,
    url: string,
}

class RegisterWebhookForIntentRequest implements CodeRequest<RegisterWebhookResponse> {
    readonly intentId : string;
    readonly url : string;

    constructor(opts: RegisterWebhookOptions) {
        this.intentId = opts.intent;
        this.url = opts.url;
        this.validate();
    }

    validate() {
        if (!this.intentId) {
            throw new Error('Intent ID is required');
        }

        if (!this.url) {
            throw new Error('URL is required');
        }
    }

    toProto() {
        const intentId = PublicKey.fromBase58(this.intentId);

        return new proto.RegisterWebhookRequest({
            intentId: {
                value: intentId.toBuffer(),
            },
            url: this.url,
        });
    }

    sign() {
        // This request doesn't need to be signed.
        return undefined;
    }

    async send(client: Client) : Promise<RegisterWebhookResponse> {
        const res = await client.send(proto.MicroPayment, 'registerWebhook', this.toProto());

        const message = toStringResult(res.result);
        
        if (res.result === proto.RegisterWebhookResponse_Result.OK) {
            return {
                success: true,
                message,
            }
        }

        return {
            success: false,
            message,
        }
    }
}

function toStringResult(val: proto.RegisterWebhookResponse_Result) : RegisterWebhookResult {
    switch (val) {
        case proto.RegisterWebhookResponse_Result.OK:
            return 'ok';
        case proto.RegisterWebhookResponse_Result.ALREADY_REGISTERED:
            return 'already_registered';
        case proto.RegisterWebhookResponse_Result.REQUEST_NOT_FOUND:
            return 'request_not_found';
        case proto.RegisterWebhookResponse_Result.INVALID_URL:
            return 'invalid_url';
        case proto.RegisterWebhookResponse_Result.INTENT_EXISTS:
            return 'intent_exists';
        default:
            return 'unknown';
    }
}


export {
    RegisterWebhookForIntentRequest,
}