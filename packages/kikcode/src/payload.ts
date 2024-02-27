import { 
    CurrencyCode,
    currencyCodeToIndex,
    indexToCurrencyCode,
    isValidCurrency, 
    ErrInvalidCurrency
} from "@code-wallet/currency";

import { ErrInvalidSize, ErrInvalidValue } from "./errors";
import { CodeKind, CodePayloadOptions } from "./types";

/**
 * CodePayload class represents the payload format for scan codes.
 * It handles conversion to and from binary format and validation.
 */
class CodePayload {
    kind: CodeKind;
    nonce: Uint8Array;
    amount?: bigint;
    currency?: CurrencyCode;

    static readonly MAX_LENGTH: number = 20;

    /**
     * Construct a new CodePayload.
     * 
     * @param opt - The options for constructing the payload.
     */
    constructor(opt: CodePayloadOptions) {
        this.kind = opt.kind;
        this.amount = opt.amount;
        this.nonce = opt.nonce;
        
        if (opt.currency && !isValidCurrency(opt.currency)) {
            throw ErrInvalidCurrency();
        }
        this.currency = opt.currency as CurrencyCode | undefined;
    }

    private isCash(): this is this & { amount: bigint } {
        return this.kind === CodeKind.Cash && this.amount != null;
    }

    private isGiftCard(): this is this & { amount: bigint } {
        return this.kind === CodeKind.GiftCard && this.amount != null;
    }

    private isRequestPayment(): this is this & { currency: string, amount: bigint } {
        return this.kind === CodeKind.RequestPayment && this.currency != null && this.amount != null;
    }

    /**
     * Validates the payload, throwing an error if invalid.
     */
    validate() {
        if (this.kind === CodeKind.RequestPayment) {
            if (!this.currency) {
                throw ErrInvalidCurrency();
            }
        }

        if (this.kind === CodeKind.Cash || 
            this.kind === CodeKind.GiftCard ||
            this.kind === CodeKind.RequestPayment) {
            if (!this.amount) {
                throw ErrInvalidValue();
            }
        }
    }

    /**
     * Convert the payload to its binary representation.
     * 
     * @returns A Uint8Array containing the binary representation of the payload.
     */
    toBinary(): Uint8Array {
        const data = new Uint8Array(20);
        data[0] = this.kind;

        this.validate();

        if (this.isRequestPayment()) {
            // for Payment Request
            if (!this.currency) {
                throw ErrInvalidCurrency();
            }
            
            const currencyIndex = currencyCodeToIndex(this.currency);
            data[1] = currencyIndex;
            for (let i = 0; i < 7; i++) {
                data[i + 2] = Number(this.amount >> BigInt(8 * i) & BigInt(0xFF));
            }
        }  

        if (this.isCash() || this.isGiftCard()) {
            // for Cash and Gift Card
            for (let i = 0; i < 8; i++) {
                data[i + 1] = Number(this.amount >> BigInt(8 * i) & BigInt(0xFF));
            }
        }

        data.set(this.nonce, 9);
        
        return data;
    }

    /**
     * Create a CodePayload from its binary representation.
     * 
     * @param data - The binary data.
     * @returns A new instance of CodePayload.
     */
    static fromData(data: Uint8Array): CodePayload {
        if (data.length !== CodePayload.MAX_LENGTH) {
            throw ErrInvalidSize();
        }

        const kind = data[0] as CodeKind;
        let amount: bigint | undefined;
        let nonce: Uint8Array;
        let currency: CurrencyCode | undefined;

        if (kind === CodeKind.RequestPayment) {
            // for Payment Request
            const currencyIndex = data[1];
            currency = indexToCurrencyCode(currencyIndex);
            amount = data.slice(2, 9).reduce((acc, val, i) => acc + (BigInt(val) << BigInt(8 * i)), BigInt(0));
        } 
        
        if (kind === CodeKind.Cash || kind === CodeKind.GiftCard) {
            // for Cash and Gift Card
            amount = data.slice(1, 9).reduce((acc, val, i) => acc + (BigInt(val) << BigInt(8 * i)), BigInt(0));
        }
        
        nonce = data.slice(9);

        return new CodePayload({ kind, amount, currency, nonce });
    }
}

export {
    CodePayload,
    CodeKind,
};