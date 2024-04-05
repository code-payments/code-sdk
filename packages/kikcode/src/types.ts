import { CurrencyCode } from '@code-wallet/currency';

/*
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

    This field indicates the fiat amount, denominated in `Currency` above. The amount
    is an integer value calculated as follows: $5.00 x 100 = 500. The decimals are
    offset by multiplying by 100 and encoding the integer result. When decoding, the
    amount should be divided by 100 again to return the original value.

    Nonce (11 bytes)

    This field is an 11-byte randomly-generated nonce. It should be regenerated
    each time a new payment is initiated.

 Layout 5: Tip

    0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    | T |     Flags     |             username                  | ... remainder (0) |
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

    (T) Type (1 byte)

    The first byte of the data in all Code scan codes is reserved for the scan
    code type. This field indicates which type of scan code data is contained
    in the scan code.

    (F) Flags (4 bytes)

    Optional flags may provide additional context on the type of username embedded in
    the scan code.
    
    Username (15 bytes)

    The username that uniquely represents a user's tip code. Cannot be longer than 15
    bytes. Any additional space is represented by an empty string in (remainder).
*/

/**
 * Enum representing types of code kinds.
 */
export enum CodeKind {
    Cash = 0,
    GiftCard = 1,
    RequestPayment = 2,
    RequestLogin = 3,
    RequestPaymentWithFeesSupport = 4,
    Tip = 5,
}

export interface CodePayloadOptions {
    kind: CodeKind;
    nonce?: Uint8Array;
    amount?: bigint;
    currency?: CurrencyCode;
    username?: string;
}