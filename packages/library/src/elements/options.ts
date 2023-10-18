import { CurrencyCode } from '../currency';
import { ConfirmParams, IntentOptions, WebhookParams } from '../intent';

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
 * Defines the options needed for processing a payment request.
 */
interface PaymentRequestOptions {
    /** The destination identifier, e.g., an account or user ID. */
    destination: string;

    /** The monetary amount for the payment request. */
    amount: number;

    /** The currency code of the requested payment amount. */
    currency: CurrencyCode;
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
    Partial<PaymentRequestOptions> & 
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
    LocaleOptions,
    AppearanceOptions,
    PaymentRequestOptions,
};