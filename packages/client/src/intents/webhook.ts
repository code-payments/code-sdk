import { useClient } from "../utils/useClient";
import { RegisterWebhookOptions, RegisterWebhookForIntentRequest } from "../requests/registerWebhook";
import { ClientOptions } from "../client";
// Is there a logger utility?

/**
 * A service class for handling webhook registrations.
 */
class WebhookService {
    /**
     * Registers a webhook for a specified intent.
     * 
     * @param options - The options for registering a webhook.
     * @returns A promise that resolves with the result of the webhook registration request.
     * @throws Will throw an error if unable to register the webhook.
     */
    async register(options: RegisterWebhookOptions & ClientOptions): Promise<any> {
        try {
            const client = useClient(options);
            const request = new RegisterWebhookForIntentRequest(options);
            const response = await request.send(client);
            logger.info(`Webhook registered successfully for intent: ${options.intent}`);
            return response;
        } catch (error) {
            logger.error(`Error registering webhook: ${error.message}`);
            throw error; // Rethrow to allow caller to handle
        }
    }
}

export const webhookService = new WebhookService();
