[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]

[npm-downloads-image]: https://img.shields.io/npm/dt/@code-wallet/library.svg?style=flat
[npm-image]: https://img.shields.io/npm/v/@code-wallet/library.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@code-wallet/library.svg

# @code-wallet/library
This is an internal toolkit designed to support the core
functionalities of the Code SDK. It has utilities ranging from currency
operations to event handling and data validation used by other packages within
the SDK.

Learn more about Code at https://getcode.com. See the [docs](https://code-wallet.github.io/code-sdk/docs) for more information.

## Modules
* **Keys**: Manage cryptographic keys, including public keys and key pairs, crucial for the security and verification mechanisms of the platform.
* **Payload**: Manipulate and manage data payloads for different operations within the Code ecosystem.
* **Intents**: Define and handle various user intents, particularly focusing on payment requests.
* **Rendezvous**: An abstracted utility for managing user connections and engagements within the platform.
* **Currency & Kin**: Handle operations and conversions related to different currencies, with a particular focus on the Kin cryptocurrency.
* **Idempotency**: Ensure consistency and prevent unintentional repetitions in transactions and operations.

## Getting Started
As an internal package, `@code-wallet/library` is tailored for developers within
the Code team. For detailed information on each module and its functionalities,
please refer to the [documentation](https://code-wallet.github.io/code-sdk).

## Need Help?
If you have any questions or need help integrating Code into your website or
application, please reach out to us on [Discord](https://discord.gg/T8Tpj8DBFp) or
[Twitter](https://twitter.com/getcode).
