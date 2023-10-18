import { getEnglishWords } from "./wordlists";
import { bytesToBinary, deriveChecksumBits, binaryToByte, lpad } from "./utils";
import {
    ErrInvalidEntropyError,
    ErrInvalidMnemonicError,
} from "./errors";

const defaultWordlist = getEnglishWords();

/**
 * Enum representing types of mnemonics.
 */
enum MnemonicType {
    Short = 12,
    Long = 24,
}

/**
 * The Mnemonic class provides methods for converting between mnemonics
 * and their associated entropy values.
 */
class Mnemonic {

    /**
     * Converts entropy to its mnemonic representation.
     *
     * @param {Uint8Array} entropy - The entropy value.
     * @param {string[]} [wordList=defaultWordlist] - The word list to use for conversion.
     * @returns {string} The mnemonic string.
     * @throws {ErrInvalidEntropyError} If the provided entropy is invalid.
     */
    static toMnemonic(entropy: Uint8Array, wordList: string[] = defaultWordlist): string {
        if (entropy.length < 16 || entropy.length > 32 || entropy.length % 4 !== 0) {
            throw ErrInvalidEntropyError();
        }

        const entropyBits = bytesToBinary(Array.from(entropy));
        const checksumBits = deriveChecksumBits(entropy);
        const bits = entropyBits + checksumBits;
        const chunks = bits.match(/(.{1,11})/g);
        const phrase = chunks!.map((binary) => {
            const index = binaryToByte(binary);
            return wordList[index];
        });

        return phrase.join(" ");
    }

    /**
     * Converts a mnemonic back to its entropy representation.
     *
     * @param {string} mnemonic - The mnemonic string.
     * @param {string[]} [wordList=defaultWordlist] - The word list to use for conversion.
     * @returns {Buffer} The entropy buffer.
     * @throws {ErrInvalidMnemonicError} If the provided mnemonic is invalid.
     * @throws {ErrInvalidEntropyError} If the derived entropy is invalid.
     */
    static toEntropy(mnemonic: string, wordList: string[] = defaultWordlist): Buffer {
        const phrase = mnemonic.split(/\s+/g);

        if (phrase.length < 12 || phrase.length > 24 || phrase.length % 3 !== 0) {
            throw ErrInvalidMnemonicError();
        }

        // convert word indices to 11 bit binary strings
        const bits = phrase.map((word) => {
            const index = wordList.indexOf(word);
            if (index === -1) {
                throw ErrInvalidMnemonicError();
            }
            return lpad(index.toString(2), '0', 11);
        }).join('');

        // split the binary string into ENT/CS
        const dividerIndex = Math.floor(bits.length / 33) * 32;
        const entropyBits = bits.slice(0, dividerIndex);
        const checksumBits = bits.slice(dividerIndex);

        // calculate the checksum and compare
        const entropyBytes = entropyBits!.match(/(.{1,8})/g)!.map(binaryToByte);
        const entropy = Buffer.from(entropyBytes);

        if (entropy.length < 16 || entropy.length > 32 || entropy.length % 4 !== 0) {
            throw ErrInvalidEntropyError();
        }

        const newChecksum = deriveChecksumBits(entropy);
        if (newChecksum !== checksumBits) {
            throw ErrInvalidMnemonicError();
        }

        return entropy;
    }
}

export {
    Mnemonic,
    MnemonicType,
}