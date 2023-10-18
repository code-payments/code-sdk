import { pbkdf2  } from '@noble/hashes/pbkdf2';
import { sha512 } from '@noble/hashes/sha512';
import { hmac } from '@noble/hashes/hmac';
import { Keypair } from '@code-wallet/library';
import { Path } from './path';
import { Offset } from './offset';

// Deterministic wallet generation for ED25519 curve using SLIP-0010 spec
// Reference: https://github.com/satoshilabs/slips/blob/master/slip-0010.md

/**
 * Key Descriptor for the deterministic wallet.
 * Contains both a key and its associated chain code.
 */
export class KeyDescriptor {
    key: Uint8Array;
    chain: Uint8Array;

    /**
     * Constructs a KeyDescriptor with the provided key and chain code.
     * 
     * @param {Uint8Array} key - The key for the descriptor.
     * @param {Uint8Array} chain - The associated chain code for the key.
     */
    constructor(key: Uint8Array, chain: Uint8Array) {
        this.key = key;
        this.chain = chain;
    }

    /**
     * Converts the descriptor's key to a Keypair.
     * 
     * @returns {Keypair} The keypair derived from the key descriptor.
     */
    toKeypair(): Keypair {
        return Keypair.fromSeed(this.key);
    }
}

/**
 * Contains methods for deriving key descriptors.
 */
export class Derive {
    static readonly curve = Buffer.from("ed25519 seed")

    /**
     * Derive a master key descriptor from the given seed.
     * 
     * @param {Buffer} seed - The seed buffer.
     * @returns {KeyDescriptor} The derived master key descriptor.
     */
    static masterKey(seed: Buffer): KeyDescriptor {
        const I = hmac(sha512, Derive.curve, seed);
        return new KeyDescriptor(
            I.slice(0, 32),
            I.slice(32),
        );
    }

    /**
     * Derive a key descriptor following a path from the seed.
     * 
     * @param {Buffer} seed - The seed buffer.
     * @param {Path} path - The path to follow for deriving the key.
     * @returns {KeyDescriptor} The derived key descriptor.
     */
    static path(seed: Buffer, path: Path): KeyDescriptor {
        let descriptor = Derive.masterKey(seed);
        for (const index of path.indexes) {
            descriptor = Derive.childKey(descriptor, index);
        }
        return descriptor;
    }

    /**
     * Derive a child key descriptor.
     * 
     * @param {KeyDescriptor} descriptor - The parent key descriptor.
     * @param {Offset} index - The index (or offset) for the child key.
     * @returns {KeyDescriptor} The derived child key descriptor.
     */
    static childKey(descriptor: KeyDescriptor, index: Offset): KeyDescriptor {
        const data = Buffer.from([
            0x00,
            ...descriptor.key,
            ...index.toBuffer(),
        ]);
        const I = hmac(sha512, descriptor.chain, data);
        return new KeyDescriptor(
            I.slice(0, 32),
            I.slice(32),
        );
    }

    /**
     * Derive a key descriptor from a mnemonic phrase and path.
     * 
     * @param {Path} path - The path to follow for deriving the key.
     * @param {string} phrase - The mnemonic phrase.
     * @param {string} [password=""] - The password for the mnemonic (optional).
     * @returns {KeyDescriptor} The derived key descriptor.
     */
    static descriptorFromMnemonic(path: Path, phrase: string, password: string = ""): KeyDescriptor {
        const seed = Derive.seedFromMnemonic(phrase, password);
        return Derive.path(seed, path);
    }

    /**
     * Generate a seed from a mnemonic phrase and password.
     * 
     * @param {string} phrase - The mnemonic phrase.
     * @param {string} password - The password for the mnemonic.
     * @returns {Buffer} The generated seed.
     */
    static seedFromMnemonic(phrase: string, password: string) : Buffer {
        const salt = "mnemonic" + password;
        return Buffer.from(pbkdf2(sha512, phrase, salt, { c:2048, dkLen: 64 }));
    }
}