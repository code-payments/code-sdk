import { sha256 } from '@noble/hashes/sha256';

/**
 * Left pads a string with another string (multiple times, if needed) until the resulting string reaches the given length.
 *
 * @param {string} str - The original string to pad.
 * @param {string} padString - The string to pad the original with.
 * @param {number} length - The target length of the resulting padded string.
 * @returns {string} The padded string.
 */
function lpad(str: string, padString: string, length: number): string {
    while (str.length < length) {
        str = padString + str;
    }
    return str;
}

/**
 * Converts a binary string to its byte representation.
 *
 * @param {string} bin - The binary string.
 * @returns {number} The byte representation of the binary string.
 */
function binaryToByte(bin: string) {
    return parseInt(bin, 2);
}

/**
 * Converts an array of bytes to a binary string.
 *
 * @param {number[]} bytes - The array of bytes.
 * @returns {string} The binary representation of the bytes.
 */
function bytesToBinary(bytes: number[]): string {
    return bytes.map((x) => lpad(x.toString(2), '0', 8)).join('');
}

/**
 * Derives checksum bits for the given data using SHA-256.
 *
 * @param {Uint8Array} data - The data from which to derive the checksum.
 * @returns {string} The derived checksum bits.
 */
function deriveChecksumBits(data: Uint8Array): string {
    const ENT = data.length * 8;
    const CS = ENT / 32;
    const hash = sha256(data);
    return bytesToBinary(Array.from(hash)).slice(0, CS);
}

export {
    lpad,
    binaryToByte,
    bytesToBinary,
    deriveChecksumBits,
}