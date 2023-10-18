/**
 * Offset class to manage hardened and non-hardened values.
 */
class Offset {
    /** Hardening offset as per HD wallet standards. */
    static readonly hardenOffset = 0x80000000;

    /** Maximum possible index for derivation. */
    static readonly maxIndex = 0x7fffffff;

    /** The value of the offset. */
    value: number;

    /** Flag to indicate if the offset is hardened. */
    hardened: boolean;

    /**
     * Creates an instance of Offset.
     *
     * @param {number} value - The offset value.
     * @param {boolean} hardened - Indicates if the offset is hardened.
     */
    constructor(value: number, hardened: boolean) {
        this.value = value;
        this.hardened = hardened;
    }

    /**
     * Creates an Offset instance from a given number with `hardened` set to `false`.
     *
     * @param {number} value - The offset value.
     * @returns {Offset} An instance of Offset.
     */
    static fromNumber(value: number) : Offset {
        return new Offset(value, false);
    }

    /**
     * Creates an Offset instance from a given number with `hardened` set to `true`.
     *
     * @param {number} value - The offset value.
     * @returns {Offset} An instance of Offset.
     */
    static fromHardenedNumber(value: number) : Offset {
        return new Offset(value, true);
    }

    /**
     * Checks if the offset value is within the valid range.
     *
     * @returns {boolean} `true` if the offset is valid, otherwise `false`.
     */
    isValid() : boolean {
        return this.value >= 0 && this.value <= Offset.maxIndex;
    }

    /**
     * Converts the offset value to a Buffer representation.
     *
     * @returns {Buffer} A buffer containing the offset value.
     */
    toBuffer() : Buffer {
        let value = this.value;
        if (this.hardened) {
            value += Offset.hardenOffset;
        }

        return Buffer.from([
            (value >> 24) & 0xff,
            (value >> 16) & 0xff,
            (value >> 8) & 0xff,
            (value) & 0xff,
        ]);
    }
}

export {
    Offset,
}