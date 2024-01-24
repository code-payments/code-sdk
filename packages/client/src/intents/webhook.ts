import { useClient } from "../utils/useClient";
import { 
    RegisterWebhookOptions,
    RegisterWebhookForIntentRequest
} from "../requests/registerWebhook";

import { ClientOptions } from "../client";

/**
 * Collection of methods related to handling webooks.
 */
const webhook = {

    /**
     * Registers a webhook for a specified intent.
     * 
     * @param opt - The options for registering a webhook.
     * @throws Will throw an error if unable to create the intent.
     **/
    register: async (opt: RegisterWebhookOptions & ClientOptions) => {
        const client = useClient(opt);

        const req = new RegisterWebhookForIntentRequest(opt);
        return await req.send(client);
    },
}


export {
    webhook,
}
