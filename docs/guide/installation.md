
# Installation

The SDK is split into multiple packages, each of which can be installed separately. This allows you to install only the packages you need, and avoid installing unnecessary dependencies. 

For help with installation, see the [client-side](./installation-client) or [server-side](./installation-server) guides. 

## Packages

We have a number of packages available for use in your project. TypeScript is the preferred language for Code SDK development. However, we also provide a Python SDK for server-side integration with others on the way.

-------------------------------------------------------------------------------

### TypeScript

* [@code-wallet/elements](https://www.npmjs.com/package/@code-wallet/elements) - Provides the Code elements, which you can add to your website. This is a `client-side` only package.
* [@code-wallet/client](https://www.npmjs.com/package/@code-wallet/client) - Allows you to create a payment intent and verify the payment on your server. Can be used on both the server and client-side.
* [@code-wallet/mnemonic](https://www.npmjs.com/package/@code-wallet/mnemonic) - Provides a utility for generating a mnemonic phrase. Implements hierarchical deterministic (HD) wallet functionality (BIP-32 and BIP-39)
* [@code-wallet/library](https://www.npmjs.com/package/@code-wallet/library) - Provides the internal utility functions used by the other packages. You'll find the intent, keypair, and payment definitions here.
* [@code-wallet/programs](https://www.npmjs.com/package/@code-wallet/programs) - Provides serialization and deserialization functions for the on-chain programs types and instructions.
* [@code-wallet/rpc](https://www.npmjs.com/package/@code-wallet/rpc) - Provides a WebSocket envelope for GRPC communication to the Code sequencer.

::: info ES vs CommonJS
The SDK is available as both a CommonJS module and an ECMAScript module (ESM). The ESM version is recommended for use with bundlers, as it allows bundlers to perform tree-shaking and other optimizations.

Learn more about JavaScript modules [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
:::

-------------------------------------------------------------------------------

### Python

* [code-wallet](https://pypi.org/project/code-wallet/) - The Code Wallet Python SDK is a module that allows Python developers to integrate Code into their applications. Seamlessly start accepting payments with minimal setup and just a few lines of code.


## Next Steps

Take a look at the [client-side](./installation-client) or [server-side](./installation-server) guides to learn how to install the SDK. Or check out the [examples](../example/request-payment) to see how to use the SDK in your project.

<br>
<br>

::: info More Languages
Don't see your language? We're working on adding more SDKs. If you'd like to help, please reach out to us on [Discord](https://discord.gg/T8Tpj8DBFp) or [Twitter](https://twitter.com/getcode).

Check out the [Custom Backends](../intents/custom-backends) page to learn more.
:::


