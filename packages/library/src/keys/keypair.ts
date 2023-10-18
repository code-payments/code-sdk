import { ed25519 } from '@noble/curves/ed25519';
import { PublicKey } from "./publickey";

/**
 * Represents a cryptographic key pair containing a private and public key.
 */
class Keypair {
  privateKey: Uint8Array;
  publicKey: Uint8Array;

  /**
   * Constructs a new Keypair instance.
   * 
   * @param privateKey - Private key of the key pair.
   * @param publicKey - Public key of the key pair.
   */
  constructor(privateKey: Uint8Array, publicKey: Uint8Array) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
  }

  /**
   * Generates a new random Keypair.
   * 
   * @returns A new Keypair instance.
   */
  static generate(): Keypair {
    const privateKey = ed25519.utils.randomPrivateKey();
    const publicKey = ed25519.getPublicKey(privateKey);
    return new Keypair(privateKey, publicKey);
  }

  /**
   * Constructs a Keypair from a given secret key.
   * 
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(secretKey: Uint8Array): Keypair {
    const privateKey = secretKey.subarray(0, 32);
    const publicKey = ed25519.getPublicKey(privateKey);
    return new Keypair(privateKey, publicKey);
  }

  /**
   * Constructs a Keypair from a given seed.
   * 
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(seed: Uint8Array): Keypair {
    return Keypair.fromSecretKey(seed);
  }

  /**
   * Constructs a Keypair from a raw private key.
   * 
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(rawPrivateKey: Uint8Array): Keypair {
    const publicKey = ed25519.getPublicKey(rawPrivateKey);
    return new Keypair(rawPrivateKey, publicKey);
  }

  /**
   * Retrieves the public key as a PublicKey object.
   * 
   * @returns The public key.
   */
  getPublicKey(): PublicKey {
    return new PublicKey(this.publicKey);
  }

  /**
   * Retrieves the raw public key value.
   * 
   * @returns The public key as a Uint8Array.
   */
  getPublicValue(): Uint8Array {
    return this.publicKey;
  }

  /**
   * Retrieves the raw private key value.
   * 
   * @returns The private key as a Uint8Array.
   */
  getPrivateValue(): Uint8Array {
    return this.privateKey;
  }

  /**
   * Constructs the secret key from the private and public keys.
   * 
   * @returns The secret key as a Uint8Array.
   */
  getSecretKey(): Uint8Array {
    return Uint8Array.from([...this.privateKey, ...this.publicKey]);
  }

  /**
   * Signs a message using the private key.
   * 
   * @param message - The message to sign.
   * @returns The signature as a Uint8Array.
   */
  sign(message: ArrayBuffer | SharedArrayBuffer): Uint8Array {
    return ed25519.sign(new Uint8Array(message), this.privateKey);
  }

  /**
   * Verifies a message signature against the public key.
   * 
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(message: ArrayBuffer | SharedArrayBuffer, signature: Uint8Array): boolean {
    return ed25519.verify(signature, new Uint8Array(message), this.publicKey);
  }
}

export { Keypair };