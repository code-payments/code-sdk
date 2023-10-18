import { sha256 } from '@noble/hashes/sha256';
import { Keypair } from './keys';
import { CodePayload } from './payload';

/**
 * Generates a Rendezvous Keypair based on the provided CodePayload.
 *
 * Rendezvous Key:
 * The Rendezvous Key is an integral component of the Code App and Code
 * Sequencer. It allows two parties to establish a direct communication channel
 * without having to know each other's identity beforehand. By scanning a code,
 * they can instantly 'rendezvous' and initiate an interaction. When users scan
 * an Intent via the Code app, the underlying details are hashed into this key.
 * All future messages and events regarding the intent are then signed using the
 * rendezvous key. While the Code Sequencer can route messages based on this, it
 * cannot alter them due to the key's private nature, ensuring message
 * integrity.
 *
 * How it Works:
 * Upon scanning an Intent via the Code app, be it a payment request or an
 * incoming fund receipt, details of the intent are encoded into a QR-like code.
 * This code's value undergoes a SHA-256 hashing process, generating a
 * 'rendezvous' key. This key, specifically its public part, is crucial for the
 * Code Sequencer to route messages between the interacting parties. Crucially,
 * the sequencer only has access to this public portion, ensuring it can route
 * but not alter messages, as it lacks the private key necessary for signing.
 *
 * Note:
 * Without the rendezvous key, the Code Sequencer could alter details about the
 * submitted intents. The rendezvous key ensures that the sequencer can only
 * route messages, not alter them.
 * 
 * @param {CodePayload} payload - The payload from which the rendezvous key is derived.
 * @returns {Keypair} The rendezvous keypair based on the hashed payload.
 */
function generateRendezvousKeypair(payload: CodePayload): Keypair {
    return Keypair.fromSeed(sha256(payload.toBinary()));
}

export {
    generateRendezvousKeypair,
}