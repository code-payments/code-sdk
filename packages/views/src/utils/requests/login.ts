import * as proto from '@code-wallet/rpc';
import { ElementOptions, LoginRequestIntent, LoginRequestOptions } from "@code-wallet/intents";
import { BaseRequest, BaseRequestWithMessage } from "./base";

class LoginRequest extends BaseRequestWithMessage {
    intent: LoginRequestIntent;

    constructor(intent: LoginRequestIntent) {
        super(intent);
        this.intent = intent;
    }

    hasMessage() : boolean {
        return true;
    }

    static fromPayload(val: string, opt: { 
        clientSecret?: string,
        idempotencyKey?: string,
        successUrl?: string,
        cancelUrl?: string,
    } = {}) {

        const body = BaseRequest.bodyFromPayload(val, opt);
        const intent = new LoginRequestIntent(body as ElementOptions & LoginRequestOptions);
        const req = new LoginRequest(intent);

        return req;
    }

    async toProto() {
        const { rendezvousKeypair } = this.intent;
        const { signedBytes, signature } = this.intent.sign();

        return new proto.SendMessageRequest({
            message: {
                kind: {
                    case: "requestToLogin",
                    value: proto.RequestToLogin.fromBinary(Buffer.from(signedBytes))
                }
            },
            rendezvousKey: {
                value: rendezvousKeypair.getPublicKey().value,
            },
            signature: {
                value: signature,
            }
        });
    }

}

export {
    LoginRequest
}