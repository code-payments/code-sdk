import { sha256 } from '@noble/hashes/sha256';
import { bytesToBase64 } from './utils';

import { 
    CurrencyCode,
    currencyCodeToIndex,
    indexToCurrencyCode,
    isValidCurrency, 
    ErrInvalidCurrency,
} from "@code-wallet/currency";

import { ErrInvalidSize, ErrInvalidValue, ErrInvalidUsername, ErrInvalidNonce } from "./errors";
import { CodeKind, CodePayloadOptions } from "./types";

/**
 * CodePayload class represents the payload format for scan codes.
 * It handles conversion to and from binary format and validation.
 */
class CodePayload {
    kind: CodeKind;

    nonce?: Uint8Array;
    amount?: bigint;
    currency?: CurrencyCode;
    username?: string;

    static readonly MAX_LENGTH: number = 20;

    /**
     * Construct a new CodePayload.
     * 
     * @param opt - The options for constructing the payload.
     */
    constructor(opt: CodePayloadOptions) {
        this.kind = opt.kind;
        this.nonce = opt.nonce;
        this.amount = opt.amount;
        this.username = opt.username;
        
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

    private isRequestPaymentWithFeesSupport(): this is this & { currency: string, amount: bigint } {
        return this.kind === CodeKind.RequestPaymentWithFeesSupport && this.currency != null && this.amount != null;
    }

    private isTip(): this is this & { username: string } {
        return this.kind === CodeKind.Tip && this.username != null;
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

        if (this.kind === CodeKind.Tip) {
            if (!this.username) {
                throw ErrInvalidUsername();
            }

            if (this.username.length > 15) {
                throw ErrInvalidUsername();
            }
        }

        if (this.kind !== CodeKind.Tip && (!this.nonce || this.nonce.length !== 11)) {
            throw ErrInvalidNonce();
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

        if (this.isRequestPayment() || this.isRequestPaymentWithFeesSupport()) {
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

        if (this.isTip()) {
            const usernameBuffer = new TextEncoder().encode(this.username);
            const maxLength = 15;
            const sanitizedUsername = usernameBuffer.slice(0, maxLength);
            data.set(sanitizedUsername, 5);

            const paddingRequired = maxLength - sanitizedUsername.length;
            let padding = "";
            if (paddingRequired > 0) {
                padding = ".";
            }

            if (paddingRequired > 1) {
                const hash = sha256(usernameBuffer);

                // Buffer is not available in browser environment
                // const encoded = Buffer.from(hash).toString('base64');
                const encoded = bytesToBase64(hash);

                padding = `${padding}${encoded.slice(0, paddingRequired - 1)}`;
            }

            if (padding.length > 0) {
                //console.log(padding, padding.length, paddingRequired)
                const paddingBuffer = new TextEncoder().encode(padding);
                data.set(paddingBuffer, 5 + sanitizedUsername.length);
            }

            return data;
        }

        // for Cash, Gift Card, Logins, and Payment Request
        if (this.nonce) {
            data.set(this.nonce, 9);
        }

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
        let nonce: Uint8Array;

        let amount: bigint | undefined;
        let currency: CurrencyCode | undefined;
        let username: string | undefined;

        if (kind === CodeKind.RequestPayment || kind === CodeKind.RequestPaymentWithFeesSupport) {
            // for Payment request
            const currencyIndex = data[1];
            currency = indexToCurrencyCode(currencyIndex);
            amount = data.slice(2, 9).reduce((acc, val, i) => acc + (BigInt(val) << BigInt(8 * i)), BigInt(0));
        } 
        
        if (kind === CodeKind.Cash || kind === CodeKind.GiftCard) {
            // for Cash and Gift Card
            amount = data.slice(1, 9).reduce((acc, val, i) => acc + (BigInt(val) << BigInt(8 * i)), BigInt(0));
        }

        if (kind === CodeKind.Tip) {
            // for Tip request
            username = new TextDecoder().decode(data.slice(5, 20)).split(".")[0];
            return new CodePayload({ kind, username, nonce: new Uint8Array(11) });
        }
        
        nonce = data.slice(9);

        return new CodePayload({ 
            kind, 
            nonce,
            amount,
            currency,
            username,
        });
    }
}

export {
    CodePayload,
    CodeKind,
};