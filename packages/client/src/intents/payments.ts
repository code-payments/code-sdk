import { 
    IntentOptions,
    IntentSigners,
    PaymentRequestIntent,
    PaymentRequestWithLoginIntent,
    PaymentRequestOptions,
    LoginRequestOptions,
    WebhookParams,
    Intent,
} from "@code-wallet/library";

import { useConnection } from "../utils/useConnection";
import { createIntent } from "../utils/createIntent";
import { 
    GetStatusForIntentRequest, 
    GetStatusForIntentOptions
} from "../requests/getStatus";
import { ConnectionOptions } from "../connection";

/**
 * Options for creating a payment intent.
 * 
 * Payments can optionally be made with a login request. If a login request is
 * provided, the user id can be retrieved from the intent after it is confirmed.
 * 
 * Any intent can optionally be configured with a webhook. If a webhook is
 * provided, the intent details will be sent to the webhook after it is
 * confirmed.
 */
type CreatePaymentIntentOptions = PaymentRequestOptions & 
    IntentOptions & 
    Partial<IntentSigners> &
    Partial<WebhookParams> & 
    Partial<LoginRequestOptions> & 
    Partial<ConnectionOptions>;

/**
 * Collection of methods related to handling payment intents.
 */
const paymentIntents = {

    /**
     * Creates a new payment intent.
     * 
     * @param opt - The options for creating a payment intent.
     * @returns An object containing the client secret and intent ID.
     * @throws Will throw an error if unable to create the intent.
     */
    create: async (opt: CreatePaymentIntentOptions & ConnectionOptions) => {
        const connection = useConnection(opt);

        let intent : Intent;
        if (opt.login) {
            intent = new PaymentRequestWithLoginIntent(opt);
        } else {
            intent = new PaymentRequestIntent(opt);
        }

        return await createIntent(intent, connection);
    },

    /**
     * Retrieves the status of a specified payment intent.
     * 
     * @param opt - The options containing the intent ID to check status for.
     * @returns An object representing the intent's status.
     * @throws Will throw an error if unable to retrieve the intent's status.
     */
    getStatus: async (opt: GetStatusForIntentOptions & ConnectionOptions) => {
        const connection = useConnection(opt);

        const req = new GetStatusForIntentRequest(opt);
        return await req.send(connection);
    }
}

export {
    paymentIntents,
}
