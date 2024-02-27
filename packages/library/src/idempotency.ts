import bs58 from 'bs58';
import { sha256 } from '@noble/hashes/sha256';
import { Keypair } from '@code-wallet/keys';
import { ErrInvalidSize } from './errors';

/**
 * A class to represent an idempotency key.
 */
class IdempotencyKey {
    /**
     * The value of the idempotency key.
     */
    value: Uint8Array;

    static readonly MAX_LENGTH: number = 11;

    /**
     * Constructor for an idempotency key.
     * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
     */
    constructor(data: Uint8Array = new Uint8Array(IdempotencyKey.MAX_LENGTH)) {
        if (data.length != IdempotencyKey.MAX_LENGTH) {
            throw ErrInvalidSize();
        }

        this.value = data;
    }

    /**
     * Creates a new idempotency key from a client secret string.
     * @param {string} data The client secret to parse into an idempotency key.
     * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
     */
    static fromClientSecret(data: string) : IdempotencyKey {
        return new IdempotencyKey(bs58.decode(data));
    }

    /**
     * Creates a new idempotency key from a seed string.
     * @param {string} seed The seed to create the idempotency key with.
     * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
     */
    static fromSeed(seed: string) : IdempotencyKey {
        // Not ideal, a 11 byte hashing function is needed and no such function exists
        return new IdempotencyKey(sha256(seed).subarray(0, IdempotencyKey.MAX_LENGTH));
    }

    /**
     * Generates a random idempotency key.
     * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
     */
    static generate() : IdempotencyKey {
        const seed = Keypair.generate().getPrivateValue().subarray(0, IdempotencyKey.MAX_LENGTH);
        return new IdempotencyKey(seed);
    }

    /**
     * Converts the idempotency key to a base58 string.
     * @returns {string} A base58 encoded string representing the idempotency key.
     */
    toString() : string {
        return bs58.encode(this.value);
    }
}

export {
    IdempotencyKey,
};