import { loginIntents } from './login';
import { paymentIntents } from './payments';

const getStatus = paymentIntents.getStatus;
const getUserId = loginIntents.getUserId;

export {
    getStatus,
    getUserId,

    paymentIntents,
    loginIntents,
};