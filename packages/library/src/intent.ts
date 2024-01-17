import * as proto from '@code-wallet/rpc';
import { IdempotencyKey } from './idempotency';
import { ElementOptions } from './elements/options';
import { Keypair } from './keys';
import { CodePayload } from './payload';
 
export type IntentType = 'payment' | 'login';
 
/**
 * Options for creating an intent.
 * Refer to https://code-wallet.github.io/code-sdk/docs/intents/introduction.html for more information.
 */
export interface IntentOptions {
    mode: IntentType;
 
    /**
     * An optional client secret that can be used for idempotency purposes.
     */
    clientSecret?: string;
 
    /**
     * If set, `idempotencyKey` will be used to prevent accidental creation of multiple
     * intents with the same ID.
     * See https://code-wallet.github.io/code-sdk/docs/reference/idempotency.html for more information.
     */
    idempotencyKey?: string;
}

export interface IntentSigners {
    /**
     * A list of signers for an intent. 
     */
    signers: Keypair[];
}
 
/**
 * Actions that can be performed on an intent after it is invoked.
 */
export interface ConfirmParams {
    confirmParams: {
        success?: { url: string; },
        cancel?: { url: string; }
    };
}
 
/**
 * The parameters to configure webhooks on the intent.
 * See https://code-wallet.github.io/code-sdk/docs/reference/webhook.html for more information.
 */
export interface WebhookParams {
    webhook: { url: string; };
}
 
/**
 * An interface for an intent that can be created and signed.
 */
export interface Intent {
    options: ElementOptions;
    nonce: IdempotencyKey;

    rendezvousPayload: CodePayload;
    rendezvousKeypair: Keypair;
 
    /**
     * Validate the details of this intent, and throw an error if they're invalid.
     */
    validate(): void;
 
    /**
     * Serialize this intent into a minimal message for sending to the Code Sequencer.
     */
    toProto(): proto.Message;

    /**
     * Serialize this intent into a request to be sent to the Code Sequencer.
     */
    getSendMessageRequestProto() : Promise<proto.SendMessageRequest>;
 
    /**
     * Sign this intent with the signer keys (if needed), returning an intent
     * that is ready to be sent to the Code Sequencer. The intent will be signed
     * with the rendezvous keypair by default, so no need to pass it in.
     * 
     * @returns {SignedIntent} The signed intent.
     */
    sign(): SignedIntent;
 
    /**
     * Get the client secret for this intent, which can be used to create linked browser elements. For example, the "Pay with Code" button.
     * 
     * @returns {string} The client secret for this intent.
     */
    getClientSecret(): string;

    /**
     * Get the intent ID for this intent, which can be used to create linked browser elements or request status.
     */
    getIntentId(): string;
}
 
/**
 * An object containing a signed intent and its signature.
 */
export interface SignedIntent {
    /** The intent ID of the intent being created. */
    intent: string;
 
    /** A serialized message that was signed. */
    message: Uint8Array;
 
    /** A signature generated with the rendezvous private key. */
    signature: Uint8Array;
}