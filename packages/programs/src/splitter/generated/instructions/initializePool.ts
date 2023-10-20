/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category InitializePool
 * @category generated
 */
export type InitializePoolInstructionArgs = {
  name: string
  levels: number
}
/**
 * @category Instructions
 * @category InitializePool
 * @category generated
 */
const initializePoolStruct = new beet.FixableBeetArgsStruct<
  InitializePoolInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['name', beet.utf8String],
    ['levels', beet.u8],
  ],
  'InitializePoolInstructionArgs'
)
/**
 * Accounts required by the _initializePool_ instruction
 * @category Instructions
 * @category InitializePool
 * @category generated
 */
export type InitializePoolInstructionAccounts = {
  pool: web3.PublicKey
  vault: web3.PublicKey
  mint: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
}

const initializePoolInstructionDiscriminator = [
  95, 180, 10, 172, 84, 174, 232, 40,
]

/**
 * Creates a _InitializePool_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializePool
 * @category generated
 */
export function createInitializePoolInstruction(
  accounts: InitializePoolInstructionAccounts,
  args: InitializePoolInstructionArgs
) {
  const { pool, vault, mint, authority, payer } = accounts

  const [data] = initializePoolStruct.serialize({
    instructionDiscriminator: initializePoolInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: pool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'spLit2eb13Tz93if6aJM136nUWki5PVUsoEjcUjwpwW'
    ),
    keys,
    data,
  })
  return ix
}