import { Buffer } from 'buffer';
import { sha256 } from '@noble/hashes/sha256';
import { ed25519 } from '@noble/curves/ed25519';
import { PublicKey } from "./publickey";
import { ErrInvalidLength, ErrInvalidSeeds } from './errors';

export const MAX_SEED_LENGTH = 32;
export const PDA_MARKER_BYTES = [
  80, 114, 111, 103, 114, 97, 109, 68, 
  101, 114, 105, 118, 101, 100, 65, 100, 
  100, 114, 101, 115, 115,
] as const; // The string 'ProgramDerivedAddress'

/**
 * Derives a program address from seeds and a program ID by finding a bump
 * number that creates a valid program address off of the ed25519 curve.
 * 
 * @param seeds - An array of Buffer or Uint8Array seeds.
 * @param programAddress - The program ID to derive the address from.
 * 
 * @returns The derived program address and the bump seed.
 */
function findProgramAddress(opt: {
  seeds: Array<Buffer | Uint8Array | string>,
  programAddress: PublicKey,
}): [PublicKey, number] {
  let nonce = 255;
  let address;
  while (nonce != 0) {
    try {
      const seedsWithNonce = opt.seeds.concat(Buffer.from([nonce]));
      address = createProgramAddress({
        seeds: seedsWithNonce,
        programAddress: opt.programAddress
      });
    } catch (err) {
      if (err instanceof TypeError) {
        throw err;
      }
      nonce--;
      continue;
    }
    return [address, nonce];
  }
  throw new Error(`Unable to find a viable program address nonce`);
}

/**
 * Attempts to create a program address from seeds and a program ID, without
 * recursion to find a valid address.
 * 
 * @param seeds - An array of Buffer or Uint8Array seeds.
 * @param programAddress - The program ID to derive the address from.
 * 
 * @throws If the seeds are too long or the derived address is on the ed25519
 * curve. Program addresses must be off the curve.
 * 
 * @returns The derived program address.
 */
function createProgramAddress(opt: {
  seeds: Array<Buffer | Uint8Array | string>,
  programAddress: PublicKey,
}): PublicKey {
  let buffer = Buffer.alloc(0);

  opt.seeds.forEach(function (seed) {
    if (seed.length > MAX_SEED_LENGTH) {
      throw ErrInvalidLength();
    }
    buffer = Buffer.concat([buffer, Buffer.from(seed)]);
  });

  buffer = Buffer.concat([
    buffer,
    opt.programAddress.toBuffer(),
    Buffer.from(PDA_MARKER_BYTES),
  ]);

  const publicKeyBytes = sha256(buffer);
  if (isOnCurve(publicKeyBytes)) {
    throw ErrInvalidSeeds();
  }

  return new PublicKey(publicKeyBytes);
}

/**
 * Checks if a public key is on the ed25519 curve.
 * 
 * @param publicKey - The public key to check.
 * @returns True if the public key is on the curve, false otherwise.
 */
function isOnCurve(publicKey: Uint8Array): boolean {
  try {
    ed25519.ExtendedPoint.fromHex(publicKey);
  } catch {
    return false;
  }

  return true;
}

export {
  findProgramAddress,
  createProgramAddress,
  isOnCurve,
};