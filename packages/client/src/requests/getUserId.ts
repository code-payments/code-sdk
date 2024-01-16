import * as proto from "@code-wallet/rpc";
import { Keypair, PublicKey, } from "@code-wallet/library";
import { CodeRequest, } from "../request";
import { Connection } from "../connection";
import { ErrSignerRequired } from "../errors";
import bs58 from "bs58";

export interface ThirdPartyUserId {
    userId: string,
}

export type GetUserIdOptions = {
    intent: string,
    verifier: Keypair,
};

/**
 * GetUserId is a request to retrieve the user ID associated with a third party 
 * app after a login intent has been confirmed.
 * 
 * @throws Will throw an error if the intent ID is not provided.
 */
class GetUserIdRequest implements CodeRequest<ThirdPartyUserId> {
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
            message: msg.toBinary(),
            signature: sig,
        }
    }

    async send(client: Connection) {
        const { message, signature } = this.sign();

        const body = {
            intent: this.intentId,
            message: Buffer.from(message).toString('base64url'),
            signature: bs58.encode(signature),
        };

        const res = await client.post('getUserId', body);

        return {
            userId: res.userId as string,
        };
    }
}


export {
    GetUserIdRequest,
}
