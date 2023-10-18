import { randomBytes } from '@noble/hashes/utils';
import { Keypair } from '@code-wallet/library';
import { Path } from "./path";
import { Derive } from "./derive";
import { Mnemonic, MnemonicType } from "./mnemonic";
import { getEnglishWords } from './wordlists';

const defaultPath     = new Path("m/44'/501'/0'/0'"); // Standard Solana path
const defaultWordList = getEnglishWords();

/**
 * Represents a mnemonic phrase for wallet seed generation.
 */
export class MnemonicPhrase {
    /** The mnemonic phrase string. */
    phrase: string;

    /** The individual words from the mnemonic phrase. */
    words: string[];

    /** The type of mnemonic (either Short or Long). */
    kind: MnemonicType;

    /**
     * Creates an instance of MnemonicPhrase.
     *
     * @param {string} phrase - The mnemonic phrase string.
     */
    constructor(phrase: string) {
        this.phrase = phrase;
        this.words = phrase.split(' ');

        const numWords = this.words.length;
        if (numWords == 12) {
            this.kind = MnemonicType.Short;
        } else if (numWords == 24) {
            this.kind = MnemonicType.Long;
        } else {
            throw new Error(`Invalid number of words: ${numWords}`);
        }
    }

    /**
     * Gets the mnemonic phrase.
     *
     * @returns {string} The mnemonic phrase string.
     */
    public getPhrase(): string {
        return this.phrase;
    }

    /**
     * Gets the individual words from the mnemonic phrase.
     *
     * @returns {string[]} An array of words.
     */
    public getWords(): string[] {
        return this.words;
    }

    /**
     * Converts the mnemonic phrase to a Keypair.
     *
     * @param {Path} path - The derivation path (default to Solana's path).
     * @returns {Keypair} The resulting Keypair.
     */
    toKeypair(path: Path = defaultPath): Keypair {
        return Derive.descriptorFromMnemonic(path, this.phrase).toKeypair();
    }

    /**
     * Generates a new MnemonicPhrase.
     *
     * @param {MnemonicType} kind - The type of mnemonic (default is Short).
     * @param {string[]} wordList - The word list to be used (default is English).
     * @returns {MnemonicPhrase} A new MnemonicPhrase instance.
     */
    static generate(kind: MnemonicType = MnemonicType.Short, wordList: string[] = defaultWordList): MnemonicPhrase {
        const strength = kind == MnemonicType.Short ? 128 : 256;
        const length = strength / 8;
        const entropy = randomBytes(length);
        const phrase = Mnemonic.toMnemonic(entropy, wordList);
        return new MnemonicPhrase(phrase);
    }
}