import { AbstractRequest } from '../';
import { 
    ElementOptionsWithPayment,
    LoginRequestOptions, 
    PaymentRequestIntent, 
    PaymentRequestWithLoginIntent, 
} from "@code-wallet/intents";
import * as proto from '@code-wallet/rpc';

class PaymentRequest extends AbstractRequest {
    intent: PaymentRequestIntent;

    constructor(intent: PaymentRequestIntent) {
        super(intent);
        this.intent = intent;
    }

    getAmount() {
        return this.intent.options.amount;
    }

    getCurrency() {
        return this.intent.options.currency;
    }

    getDestination() {
        return this.intent.options.destination;
    }

    static getIntent(body: ElementOptionsWithPayment) {
        if (body.login) {
            return new PaymentRequestWithLoginIntent(body as ElementOptionsWithPayment & LoginRequestOptions);
        }
        return new PaymentRequestIntent(body);
    }

    static fromPayload(val: string, opt: { 
        clientSecret?: string,
        idempotencyKey?: string,
        successUrl?: string,
        cancelUrl?: string,
    } = {}) {

        const body = AbstractRequest.bodyFromPayload(val, opt);
        const intent = PaymentRequest.getIntent(body);
        const req = new PaymentRequest(intent);

        return req;
    }

    async toProto() {
        const { rendezvousKeypair } = this.intent;
        const { signedBytes, signature } = this.intent.sign();

        return new proto.SendMessageRequest({
            message: {
                kind: {
                    case: "requestToReceiveBill",
                    value: proto.RequestToReceiveBill.fromBinary(Buffer.from(signedBytes))
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
    PaymentRequest
}