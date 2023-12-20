[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]

[npm-downloads-image]: https://img.shields.io/npm/dt/@code-wallet/mnemonic.svg?style=flat
[npm-image]: https://img.shields.io/npm/v/@code-wallet/mnemonic.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@code-wallet/mnemonic.svg

# @code-wallet/mnemonic
A TypeScript library to generate and manage cryptographic keys using mnemonics
and HD (hierarchical deterministic) paths for the ED25519 curve based on the
SLIP-0010 specification.

Learn more about Code at https://getcode.com. See the [docs](https://code-wallet.github.io/code-sdk/docs) for more information.

## Introduction
Cryptographic keys are essential for maintaining security in digital systems,
especially in blockchain and cryptographic applications. This library offers a
deterministic approach to key derivation, allowing users to generate a Keypair
from a mnemonic phrase, which is a human-readable list of words, following the
principles of the SLIP-0010 specification.

## Features
* Clean, simple, low-dependency library. Passes standard set of tests for SLIP-0010.

* **Mnemonic Generation**: Create mnemonic phrases of either 12 or 24 words.
* **Mnemonic to Keypair**: Derive cryptographic key pairs directly from mnemonic phrases.
* **Path Parsing**: Convert string representations of HD paths into structured formats.
* **Child Key Derivation**: Create child keys based on provided parent keys.
* **Key Offset**: Manage individual indexes in the HD path, including hardened keys.

## Quick Start

```bash
npm install @code-wallet/mnemonic
``` 

## Examples
Generating a Mnemonic and Keypair

```typescript
import { MnemonicPhrase, MnemonicType } from '@code-wallet/mnemonic';

const mnemonic = MnemonicPhrase.generate(MnemonicType.Long);
console.log("Mnemonic:", mnemonic.getPhrase());

const keypair = mnemonic.toKeypair();
console.log("Public Key:", keypair.publicKey);
console.log("Private Key:", keypair.privateKey);
```

### Phrase to Keypair

```typescript
import { MnemonicPhrase } from '@code-wallet/mnemonic';

const mnemonic = new MnemonicPhrase("install assume ketchup talk giant bone foster flight situate math hurt border deputy grab mesh hope update dream evolve caught erupt win danger thought");

const keypair = mnemonic.toKeypair(); // Uses default Solana path unless specified
console.log("Public Key:", keypair.publicKey);
console.log("Private Key:", keypair.privateKey);
```

### Parsing a Path

```typescript
import { Path } from '@code-wallet/mnemonic';

const path = new Path("m/44'/180'/0'/0'");
console.log(path.toString());
```

### Mnemonic Generation
To generate a mnemonic:
    
```typescript
import { MnemonicPhrase, MnemonicType } from '@code-wallet/mnemonic';

const mnemonic = MnemonicPhrase.generate(MnemonicType.Short);
console.log(mnemonic.getPhrase());
```

### Deriving a Keypair
Once you have a mnemonic, you can derive a keypair:

```typescript
const keypair = mnemonic.toKeypair();
```

### Using a Custom HD Path
By default, the library uses a standard path for Solana (m/44'/501'/0'/0'). However, you can specify a custom path:

```typescript
import { Path } from '@code-wallet/mnemonic';

const customPath = new Path("m/44'/180'/0'/0'");
const keypair = mnemonic.toKeypair(customPath);
```


## Contribution
Feel free to contribute to the library by submitting pull requests or reporting issues.

## License
This library is licensed under the MIT License.
