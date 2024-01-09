import bs58 from "bs58";
import { Buffer } from "buffer";
import { 
    IntentOptions,
    PaymentRequestIntent,
    PaymentRequestWithLoginIntent,
    PaymentRequestOptions,
    LoginRequestOptions,
    WebhookParams,
    Intent,
} from "@code-wallet/library";
import { Connection } from "./connection";

const api = 'https://api.getcode.com/v1';
const client = new Connection(api);

/**
 * Enumeration representing the possible states of a Payment Intent.
 */
enum PaymentIntentState {
    Pending = 'pending',
    Confirmed = 'confirmed',
}

type CreatePaymentIntentOptions = PaymentRequestOptions & 
    IntentOptions & 
    Partial<WebhookParams> & 
    Partial<LoginRequestOptions>;

type GetStatusForIntentOptions = { intent: string };

const pending = { status: PaymentIntentState.Pending };
const confirmed = { status: PaymentIntentState.Confirmed };

/**
 * Collection of methods related to handling payment intents.
 */
const paymentIntents = {
    /**
     * Creates a new payment intent.
     * 
     * @param obj - The options for creating a payment intent.
     * @returns An object containing the client secret and intent ID.
     * @throws Will throw an error if unable to create the intent.
     */
    create: async (obj: CreatePaymentIntentOptions) => {
        obj.mode = 'payment';

        let intent : Intent;
        if (obj.login) {
            intent = new PaymentRequestWithLoginIntent(obj);
        } else {
            intent = new PaymentRequestIntent(obj);
        }

        const envelope = intent.sign();
        const body = {
            intent: envelope.intent,
            message: Buffer.from(envelope.message).toString('base64url'),
            signature: bs58.encode(envelope.signature),
            webhook: intent.options.webhook?.url,
        }

        await client.post('createIntent', body);

        return {
            clientSecret: intent.getClientSecret(),
            id: intent.getIntentId(),
        }
    },

    /**
     * Retrieves the status of a specified payment intent.
     * 
     * @param obj - The options containing the intent ID to check status for.
     * @returns An object representing the intent's status.
     * @throws Will throw an error if unable to retrieve the intent's status.
     */
    getStatus: async (obj: GetStatusForIntentOptions) => {
        const res = await client.get('getStatus', { intent: obj.intent });

        if (res.status === 'SUBMITTED') {
            return confirmed;
        }

        return pending;
    }
}

export {
    paymentIntents,
}