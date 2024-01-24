import { 
    IntentOptions,
    IntentSigners,
    LoginRequestOptions,
    WebhookParams,
    LoginRequestIntent,
} from "@code-wallet/library";

import { useClient } from "../utils/useClient";
import { createIntent } from "../utils/createIntent";
import { 
    GetStatusForIntentRequest, 
    GetStatusForIntentOptions,
} from "../requests/getStatus";

import { GetUserIdOptions, GetUserIdRequest  } from "../requests/getUserId";
import { ClientOptions } from "../client";
import { RegisterWebhookForIntentRequest } from "../requests/registerWebhook";

/**
 * Options for creating a login intent.
 * 
 * Login attempts require a verifier, which is a public key that is used to
 * verify the ownership of a domain. The verifier public key must be provided by
 * the domain at the root level inside the /.well-known/code-payments.json file.
 * 
 * Any intent can optionally be configured with a webhook. If a webhook is
 * provided, the intent details will be sent to the webhook after it is
 * confirmed.
 */
type CreateLoginIntentOptions = LoginRequestOptions &
    IntentOptions &
    IntentSigners &
    Partial<WebhookParams>;

/**
 * Collection of methods related to handling login intents.
 */
const loginIntents = {

    /**
     * Creates a new login intent.
     * 
     * @param opt - The options for creating a login intent.
     * @returns An object containing the client secret and intent ID.
     * @throws Will throw an error if unable to create the intent.
     **/
    create: async (opt: CreateLoginIntentOptions & ClientOptions) => {
        const client = useClient(opt);
        const intent = new LoginRequestIntent(opt);

        const res = await createIntent(intent, client);

        if (opt.webhook) {
            const req = new RegisterWebhookForIntentRequest({
                intent: res.id,
                url: opt.webhook.url,
            });
            const whRes = await req.send(client);
            if (!whRes.success) {
                throw new Error(`Unable to register webhook: ${whRes.message}`);
            }
        }

        return res;
    },
    
    /**
     * Retrieves the status of a specified payment intent.
     * 
     * @param opt - The options containing the intent ID to check status for.
     * @returns An object representing the intent's status.
     * @throws Will throw an error if unable to retrieve the intent's status.
     */
    getStatus: async (opt: GetStatusForIntentOptions & ClientOptions) => {
        const client = useClient(opt);

        const req = new GetStatusForIntentRequest(opt);
        return await req.send(client);
    },

    /**
     * Retrieves the user ID associated with a login intent.
     * 
     * @param opt  - The options containing the intent ID and verifier to retrieve the user ID for.
     * @returns An object containing the user ID if the verifier is valid and the intent is confirmed.
     * @throws Will throw an error if unable to retrieve the user ID for the specified intent.
     */
    getUserId: async (opt: GetUserIdOptions & ClientOptions) => {
        const client = useClient(opt);

        const req = new GetUserIdRequest(opt);
        return await req.send(client);
    }
}


export {
    loginIntents,
}
