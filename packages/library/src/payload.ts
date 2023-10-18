import { CurrencyCode, currencyCodeToIndex, indexToCurrencyCode, isValidCurrency } from "./currency";
import { ErrInvalidCurrency, ErrInvalidSize } from "./errors";

/*
Scan Code Payload Format

The payload is a 20-byte binary blob that contains the data for the scan code
before it is encoded.
 
Layout 0: Cash

    0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    | T |            Amount             |                   Nonce                   |
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

    (T) Type (1 byte)

    The first byte of the data in all Code scan codes is reserved for the scan
    code type. This field indicates which type of scan code data is contained
    in the scan code. The expected format for each type is outlined below.

    Kin Amount in Quarks (8 bytes)

    This field indicates the number of quarks the payment is for. It should be
    represented as a 64-bit unsigned integer.

    Nonce (11 bytes)

    This field is an 11-byte randomly-generated nonce. It should be regenerated
    each time a new payment is initiated.


Layout 1: Gift Card

    Same as layout 0.


Layout 2: Payment Request

    0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    | T | C |        Fiat               |                   Nonce                   |
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

    (T) Type (1 byte)

    The first byte of the data in all Code scan codes is reserved for the scan
    code type. This field indicates which type of scan code data is contained
    in the scan code. The expected format for each type is outlined below.

    (C) Currency Code (1 bytes)

    This field indicates the currency code for the fiat amount. The value is an
    encoded index less than 255 that maps to a currency code in CurrencyCode.swift

    Fiat Amount (7 bytes)

    This field indicates the number of quarks the payment is for. It should be
    represented as a 64-bit unsigned integer.

    Nonce (11 bytes)

    This field is an 11-byte randomly-generated nonce. It should be regenerated
    each time a new payment is initiated.
*/

/**
 * Enum representing types of code kinds.
 */
enum CodeKind {
    Cash = 0,
    GiftCard = 1,
    RequestPayment = 2,
}

/**
 * CodePayload class represents the payload format for scan codes.
 * It handles conversion to and from binary format and validation.
 */
class CodePayload {
    kind: CodeKind;
    amount: bigint;
    nonce: Uint8Array;
    currency?: CurrencyCode;

    static readonly MAX_LENGTH: number = 20;

    /**
     * Construct a new CodePayload.
     * 
     * @param kind - The type of the code.
     * @param amount - The amount associated with the code.
     * @param nonce - A randomly-generated nonce.
     * @param currency - (Optional) Currency associated with the RequestPayment type.
     */
    constructor(kind: CodeKind, amount: bigint, nonce: Uint8Array, currency?: CurrencyCode) {
        this.kind = kind;
        this.amount = amount;
        this.nonce = nonce;
        
        // Validation for currency code
        if (currency && !isValidCurrency(currency)) {
            throw ErrInvalidCurrency();
        }
        this.currency = currency as CurrencyCode | undefined;
    }

    /**
     * Convert the payload to its binary representation.
     * 
     * @returns A Uint8Array containing the binary representation of the payload.
     */
    toBinary(): Uint8Array {
        const data = new Uint8Array(20);
        data[0] = this.kind;

        if (this.kind === CodeKind.RequestPayment) {
            // for Payment Request
            if (!this.currency) {
                throw ErrInvalidCurrency();
            }
            
            const currencyIndex = currencyCodeToIndex(this.currency);
            data[1] = currencyIndex;
            for (let i = 0; i < 7; i++) {
                data[i + 2] = Number(this.amount >> BigInt(8 * i) & BigInt(0xFF));
            }
        } else {
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

        const type = data[0] as CodeKind;
        let amount: bigint;
        let nonce: Uint8Array;
        let currency: CurrencyCode | undefined;

        if (type === CodeKind.RequestPayment) {
            // for Payment Request
            const currencyIndex = data[1];
            currency = indexToCurrencyCode(currencyIndex);
            amount = data.slice(2, 9).reduce((acc, val, i) => acc + (BigInt(val) << BigInt(8 * i)), BigInt(0));
        } else {
            // for Cash and Gift Card
            amount = data.slice(1, 9).reduce((acc, val, i) => acc + (BigInt(val) << BigInt(8 * i)), BigInt(0));
        }
        
        nonce = data.slice(9);

        return new CodePayload(type, amount, nonce, currency);
    }
}

export {
    CodePayload,
    CodeKind,
};