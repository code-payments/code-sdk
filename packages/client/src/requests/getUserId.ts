import * as proto from "@code-wallet/rpc";
import { Keypair, PublicKey, } from "@code-wallet/keys";
import { CodeRequest, } from "../request";
import { Client } from "../client";
import { ErrSignerRequired } from "../errors";

export type GetUserIdOptions = {
    intent: string,
    verifier: Keypair,
};

export type GetUserIdResponse = {
    userId: string | undefined,
};

/**
 * GetUserId is a request to retrieve the user ID associated with a third party 
 * app after a login intent has been confirmed.
 * 
 * @throws Will throw an error if the intent ID is not provided.
 */
class GetUserIdRequest implements CodeRequest<GetUserIdResponse> {
    readonly intentId : string;
    readonly signer : Keypair;

    constructor(opts: GetUserIdOptions) {
        this.intentId = opts.intent;
        this.signer = opts.verifier;

        this.validate();
    }

    validate() {
        if (!this.intentId) {
            return ErrSignerRequired();
        }
        if (!this.signer || !this.signer.sign) {
            return ErrSignerRequired();
        }
    }

    toProto() {
        const intentId = PublicKey.fromBase58(this.intentId);
        const verifier = this.signer.getPublicKey();

        return new proto.GetLoginForThirdPartyAppRequest({
            intentId: {
                value: intentId.toBuffer(),
            },
            verifier: {
                value: verifier.toBuffer(),
            }
        });
    }

    sign() {
        const msg = this.toProto();
        const sig = this.signer.sign(msg.toBinary());

        // Add the signature to the message.
        msg.signature = new proto.Common.Signature({
            value: sig,
        });

        return {
            envelope: msg,
            signedBytes: msg.toBinary(),
            signature: sig,
        }
    }

    async send(client: Client) {
        const { envelope } = this.sign();
        const res = await client.send(proto.Identity, 'getLoginForThirdPartyApp', envelope);

        let userId : string | undefined;
        if (res.userId) {
            const user = new PublicKey(res.userId.value);
            userId = user.toBase58();
        }

        return {
            userId,
        };
    }
}


export {
    GetUserIdRequest,
}
