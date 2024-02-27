import { AbstractRequest } from '../';
import { LoginRequestIntent } from "@code-wallet/intents";
import * as proto from '@code-wallet/rpc';

class LoginRequest extends AbstractRequest {
    intent: LoginRequestIntent;

    constructor(intent: LoginRequestIntent) {
        super(intent);
        this.intent = intent;
    }

    static fromPayload(val: string, opt: { 
        clientSecret?: string,
        idempotencyKey?: string,
        successUrl?: string,
        cancelUrl?: string,
    } = {}) {

        const body = AbstractRequest.bodyFromPayload(val, opt);
        const intent = new LoginRequestIntent(body);
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