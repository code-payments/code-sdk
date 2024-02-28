import * as proto from '@code-wallet/rpc';
import { IdempotencyKey } from '../idempotency';
import { Keypair } from '../keys';
import { CodePayload } from '../payload';
import { Intent, SignedIntent } from '../intent';
import { ElementOptions } from '../elements/options';
import { generateRendezvousKeypair } from '../rendezvous';

/**
 * An abstract class representing an intent that can be created and signed. It includes functionality
 * for handling idempotency, generating rendezvous keypairs, and preparing the intent for transmission.
 */
abstract class AbstractIntent implements Intent {
    protected options: ElementOptions;
    protected nonce: IdempotencyKey;
    protected rendezvousPayload: CodePayload;
    protected rendezvousKeypair: Keypair;

    /**
     * Initializes a new instance of an intent with the given options.
     * @param options The options to configure this intent instance.
     */
    constructor(options: ElementOptions) {
        this.options = options;
        this.initializeNonce();
        this.rendezvousPayload = this.toPayload();
        this.rendezvousKeypair = generateRendezvousKeypair(this.rendezvousPayload);
        this.init();
        this.validate();
    }

    /**
     * Initializes the nonce based on provided idempotency key or client secret, or generates a new one.
     */
    private initializeNonce(): void {
        if (this.options.idempotencyKey) {
            this.nonce = IdempotencyKey.fromSeed(this.options.idempotencyKey);
        } else if (this.options.clientSecret) {
            this.nonce = IdempotencyKey.fromClientSecret(this.options.clientSecret);
        } else {
            this.nonce = IdempotencyKey.generate();
        }
    }

    /**
     * Abstract method to initialize the intent.
     */
    abstract init(): void;

    /**
     * Abstract method to convert this intent into a payload.
     * @returns The intent represented as a CodePayload.
     */
    abstract toPayload(): CodePayload;

    /**
     * Abstract method to validate the intent's configuration.
     */
    abstract validate(): void;

    /**
     * Abstract method to convert this intent into a protocol message.
     * @returns A message conforming to the protocol structure.
     */
    abstract toProto(): proto.Message;

    /**
     * Abstract method to sign the intent.
     * @returns A signed intent including the signature and the signed envelope.
     */
    abstract sign(): SignedIntent;

    /**
     * Constructs a SendMessageRequest message to be sent to the Code Sequencer, including the necessary
     * rendezvous key and signature.
     * @returns A promise that resolves to the SendMessageRequest protocol message.
     */
    async getSendMessageRequestProto(): Promise<proto.SendMessageRequest> {
        const { signature, envelope } = this.sign();
        return new proto.SendMessageRequest({
            message: envelope,
            rendezvousKey: { value: this.rendezvousKeypair.getPublicKey().value },
            signature: { value: signature },
        });
    }

    /**
     * Retrieves the client secret.
     * @returns The client secret as a string.
     */
    getClientSecret(): string {
        return this.nonce.toString();
    }

    /**
     * Retrieves the intent ID.
     * @returns The intent ID as a Base58 encoded string.
     */
    getIntentId(): string {
        return this.rendezvousKeypair.getPublicKey().toBase58();
    }
}

export { AbstractIntent };
