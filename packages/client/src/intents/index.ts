import { loginIntents } from './login';
import { paymentIntents } from './payments';
import { webhook } from './webhook';

const getStatus = paymentIntents.getStatus;
const getUserId = loginIntents.getUserId;
const registerWebhook = webhook.register;

export {
    getStatus,
    getUserId,
    registerWebhook,

    paymentIntents,
    loginIntents,
    webhook,
};