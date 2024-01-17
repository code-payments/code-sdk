import * as proto from "@code-wallet/rpc";
import { PublicKey, } from "@code-wallet/library";
import { CodeRequest } from "../request";
import { Client } from "../client";

/**
 * Enumeration representing the possible states of a Payment Intent.
 */
export enum IntentState {
    Pending = 'pending',
    Confirmed = 'confirmed',
}

export interface IntentStatus {
    status: IntentState,
    exists: boolean,
    intentSubmitted: boolean,
    codeScanned: boolean,
}

export type GetStatusForIntentOptions = {
    intentId: string,
};

/**
 * GetStatusForIntent is a request to retrieve the status of a specified intent. 
 * 
 * This is useful in the case that a browser or client fails to let your server
 * know about the success of an intent. A webhook is recommended but you can use
 * this in lieu of one.
 * 
 * @throws Will throw an error if the intent ID is not provided.
 */
class GetStatusForIntentRequest implements CodeRequest<IntentStatus> {
    readonly intentId : string;

    constructor(opts: GetStatusForIntentOptions) {
        this.intentId = opts.intentId;

        this.validate();
    }

    validate() {
        if (!this.intentId) {
            throw new Error('Intent ID is required');
        }
    }

    toProto() {
        const intentId = PublicKey.fromBase58(this.intentId);

        return new proto.GetStatusRequest({
            intentId: {
                value: intentId.toBuffer(),
            },
        });
    }

    sign() {
        // This request doesn't need to be signed.
        return undefined;
    }

    async send(client: Client) : Promise<IntentStatus> {
        const res = await client.send(proto.MicroPayment, 'getStatus', this.toProto());
        
        let status = IntentState.Pending;
        if (res.intentSubmitted) {
            status = IntentState.Confirmed;
        }

        const { exists, codeScanned, intentSubmitted } = res;

        return { 
            status,
            exists,
            codeScanned,
            intentSubmitted,
        };
    }
}


export {
    GetStatusForIntentRequest,
}