import * as proto from '@code-wallet/rpc';
import { IdempotencyKey } from '../idempotency';
import { Keypair } from '../keys';
import { CodePayload } from '../payload';
import { Intent, SignedIntent } from '../intent';
import { ElementOptions  } from '../elements/options';
import { generateRendezvousKeypair } from '../rendezvous';

/**
 * An abstract class for an intent that can be created and signed.
 */
abstract class AbstractIntent implements Intent {
    options: ElementOptions;
    nonce: IdempotencyKey;

    rendezvousPayload: CodePayload;
    rendezvousKeypair: Keypair;

    /**
     * Constructs a new PaymentRequestIntent instance.
     * 
     * @param opt - The payment request options.
     */
    constructor(opt: ElementOptions) {
        this.options = {
            ...opt,
        };

        this.init();
        this.validate();

        // Create an 11 byte buffer from idempotencyKey if provided, otherwise generate a random nonce
        if (this.options.idempotencyKey) {
            this.nonce = IdempotencyKey.fromSeed(this.options.idempotencyKey);
        } else if (this.options.clientSecret) {
            this.nonce = IdempotencyKey.fromClientSecret(this.options.clientSecret);
        } else {
            this.nonce = IdempotencyKey.generate();
        }

        this.rendezvousPayload = this.toPayload();
        this.rendezvousKeypair = generateRendezvousKeypair(this.rendezvousPayload)
    }

    abstract init(): void;
    abstract toPayload(): CodePayload;
    abstract validate(): void;
    abstract toProto(): proto.Message;
    abstract sign(): SignedIntent; 

    /**
     * Constructs a SendMessageRequest message to be sent to the Code Sequencer.
     */
    async getSendMessageRequestProto() {
        const message = this.toProto();
        const { signature } = this.sign();

        return new proto.SendMessageRequest({
            message,
            rendezvousKey: {
                value: this.rendezvousKeypair.getPublicKey().value,
            },
            signature: {
                value: signature,
            }
        });
    }

    /**
     * Retrieves the client secret.
     * 
     * @returns The client secret as a string.
     */
    getClientSecret(): string {
        return this.nonce.toString();
    }

    /**
     * Retrieves the intent ID.
     * 
     * @returns The intent ID as a Base58 encoded string.
     */
    getIntentId(): string {
        return this.rendezvousKeypair.getPublicKey().toBase58();
    }
}

export {
    AbstractIntent,
}