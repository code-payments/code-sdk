import bs58 from "bs58";
import { Buffer } from "buffer";

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
        this.publicKey = publicKey;
    }

    /**
     * Constructs a PublicKey instance from its Base58 representation.
     * 
     * @param base58 - The Base58 encoded public key string.
     * @returns A new PublicKey instance.
     */
    static fromBase58(base58: string) {
        return new PublicKey(bs58.decode(base58));
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
}

export {
    PublicKey,
}