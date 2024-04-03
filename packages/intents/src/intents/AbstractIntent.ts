import * as proto from '@code-wallet/rpc';
import { Keypair } from '@code-wallet/keys';
import { CodePayload } from '@code-wallet/kikcode';

import { ElementOptions } from '../options';
import { Intent, IntentWithMessage } from '../types';
import { IdempotencyKey } from '../keys/idempotency';
import { generateRendezvousKeypair } from '../keys/rendezvous';

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

        this.init(opt);
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

    abstract init(opt: ElementOptions): void;
    abstract toPayload(): CodePayload;
    abstract validate(): void;
    abstract hasMessage(): boolean;

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

/**
 * Constructs a SendMessageRequest message to be sent to the Code Sequencer.
 */
async function getSendMessageRequestProto(intent: IntentWithMessage) {
    const { signature, envelope } = intent.sign();

    return new proto.SendMessageRequest({
        message: envelope,
        rendezvousKey: {
            value: intent.rendezvousKeypair.getPublicKey().value,
        },
        signature: {
            value: signature,
        }
    });
}

export {
    AbstractIntent,
    getSendMessageRequestProto,
}