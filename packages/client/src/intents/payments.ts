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

import { useClient } from "../utils/useClient";
import { createIntent } from "../utils/createIntent";
import { GetStatusForIntentRequest } from "../requests/getStatus";
import { RegisterWebhookForIntentRequest } from "../requests/registerWebhook";
import { logger } from "../utils/logger"; // Assuming a logger utility is available

/**
 * Enhanced options for creating a payment intent with added configurability.
 */
type CreatePaymentIntentOptions = PaymentRequestOptions & 
    IntentOptions & 
    Partial<IntentSigners> &
    Partial<WebhookParams> & 
    Partial<LoginRequestOptions> & 
    Partial<ClientOptions>;

/**
 * A modular and feature-rich collection of methods for handling payment intents.
 */
class PaymentIntentService {
    /**
     * Creates and registers a payment intent with optional login and webhook configuration.
     */
    async createIntent(options: CreatePaymentIntentOptions): Promise<Intent> {
        try {
            const client = useClient(options);
            const intent = options.login ? new PaymentRequestWithLoginIntent(options) : new PaymentRequestIntent(options);
            const result = await createIntent(intent, client);
            logger.info(`Intent created with ID: ${result.id}`);
            
            if (options.webhook) {
                await this.registerWebhook(result.id, options.webhook, client);
            }

            return result;
        } catch (error) {
            logger.error(`Error creating intent: ${error.message}`);
            throw error; // Rethrow to allow caller to handle
        }
    }

    /**
     * Registers a webhook for the specified intent.
     */
    async registerWebhook(intentId: string, webhookParams: WebhookParams, client: any): Promise<void> {
        const req = new RegisterWebhookForIntentRequest({
            intent: intentId,
            url: webhookParams.url,
        });

        const response = await req.send(client);
        if (!response.success) {
            throw new Error(`Unable to register webhook: ${response.message}`);
        }

        logger.info(`Webhook registered for intent ID: ${intentId}`);
    }

    /**
     * Retrieves the status of a specified payment intent.
     */
    async getIntentStatus(options: GetStatusForIntentOptions & ClientOptions): Promise<any> {
        try {
            const client = useClient(options);
            const req = new GetStatusForIntentRequest(options);
            return await req.send(client);
        } catch (error) {
            logger.error(`Error retrieving intent status: ${error.message}`);
            throw error; // Rethrow for external handling
        }
    }
}

export const paymentIntents = new PaymentIntentService();
