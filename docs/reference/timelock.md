# Timelock Program 

The Timelock program enables simple state-channel mechanics on Solana, as described in detail by [Vitalik](https://vitalik.ca/general/2021/01/05/rollup.html) and [Jeff Coleman](https://www.jeffcoleman.ca/state-channels/). It's specifically designed to be used with the [Code App](https://www.getcode.com/download). 

When combined with durable nonces, the Timelock program provides non-custodial guarantees of funds availability. This feature has practical uses in various areas, including applications that require instant off chain transactions.

### How it works

We've created the Timelock program to enable instant and reliable transfers on Solana. It's specifically designed to be used with the Code app. However, it has practical uses in various areas beyond ours, including applications that require instant off chain transactions. 

Features of the Timelock program include:

* **Fund Locking**: This is a testament to a user's readiness to transact. By locking their funds, they vouch for their availability and commitment.
* **State Transition**: This pertains to the changing status of locked funds. A joint signature, from both the user and the Code Sequencer, is mandated.
* **User-Initiated Unlocks**: Users maintain control over their funds, with the capability to kick-start the unlocking process on their terms.
* **Fallback Mechanisms**: As a safeguard, if users face issues with the Code Sequencer, they have a built-in 21-day waiting period after which they can access their funds.

Developers that want to learn more can visit the [GitHub repository](https://github.com/code-payments/code-program-library/tree/main/timelock) for the Timelock program.

<img src="https://github.com/code-payments/code-program-library/blob/main/timelock/docs/timelock-token.png?raw=true" />

## On-chain Program

The Timelock program is deployed to Solana mainnet-beta at the following address:

[time2Z2SCnn3qYg3ULKVtdkh8YmZ5jFdKicnA1W2YnJ](https://explorer.solana.com/address/time2Z2SCnn3qYg3ULKVtdkh8YmZ5jFdKicnA1W2YnJ)

The source code is available on [GitHub](https://github.com/code-payments/code-program-library/tree/main/timelock). 

## Account Derivation

Each Code user has a primary account, which is derived from a BIP-32 mnemonic. The Timelock program uses this account to create multiple associated Timelock accounts for the user. 

The Timelock account is derived from the primary account using the following [derivation paths](https://github.com/code-payments/timelock-explorer/blob/77a01f685dbaa4f77c2c1ec1e59b4ce568c8a388/src/types/explorer/CodeWallet.ts#L107C1-L129C2).


```js
/**
 * Code Wallet derivation strategy to generate a derivation path
 * for a given account type, index, and offset.
 * 
 * @param accountType The account type
 * @param index The index
 * @param offset The offset
 * @returns 
 */
export function getDerivationPath(accountType: TrayAccountType, index: number, offset: number = 0) : Path {
    switch (accountType) {
        case TrayAccountType.Primary:
            return CodeDefaultPath;
        case TrayAccountType.Bucket:
            return new Path(`m/44'/501'/0'/0'/${index}'/${offset}'`);
        case TrayAccountType.Incoming:
            return new Path(`m/44'/501'/0'/0'/${index}'/2'`);
        case TrayAccountType.Outgoing:
            return new Path(`m/44'/501'/0'/0'/${index}'/3'`);
        default:
            throw new Error(`Unknown account type: ${accountType}`);
    }
}
```

If you'd like to derive your own Timelock accounts, you can use the [mnemonic package](https://www.npmjs.com/package/@code-wallet/mnemonic) to do so. However, that is out of the scope of this documentation.

## Security Concerns

The on-chain programs are open-source and audited. However, if you find something that would improve the efficacy of the program we welcome and encourage patches but ask that you submit any security concerns privately by using this [Report a Vulnerability](https://github.com/code-payments/code-program-library/security/advisories/new) link.

::: warning Disclosures
Please do not disclose security concerns publicly, or through email or twitter, until they have been addressed by the Code team.
:::
