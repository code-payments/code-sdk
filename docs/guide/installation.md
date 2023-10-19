
# Installation

The SDK is split into multiple packages, each of which can be installed separately. This allows you to install only the packages you need, and avoid installing unnecessary dependencies. 

For help with installation, see the [client-side](./installation-client) or [server-side](./installation-server) guides. 

## Packages

* [@code-wallet/elements](https://www.npmjs.com/package/@code-wallet/elements) - Provides the `code.elements` object, which you can use to create a payment button. This is a client-side package.
* [@code-wallet/client](https://www.npmjs.com/package/@code-wallet/client) - Allows you to create a payment intent and verify the payment on your server. Can be used on both the server and client side.
* [@code-wallet/mnemonic](https://www.npmjs.com/package/@code-wallet/mnemonic) - Provides a utility for generating a mnemonic phrase. Implements hierarchical deterministic (HD) wallet functionality (BIP-32 and BIP-39)
* [@code-wallet/library](https://www.npmjs.com/package/@code-wallet/library) - Provides the internal utility functions used by the other packages. You'll find the intent, keypair, and payment definitions here.
* [@code-wallet/programs](https://www.npmjs.com/package/@code-wallet/programs) - Provides serialization and deserialization functions for the on-chain programs types and instructions.
* [@code-wallet/rpc](https://www.npmjs.com/package/@code-wallet/rpc) - Provides a WebSocket envelope for GRPC communication to the Code sequencer.

::: info
Most developers will only use the `@code-wallet/elements` package, which provides code elements like the `Pay with Code` button. 

On the server side, you'll likely want the `@code-wallet/client` package, which allows you to create a payment intent and verify the payment on your server.
:::

## Next Steps

Take a look at the [client-side](./installation-client) or [server-side](./installation-server) guides to learn how to install the SDK. Or check out the [examples](../example/request-payment) to see how to use the SDK in your project.

## Need Help?

If you have any questions or need help integrating Code into your website or application, please reach out to us on [Discord](https://discord.gg/DunN9aNS) or [Twitter](https://twitter.com/getcode).

