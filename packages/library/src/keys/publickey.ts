import bs58 from "bs58";
import { Buffer } from "buffer";
import { ed25519 } from '@noble/curves/ed25519';
import { ErrInvalidAddress } from "../errors";

const ED25519_PUBLIC_KEY_LENGTH = 32; // Length of ED25519 public key in bytes
const BASE_58_ALPHABET = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;

/**
 * Represents a public key and provides utility methods for its manipulation and conversion.
 */
class PublicKey {
    publicKey: Uint8Array;

    /**
     * Constructs a new PublicKey instance.
     * 
     * @param publicKey - The raw public key as a Uint8Array.
     */
    constructor(publicKey: Uint8Array) {
        if (publicKey.length !== ED25519_PUBLIC_KEY_LENGTH) {
            throw ErrInvalidAddress();
        }
        this.publicKey = publicKey;
    }

    /**
     * Constructs a PublicKey instance from its Base58 representation.
     * 
     * @param base58 - The Base58 encoded public key string.
     * @returns A new PublicKey instance.
     */
    static fromBase58(base58: string) {
        if (!base58.match(BASE_58_ALPHABET)) {
            throw ErrInvalidAddress();
        }

        const decodedBuffer = bs58.decode(base58);

        if (decodedBuffer.length !== ED25519_PUBLIC_KEY_LENGTH) {
            throw ErrInvalidAddress();
        }

        return new PublicKey(decodedBuffer);
    }

    /**
     * Converts the public key to a Buffer.
     * 
     * @returns The public key as a Buffer.
     */
    toBuffer() {
        return Buffer.from([...this.publicKey]);
    }

    /**
     * Encodes the public key into its Base58 representation.
     * 
     * @returns The Base58 encoded public key string.
     */
    toBase58() {
        return bs58.encode(this.publicKey);
    }

    /**
     * Returns the Base58 encoded string representation of the public key.
     * 
     * @returns The Base58 encoded public key string.
     */
    toString() {
        return this.toBase58();
    }

    /**
     * Verifies a signature against the public key.
     * 
     * @param message - The message to verify.
     * @param signature - The signature to verify.
     * @returns `true` if the signature is valid, otherwise `false`.
     */
    verify(message: ArrayBuffer | SharedArrayBuffer, signature: Uint8Array) {
        return ed25519.verify(signature, new Uint8Array(message), this.publicKey);
    }
}

export {
    PublicKey,
}