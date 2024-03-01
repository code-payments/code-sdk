import { CurrencyCode, currencyCodeToIndex, indexToCurrencyCode, isValidCurrency } from "./currency";
import { ErrInvalidCurrency, ErrInvalidSize, ErrInvalidValue } from "./errors";

/**
 * Scan Code Payload Format Overview
 *
 * Each payload is a 20-byte binary blob designed for pre-encoded scan code data. It comprises a common structure segmented into specific fields, including a type indicator, type-specific data, and a nonce for uniqueness.
 *
 * Structure:
 *    Bytes:    | 0 | 1      | 2 - 8/9   | 9 - 19 |
 *    Contents: | T | Layout Specific Data | Nonce |
 *
 * Fields:
 * - T (Type): 1 byte at the start, determining the scan code's layout.
 * - Nonce: Last 11 bytes, a unique, randomly-generated value for each initiation.
 *
 * Layouts:
 * - Cash/Gift Card (0/1):
 *   - Amount: Bytes 1-8, 64-bit unsigned integer for Kin in quarks.
 * - Payment Request (2):
 *   - C (Currency Code): Byte 1, encoded index < 255 for fiat currency.
 *   - Fiat: Bytes 2-8, representing the fiat amount (note on endianness).
 *
 * Endianness: Specify the byte order for multi-byte fields (e.g., little-endian).
 *
 * Examples:
 * - Cash: [Layout][Amount in quarks][Nonce]
 * - Payment Request: [Layout][Currency Code][Fiat Amount][Nonce]
 *
 * Nonce Generation: Describe methodology or reference to nonce generation technique.
 *
 * Note: The byte ranges and structures provided are crucial for accurately decoding and constructing scan code payloads.
 */



enum CodeKind {
    Cash = 0,
    GiftCard = 1,
    RequestPayment = 2,
    RequestLogin = 3,
}

interface CodePayloadOptions {
    kind: CodeKind;
    nonce: Uint8Array;
    amount?: bigint;
    currency?: CurrencyCode;
}

class CodePayload {
    kind: CodeKind;
    nonce: Uint8Array;
    amount?: bigint;
    currency?: CurrencyCode;

    static readonly MAX_LENGTH: number = 20;

    constructor(opt: CodePayloadOptions) {
        if (!Object.values(CodeKind).includes(opt.kind)) {
            throw new Error("Invalid code kind.");
        }
        if (opt.nonce.length !== 11) {
            throw ErrInvalidSize("Nonce must be 11 bytes.");
        }
        this.kind = opt.kind;
        this.amount = opt.amount;
        this.nonce = opt.nonce;

        if (opt.currency) {
            if (!isValidCurrency(opt.currency)) {
                throw ErrInvalidCurrency();
            }
            this.currency = opt.currency;
        }

        // Validate amount for kinds that require it
        if ([CodeKind.Cash, CodeKind.GiftCard, CodeKind.RequestPayment].includes(this.kind) && this.amount === undefined) {
            throw ErrInvalidValue("Amount is required for Cash, Gift Card, and Request Payment kinds.");
        }

        // Validate currency for RequestPayment kind
        if (this.kind === CodeKind.RequestPayment && !this.currency) {
            throw ErrInvalidCurrency("Currency is required for Request Payment kind.");
        }
    }

    toBinary(): Uint8Array {
        const data = new Uint8Array(CodePayload.MAX_LENGTH);
        data[0] = this.kind;

        if (this.isRequestPayment()) {
            const currencyIndex = currencyCodeToIndex(this.currency!); // Exclamation mark is safe due to prior validation
            data[1] = currencyIndex;
            this.fillAmount(data, 2, 8); // Adjusted indices for fiat amount
        } else if (this.isCash() || this.isGiftCard()) {
            this.fillAmount(data, 1, 8); // Cash and Gift Card use the same layout for the amount
        }

        data.set(this.nonce, 9); // Set nonce for all payload types

        return data;
    }

    private fillAmount(data: Uint8Array, start: number, length: number) {
        for (let i = 0; i < length; i++) {
            data[start + i] = Number((this.amount! >> BigInt(8 * i)) & BigInt(0xFF)); // Exclamation mark is safe due to prior validation
        }
    }

    static fromData(data: Uint8Array): CodePayload {
        if (data.length !== CodePayload.MAX_LENGTH) {
            throw ErrInvalidSize();
        }

        const kind = data[0];
        if (!Object.values(CodeKind).includes(kind)) {
            throw new Error("Invalid code kind.");
        }

        let amount: bigint | undefined;
        let currency: CurrencyCode | undefined;

        if (kind === CodeKind.RequestPayment) {
            const currencyIndex = data[1];
            currency = indexToCurrencyCode(currencyIndex);
            amount = BigInt(0);
            for (let i = 2; i < 9; i++) { // Adjusted loop to correctly calculate the fiat amount
                amount += BigInt(data[i]) << BigInt(8 * (i - 2));
            }
        } else if (kind === CodeKind.Cash || kind === CodeKind.GiftCard) {
            amount = BigInt(0);
            for (let i = 1; i < 9; i++) {
                amount += BigInt(data[i]) << BigInt(8 * (i - 1));
            }
        }

        const nonce = data.slice(9, 20); // Extract nonce correctly

        return new CodePayload({ kind, amount, currency, nonce });
    }

    private isCash(): boolean {
        return this.kind === CodeKind.Cash && this.amount !== undefined;
    }

    private isGiftCard(): boolean {
        return this.kind === CodeKind.GiftCard && this.amount !== undefined;
    }

    private isRequestPayment(): boolean {
        return this.kind === CodeKind.RequestPayment && this.currency !== undefined && this.amount !== undefined;
    }
}

export {
    CodePayload,
    CodeKind,
};
