import { CurrencyCode } from '../currency';
import { ConfirmParams, IntentOptions, IntentSigners, WebhookParams } from '../intent';

/**
 * Represents the possible types of elements.
 */
type ElementType = 'button' | 'card';

/**
 * Describes the appearance themes for the element.
 */
type ElementAppearance = 'dark' | 'light';

/**
 * Represents the locale for the element.
 * TODO: add supported locales
 */
type ElementLocale = string;

/**
 * Defines a fee payment for a payment request.
 */
interface PaymentRequestFee {
    /** The destination token address as a base58 string for this fee. */
    destination: string;

    /** Fee percentage, in basis point (0 - 10,000), of the total quark amount of a payment. */
    basisPoints: number;
}

/**
 * Defines the options needed for processing a payment request.
 */
interface PaymentRequestOptions {
    /** The destination token address as a base58 string. */
    destination: string;

    /** The monetary amount for the payment request. */
    amount: number;

    /** The currency code of the requested payment amount. */
    currency: CurrencyCode;

    /** 
     * Additional fee payments (optional). This allows a payment request to send
     * a percentage of the payment to another account. This is in addition to
     * the hard-coded Code $0.01 USD fee.
     * */
    fees?: PaymentRequestFee[];
}

/**
 * Defines the options needed for processing a login request from a third-party.
 */
interface LoginRequestOptions {
    login: {
        /** The hostname of a third-party that is requesting this login. This hostname must serve a /.well-known/code-payments.json file with the verifier public key. */
        domain: string;

        /** The public key of the verifier that sign the login request as a base58 string. This public key must be found in the well-known file. */
        verifier: string;
    };
}

/**
 * Describes the locale options for the element.
 */
interface LocaleOptions {
    /** Specifies the locale setting for the element. */
    locale: ElementLocale;
}

/**
 * Describes the appearance options for the element.
 */
interface AppearanceOptions {
    /** Specifies the visual theme of the element. */
    appearance: ElementAppearance;
}

/**
 * Represents the combined options for creating an element.
 * Combines various partial options from intents, appearance, locale, etc.
 */
type ElementOptions = Partial<IntentOptions> & 
    Partial<IntentSigners> &
    Partial<PaymentRequestOptions> & 
    Partial<LoginRequestOptions> &
    Partial<LocaleOptions> & 
    Partial<AppearanceOptions> & 
    Partial<WebhookParams> &
    Partial<ConfirmParams>;

export type {
    ElementType,
    ElementAppearance,
    ElementLocale,
    ElementOptions,

    IntentOptions,
    IntentSigners,
    LocaleOptions,
    AppearanceOptions,
    PaymentRequestOptions,
    LoginRequestOptions,
};