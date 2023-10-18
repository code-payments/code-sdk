import { ElementOptions } from './options';
import { isValidCurrency } from '../currency';
import {
    ErrAmbiguousNonce,
    ErrAmountRequired,
    ErrCurrencyRequired,
    ErrDestinationRequired,
    ErrInvalidCurrency,
    ErrInvalidMode
} from '../errors';

/**
 * Validates the properties of the given `ElementOptions` for intents.
 *
 * @param intent The options to validate.
 * @throws {ErrInvalidMode} If the `mode` property is undefined.
 * @throws {ErrAmbiguousNonce} If both `idempotencyKey` and `clientSecret` are provided.
 */
function validateIntentOptions(intent: ElementOptions) {
    if (intent.mode === undefined) {
        throw ErrInvalidMode();
    }

    if (intent.idempotencyKey && intent.clientSecret) {
        throw ErrAmbiguousNonce();
    }
}

/**
 * Validates the properties of the given `ElementOptions` for payment requests.
 *
 * @param intent The options to validate.
 * @throws {ErrDestinationRequired} If the `destination` property is undefined.
 * @throws {ErrAmountRequired} If the `amount` property is undefined.
 * @throws {ErrCurrencyRequired} If the `currency` property is undefined.
 * @throws {ErrInvalidCurrency} If the `currency` property is not a valid currency.
 */
function validatePaymentRequestOptions(intent: ElementOptions) {
    if (intent.destination === undefined) {
        throw ErrDestinationRequired();
    }

    if (intent.amount === undefined) {
        throw ErrAmountRequired();
    }

    if (intent.currency === undefined) {
        throw ErrCurrencyRequired();
    }

    if (!isValidCurrency(intent.currency)) {
        throw ErrInvalidCurrency();
    }
}

/**
 * Validates the properties of the given `ElementOptions` depending on its mode.
 *
 * @param intent The options to validate.
 * @throws {ErrInvalidMode} If the `mode` property is neither 'payment'.
 */
function validateElementOptions(intent: ElementOptions) {
    validateIntentOptions(intent);

    switch (intent.mode) {
        case 'payment':
            validatePaymentRequestOptions(intent);
            break;
        default:
            throw ErrInvalidMode();
    }
}

export {
    validateElementOptions,
}