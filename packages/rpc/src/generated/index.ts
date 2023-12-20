export * from './account/v1';
export * from './badge/v1';
export * as Chat from './chat/v1';
export * as Common from './common/v1';
export * as Contact from './contact/v1';
export * from './currency/v1';
export * from './device/v1';
export * from './invite/v2';
export * from './messaging/v1';
export * from './micropayment/v1';
export * from './phone/v1';
export * from './push/v1';
export * from './transaction/v2';
export * from './user/v1';

import { Account } from './account/v1';
import { Badge } from './badge/v1';
import { Chat } from './chat/v1';
import { ContactList } from './contact/v1';
import { Currency } from './currency/v1';
import { Device } from './device/v1';
import { Invite } from './invite/v2';
import { Messaging } from './messaging/v1';
import { MicroPayment } from './micropayment/v1';
import { PhoneVerification } from './phone/v1';
import { Push } from './push/v1';
import { Transaction } from './transaction/v2';
import { Identity } from './user/v1';

const Services = {
    Account,
    Badge,
    Chat,
    ContactList,
    Currency,
    Device,
    Invite,
    Messaging,
    MicroPayment,
    PhoneVerification,
    Push,
    Transaction,
    Identity,
}

export {
   Services 
}