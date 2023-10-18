# @code-wallet/client
The `@code-wallet/client` module provides a seamless way to create a payment
intent and verify payments directly from your server or client application.
Whether you're building a web application or a server-side system, this module
offers the tools you need to integrate with Code Wallet effectively.

Learn more about Code at https://getcode.com. See the [docs](https://code-wallet.github.io/code-sdk/docs) for more information.

## Features
* **Server and Client Compatibility**: Designed for use both in browser environments and Node.js.
* **Payment Intent Creation**: Easily create payment intents for processing transactions.
* **Payment Verification**: Verify payments directly from your server to ensure they are completed successfully.

## Installation
```
npm install @code-wallet/client
```

### Usage

Creating a Payment Intent

```javascript
import { paymentIntents } from "@code-wallet/client";

const options = {
    // ... your payment intent options here ...
};

const intent = await paymentIntents.create(options);
console.log(intent.clientSecret); // Use this client secret in your application
```

Verifying a Payment Intent

```javascript
import { paymentIntents } from "@code-wallet/client";

const options = {
    intent: "YOUR_INTENT_ID"
};

const status = await paymentIntents.getStatus(options);
console.log(status); // Either 'pending' or 'confirmed'
```

## Need Help?
If you have any questions or need help integrating Code into your website or
application, please reach out to us on [Discord](https://discord.gg/DunN9aNS) or
[Twitter](https://twitter.com/getcode).
