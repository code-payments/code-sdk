import { AbstractRequest } from '../';
import { PaymentRequestIntent,} from "@code-wallet/library";
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

    static fromPayload(val: string, opt: { 
        clientSecret?: string,
        idempotencyKey?: string,
        successUrl?: string,
        cancelUrl?: string,
    } = {}) {

        const body = AbstractRequest.bodyFromPayload(val, opt);
        const intent = new PaymentRequestIntent(body);
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