[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]

[npm-downloads-image]: https://img.shields.io/npm/dt/@code-wallet/keys?style=flat
[npm-image]: https://img.shields.io/npm/v/@code-wallet/keys?style=flat
[npm-url]: https://www.npmjs.com/package/@code-wallet/keys

# @code-wallet/keys
Manage ED25519 cryptographic keys, including public keys and key pairs, crucial
for the security and verification mechanisms of the platform. This package is
part of the Code SDK, a collection of packages that provide a comprehensive set
of tools for developers to integrate Code into their websites and applications. 

If you're looking for key phrases, check out the `@code-wallet/mnemonic` package.

Learn more about Code at https://getcode.com. See the [docs](https://code-wallet.github.io/code-sdk/docs) for more information.

## Quick Start

```bash
npm install @code-wallet/keys
``` 

## Examples
Generating a Keypair

```typescript
import { Keypair } from '@code-wallet/keys';

const keypair = Keypair.generate();
console.log("Public value:", keypair.getPublicValue());
console.log("Private value:", keypair.getPrivateValue());
// console.log("Signature:", keypair.sign(...));

const pubkey = keypair.getPublicKey();
console.log("Public key:", pubkey.toBase58());

const address = PublicKey.fromBase58("kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6");
// console.log("Address:", address.verify(...));
```

## Getting Started
As an internal package, `@code-wallet/keys` is tailored for developers within
the Code team. For detailed information on each module and its functionalities,
please refer to the [documentation](https://code-wallet.github.io/code-sdk).

## Need Help?
If you have any questions or need help integrating Code into your website or
application, please reach out to us on [Discord](https://discord.gg/T8Tpj8DBFp) or
[Twitter](https://twitter.com/getcode).
