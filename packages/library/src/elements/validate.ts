import { ElementOptions } from './options';
import { isValidCurrency } from '../currency';
import {
    ErrAmbiguousNonce,
    ErrAmountRequired,
    ErrCurrencyRequired,
    ErrDestinationRequired,
    ErrInvalidCurrency,
    ErrInvalidMode,
    ErrLoginRequired,
    ErrLoginDomainRequired,
    ErrLoginVerifierRequired,
    ErrNotImplemented,
    ErrInvalidValue,
} from '../errors';
import { PublicKey } from '../keys';

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
 * @throws {ErrInvalidAddress} If the `destination` property is not a valid base58 address.
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

    // Validate that the destination is a valid address.
    PublicKey.fromBase58(intent.destination);
}

/**
 * Validates the properties of the given `ElementOptions` for login requests.
 * 
 * @param intent The options to validate.
 * @throws {ErrLoginRequired} If the `login` property is undefined.
 * @throws {ErrLoginDomainRequired} If the `login.domain` property is undefined.
 * @throws {ErrLoginVerifierRequired} If the `login.verifier` property is undefined.
 * @throws {ErrInvalidAddress} If the `login.verifier` property is not a valid base58 address.
 */
function validateLoginRequestOptions(intent: ElementOptions) {
    if (intent.login === undefined) {
        throw ErrLoginRequired();
    }

    if (intent.login.domain === undefined) {
        throw ErrLoginDomainRequired();
    }

    if (intent.login.verifier === undefined) {
        throw ErrLoginVerifierRequired();
    }

    // Validate that the verifier is a valid address.
    PublicKey.fromBase58(intent.login.verifier);
}

/**
 * Validates the properties of the given `ElementOptions` for signers.
 */
function validateSigners(intent: ElementOptions) {
    if (!intent.signers) { return; }

    for (const signer of intent.signers) {
        if (!signer.sign && typeof signer.sign !== 'function') {
            throw ErrInvalidValue();
        }
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
        case 'login':
            validateLoginRequestOptions(intent);

            if (intent.signers) {
                validateSigners(intent);
            }

            break;
        case 'payment':
            validatePaymentRequestOptions(intent);

            if (intent.login) {
                validateLoginRequestOptions(intent);
            }
            if (intent.signers) {
                validateSigners(intent);
            }
            break;
        default:
            throw ErrInvalidMode();
    }
}

export {
    validateElementOptions,
}