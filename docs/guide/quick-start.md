# Getting Started

Learn how to embed a [Code Payments](https://www.codepayments.org/) button in your website or web app. The client- and server-side code mounts everything needed to complete a payment using the Code app and verify it on your server.

## Create a Payment Button

This minimal snippet creates a Code payment button that you can embed in your website or application.

::: code-group

```js [js]
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', {
  currency: 'usd',
  destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
  amount: 0.05,
});

button.mount('#button-container');
```

```js [html]
<div id="button-container"></div>
```

With this snippet, you can create a payment button that looks like this:

<div id="button-container"></div>

## Next Steps

Now that you've learned how to create a payment button, you can learn about:

* [Deposit Address](./deposit-address)
* [Installation](./installation)
* [Payment Intents](../intents/introduction)

## Need Help?

If you have any questions or need help integrating Code into your website or application, please reach out to us on [Discord](https://discord.gg/T8Tpj8DBFp) or [Twitter](https://twitter.com/getcode).
