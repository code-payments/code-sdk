[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]

[npm-downloads-image]: https://img.shields.io/npm/dt/@code-wallet/elements?style=flat
[npm-image]: https://img.shields.io/npm/v/@code-wallet/elements?style=flat
[npm-url]: https://www.npmjs.com/package/@code-wallet/elements

# @code-wallet/elements
This package provides the code.elements object, which you
can utilize to embed a [Code Payments](https://codepayments.org) button
seamlessly into your website or application. This client-side package has a
hassle-free integration process, enabling users to complete payments using the
Code app and allowing server-side verification.

Learn more about Code at https://getcode.com. See the [docs](https://code-wallet.github.io/code-sdk/docs) for more information.

## Getting Started
Use the minimal JavaScript snippet below to create and embed a Code payment
button in your website or application:

```js
import code from 'https://js.getcode.com/v1/';

const { button } = code.elements.create('button', {
  currency: 'usd',
  destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
  amount: 0.05,
});

button.mount('#button-container');
```

## Client-side Install (browser)
For in-browser usage, the SDK is directly accessible via
`https://js.getcode.com/v1/`. Alternatively, for a more modular approach, you can
also opt to import the `@code-wallet/elements` package.

### Installation
If you're not using a package manager, you can directly import the SDK:

```js
import code from 'https://js.getcode.com/v1/';
```

For those leveraging a package manager, the `@code-wallet/elements` package can be installed via:

```bash
npm install @code-wallet/elements
```


## Need Help?

If you have any questions or need help integrating Code into your website or
application, please reach out to us on [Discord](https://discord.gg/T8Tpj8DBFp) or
[Twitter](https://twitter.com/getcode).
