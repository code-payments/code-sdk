import * as proto from '@code-wallet/rpc';
import { Client } from './client';
 
/**
 * An interface for making a request to the Code Sequencer. Most requests
 * require a signed proto message, this provides a common interface.
 */
export interface CodeRequest<T> {
    /**
     * Validate the details of this request, and throw an error if they're invalid.
     */
    validate(): void;
 
    /**
     * Serialize this request into a minimal message for sending to the Code Sequencer.
     */
    toProto(): proto.AnyMessage;
 
    /**
     * Sign this request with the given signers.
     * 
     * @returns A signature for this request
     */
    sign(): { message: Uint8Array, signature: Uint8Array } | undefined;

    /**
     * Submit this request to the Code Sequencer.
     * 
     * @param client - The connection to the Code Sequencer.
     */
    send(client: Client): Promise<T>;
}
 