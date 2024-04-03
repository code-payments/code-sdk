import { ElementOptions, TipRequestIntent  } from "@code-wallet/intents";
import { ExternalPlatformOptions } from "@code-wallet/intents";
import { BaseRequest } from './BaseRequest';

class TipRequest extends BaseRequest {
    intent: TipRequestIntent;

    constructor(intent: TipRequestIntent) {
        super(intent);
        this.intent = intent;
    }

    hasMessage(): boolean {
        return false;
    }

    static fromPayload(val: string, opt: { 
        clientSecret?: string,
        idempotencyKey?: string,
        successUrl?: string,
        cancelUrl?: string,
    } = {}) {

        const body = BaseRequest.bodyFromPayload(val, opt);
        const intent = new TipRequestIntent(body as ElementOptions & ExternalPlatformOptions);
        const req = new TipRequest(intent);

        return req;
    }
}

export {
    TipRequest
}