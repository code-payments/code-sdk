import { CurrencyCode } from '@code-wallet/currency';
import { Keypair } from '@code-wallet/keys';

/**
 * The mode of the intent.
 */
export type IntentType = 'payment' | 'login' | 'tip';

/**
 * Represents the possible types of elements.
 */
export type ElementType = 'button' | 'page' | 'card';

/**
 * Describes the appearance themes for the element.
 */
export type ElementAppearance = 'dark' | 'light';

/**
 * Represents the locale for the element.
 * TODO: add supported locales
 */
export type ElementLocale = string;

 
/**
 * Base options for creating an intent.
 * Refer to https://code-wallet.github.io/code-sdk/docs/intents/introduction.html for more information.
 */
export interface IntentOptions {
    mode: IntentType;
 
    /**
     * An optional client secret that can be used for idempotency purposes.
     */
    clientSecret?: string;
 
    /**
     * If set, `idempotencyKey` will be used to prevent accidental creation of multiple
     * intents with the same ID.
     * See https://code-wallet.github.io/code-sdk/docs/reference/idempotency.html for more information.
     */
    idempotencyKey?: string;
}

/**
 * Some intents require signers to be specified. This is a list of signers for
 * an intent. For example, login intents require a signer.
 */
export interface IntentSigners {
    /**
     * A list of signers for an intent. 
     */
    signers: Keypair[];
}
 
/**
 * Actions that can be performed on an intent after it is invoked.
 */
export interface ConfirmParams {
    confirmParams: {
        success?: { url: string; },
        cancel?: { url: string; }
    };
}
 
/**
 * The parameters to configure webhooks on the intent.
 * See https://code-wallet.github.io/code-sdk/docs/reference/webhook.html for more information.
 */
export interface WebhookParams {
    webhook: { url: string; };
}

/**
 * Defines a fee payment for a payment request.
 */
export interface PaymentRequestFee {
    /** The destination token address as a base58 string for this fee. */
    destination: string;

    /** Fee percentage, in basis point (0 - 10,000), of the total quark amount of a payment. */
    basisPoints: number;
}

/**
 * Defines the options needed for processing a payment request.
 */
export interface PaymentRequestOptions {
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
export interface LoginRequestOptions {
    login: {
        /** The hostname of a third-party that is requesting this login. This hostname must serve a /.well-known/code-payments.json file with the verifier public key. */
        domain: string;

        /** The public key of the verifier that sign the login request as a base58 string. This public key must be found in the well-known file. */
        verifier: string;
    };
}

/**
 * Defines the options needed for external platform integrations.
 */
export interface ExternalPlatformOptions {
    platform: {
        name: 'twitter' | 'x', // At the moment, only Twitter is supported.
        username: string;
    }
}

/**
 * Describes the locale options for the element.
 */
export interface LocaleOptions {
    /** Specifies the locale setting for the element. */
    locale: ElementLocale;
}

/**
 * Describes the appearance options for the element.
 */
export interface AppearanceOptions {
    /** Specifies the visual theme of the element. */
    appearance: ElementAppearance;
}

/**
 * Represents the combined options for creating an element.
 * Combines various partial options from intents, appearance, locale, etc.
 */
export type ElementOptions = Partial<IntentOptions> & 
    Partial<IntentSigners> &
    Partial<PaymentRequestOptions> & 
    Partial<LoginRequestOptions> &
    Partial<ExternalPlatformOptions> &
    Partial<LocaleOptions> & 
    Partial<AppearanceOptions> & 
    Partial<WebhookParams> &
    Partial<ConfirmParams>;

export type ElementOptionsWithLogin = ElementOptions & LoginRequestOptions;
export type ElementOptionsWithPayment = ElementOptions & PaymentRequestOptions;