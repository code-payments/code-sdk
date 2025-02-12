---
title: Payment Fees
description: Learn how to add fee configurations to payment intents.
---

# Payment Fees

In addition to standard micropayments, you can now collect a basis point fee from each payment. This feature allows merchants to add configurable fees to their transactions seamlessly.

## Adding Fees to Payment Intents

To include fees in your payment intents, simply add a `fees` section within your payment options. Here's how you can configure it:

```js
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', {
  currency: 'usd',
  destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
  amount: 0.25,
  fees: [
    {
      destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
      basisPoints: 1000, // 10% fee (e.g., 2.5 cents on a 25-cent payment)
    }
  ],
});

button.mount('#button-container');
```

### Customizing Fees

You can configure multiple fee objects if you need to support more than one fee recipient. Each fee object should specify the `destination` and the `basisPoints`. The `basisPoints` represent hundredths of a percent (e.g., `1000` basis points equals `10%`).

```js
const { button } = code.elements.create('button', {
  // ...other configurations
  fees: [
    {
      destination: '<FeeRecipientAddress1>',
      basisPoints: 500, // 5% fee
    },
    {
      destination: '<FeeRecipientAddress2>',
      basisPoints: 300, // 3% fee
    },
  ],
});
```

#### Best Practices

- **Transparent Fee Disclosure**: Inform users about any additional fees to maintain transparency and trust.

### Notes

- **Fee Count:** You can specify up to 5 fee recipients per payment.
- **Fee Total:** The maximum fee percentage cannot exceed 10% of the payment amount.
- **Compatibility:** Ensure that the destination addresses provided for fees are valid addresses.

::: tip NOTE
This feature is currently not supported by the PHP, Python, or Go libraries. These SDKs will be updated to support this feature in the future.

In the meantime, you can achieve the same functionality by sending a POST containing a signed `RequestToReceiveBill`. You can read more about this in our [Code API](./custom-backends) section.
:::

## Further Reading

- [Payment Intents](../intents/introduction)
- [Browser Events](../reference/browser-events)

