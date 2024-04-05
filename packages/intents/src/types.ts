import * as proto from '@code-wallet/rpc';
import { CodePayload } from '@code-wallet/kikcode';
import { Keypair } from '@code-wallet/keys';
import { ElementOptions } from './options';
import { IdempotencyKey } from './keys/idempotency';

/**
 * An interface for an intent that might have a message to send to the Code Sequencer, but not necessarily. 
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
     * Whether this intent has a message to send to the Code Sequencer.
     */
    hasMessage(): boolean;
 
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
 * An interface for an object that can be serialized into a message to send to the Code Sequencer.
 */
export interface WithMessage {
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
}

/**
 * An intent that has a message to send to the Code Sequencer.
 */
export type IntentWithMessage = Intent & WithMessage;
 
/**
 * An object containing a signed intent and its signature.
 */
export interface SignedIntent {
    /** The intent ID of the intent being created. */
    intent: string;
 
    /** A serialized message that was signed. */
    envelope: proto.Message;

    /** The signed message as a Uint8Array. */
    signedBytes: Uint8Array;
 
    /** A signature generated with the rendezvous private key. */
    signature: Uint8Array;
}