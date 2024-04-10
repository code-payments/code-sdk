import { PublicKey, findProgramAddress } from '@code-wallet/keys';
import { PROGRAM_ID as timelockProgramId, DataVersion } from './timelock';
import { PROGRAM_ID as splitterProgramId } from './splitter';

// This value may be different outside the Code Wallet ecosystem
export const DEFAULT_UNLOCK_DURATION = 21; // days (chosen to give enough time for bug fixes)

// Expected PDA prefixes
export const TIMELOCK_PREFIX = 'timelock_state';
export const TIMELOCK_VAUTLT_PREFIX = 'timelock_vault';
export const SPLITTER_PREFIX = 'pool_state';
export const SPLITTER_VAULT_PREFIX = 'pool_vault';
export const COMMITMENT_PREFIX = 'commitment_state';
export const COMMITMENT_VAULT_PREFIX = 'commitment_vault';
export const PROOF_PREFIX = 'proof';

export function getTimelockAddress(opt: {
    mint: PublicKey,
    timeAuthority: PublicKey,
    owner: PublicKey
}): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(TIMELOCK_PREFIX),
            opt.mint.toBuffer(),
            opt.timeAuthority.toBuffer(),
            opt.owner.toBuffer(),
            numberToBuffer(DEFAULT_UNLOCK_DURATION)
        ],

        programAddress: PublicKey.from(timelockProgramId)
    })
}

export function getTimelockTokenAddress(opt: { timelock: PublicKey }): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(TIMELOCK_VAUTLT_PREFIX),
            opt.timelock.toBuffer(),
            numberToBuffer(DataVersion.Version1)
        ],
        programAddress: PublicKey.from(timelockProgramId)
    })
}

export function getSplitterPoolAddress(opt: {
    mint: PublicKey,
    poolAuthority: PublicKey,
    poolName: string
}): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(SPLITTER_PREFIX),
            opt.mint.toBuffer(),
            opt.poolAuthority.toBuffer(),
            Buffer.from(opt.poolName),
        ],
        programAddress: PublicKey.from(splitterProgramId),
    })
}

export function getSplitterPoolTokenAddress(opt: {
    pool: PublicKey,
}): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(SPLITTER_VAULT_PREFIX),
            opt.pool.toBuffer(),
        ],
        programAddress: PublicKey.from(splitterProgramId),
    })
}

export function getCommitmentAddress(opt: {
    pool: PublicKey,
    recentRoot: Buffer,
    transcript: Buffer,
    destination: PublicKey,
    amount: number
}): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(COMMITMENT_PREFIX),
            opt.pool.toBuffer(),
            opt.recentRoot,
            opt.transcript,
            opt.destination.toBuffer(),
            amountToBuffer(opt.amount),
        ],
        programAddress: PublicKey.from(splitterProgramId),
    })
}

export function getCommitmentTokenAddress(opt: {
    pool: PublicKey,
    commitment: PublicKey
}): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(COMMITMENT_VAULT_PREFIX),
            opt.pool.toBuffer(),
            opt.commitment.toBuffer(),
        ],
        programAddress: PublicKey.from(splitterProgramId),
    })
}

export function getProofAddress(opt: {
    pool: PublicKey,
    merkleRoot: Buffer,
    commitment: PublicKey
}): [PublicKey, number] {
    return findProgramAddress({
        seeds: [
            Buffer.from(PROOF_PREFIX),
            opt.pool.toBuffer(),
            opt.merkleRoot,
            opt.commitment.toBuffer(),
        ],
        programAddress: PublicKey.from(splitterProgramId),
    })
}


function amountToBuffer(num: number): Buffer {
    const bigIntNum = BigInt(num);
    const buffer = Buffer.alloc(8);
    buffer.writeBigInt64LE(bigIntNum);
    return buffer;
}

function numberToBuffer(num: number): Buffer {
    const buffer = Buffer.alloc(1);
    buffer.writeInt8(num);
    return buffer;
}