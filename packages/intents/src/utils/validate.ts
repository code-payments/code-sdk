import { PublicKey } from '@code-wallet/keys';
import { isValidCurrency } from '@code-wallet/currency';
import { ElementOptions } from '../options';
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
    ErrInvalidValue,
    ErrLoginSubdomainsNotSupported,
    ErrLoginIPNotSupported,
    ErrLoginLocalhostNotSupported,
    ErrLoginPortsNotSupported,
    ErrInvalidLoginDomain,
    ErrLoginExpectedDomainName,
    ErrPlatformRequired,
    ErrExpectedPlatformName,
    ErrExpectedUsername,
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

    let url: URL | undefined;
    try {
        // We expect the domain name to not be a fully qualified URL. Put another
        // way, we expect the domain name to not have a protocol, port, or path.
        url = new URL(intent.login.domain);
    } catch (e) {
        // noop
    }

    // If the domain is a valid URL, then we want to throw an error.
    if (url) {
        throw ErrLoginExpectedDomainName();
    }

    try {
        // At this point we know that the domain is not a valid URL, lets try
        // to make it one and see if it throws an error.
        url = new URL(`http://${intent.login.domain}`);
    } catch (e) {
        throw ErrInvalidLoginDomain();
    }

    // Check that the domain is not an IP address.
    if (url.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
        throw ErrLoginIPNotSupported();
    }

    // TODO: Add support for domain verification once tests are updated.
    const verifyDomain = true;
    if (verifyDomain) {
        // Check that there is no subdomain.
        if (url.hostname.split('.').length > 2) {
            throw ErrLoginSubdomainsNotSupported();
        }

        // Check that the domain is not localhost.
        if (url.hostname === 'localhost') {
            throw ErrLoginLocalhostNotSupported();
        }

        // Check that there is no port value.
        if (url.port) {
            throw ErrLoginPortsNotSupported();
        }

        // Check that there is no path.
        if (url.pathname !== '/' || intent.login.domain.includes('/')) {
            throw ErrLoginExpectedDomainName();
        }
    }

    // Validate that the verifier is a valid address.
    PublicKey.fromBase58(intent.login.verifier);
}

/**
 * Validates the tip request options.
 * 
 * @param intent The options to validate.
 * @throws {ErrPlatformRequired} If the `platform` property is undefined.
 * @throws {ErrExpectedPlatformName} If the `platform.name` property is undefined.
 * @throws {ErrExpectedUsername} If the `platform.username` property is undefined.
 */
function validateTipRequestOptions(intent: ElementOptions) {
    if (intent.platform === undefined) {
        throw ErrPlatformRequired();
    }

    if (intent.platform.name === undefined) {
        throw ErrExpectedPlatformName();
    }

    if (intent.platform.username === undefined) {
        throw ErrExpectedUsername();
    }
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
        case 'tip':
            validateTipRequestOptions(intent);

            break;
        default:
            throw ErrInvalidMode();
    }
}

export {
    validateElementOptions,
}