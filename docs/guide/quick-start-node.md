---
title: Quick Start - Node / Bun
description: Get up and running with the Code SDK in Node.js.
---
# Quick Start - Node.js

This guide will help you integrate the Code SDK into your Node.js application,
allowing you to create and verify payment intents effortlessly.

## Prerequisites

- **Node.js**: Ensure you have [Node](https://nodejs.org/) (or [Bun](https://bun.sh/)) installed.
- **npm**: Node Package Manager is typically installed alongside Node.js.

## Step 1: Install the Code SDK

First, initialize a new Node.js project (if you haven't already):

```bash
mkdir my-code-app
cd my-code-app
npm init -y
```

Next, install the Code SDK using npm:

```bash
npm install @code-wallet/client
```

## Step 2: Create a Payment Intent

Create a file named `createIntent.js` and add the following code to create a payment intent:

```javascript
// createIntent.js
const code = require('@code-wallet/client');

async function createPaymentIntent() {
  try {
    const paymentData = {
      destination: "E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR", // Replace with your destination address
      amount: 0.05, // Minimum amount is $0.05 USD
      currency: 'usd',
    };

    // Create a payment request intent
    const response = await code.paymentIntents.create(paymentData);
    console.log('Payment Intent Created:', response);
  } catch (error) {
    console.error('Error creating payment intent:', error);
  }
}

createPaymentIntent();
```

Run the script:

```bash
node createIntent.js
```

You should see a response indicating that the payment intent has been created, including an `id` and `clientSecret`.

## Step 3: Verify the Payment Intent

Create another file named `verifyIntent.js` to verify the status of the payment intent:

```javascript
// verifyIntent.js
const code = require('@code-wallet/client');

async function verifyPaymentIntent(intentId) {
  try {
    const status = await code.paymentIntents.getStatus(intentId);
    console.log('Payment Intent Status:', status);
  } catch (error) {
    console.error('Error verifying payment intent:', error);
  }
}

// Replace 'your-intent-id' with the actual intent ID returned from createIntent.js
const intentId = 'your-intent-id';
verifyPaymentIntent(intentId);
```

Run the verification script:

```bash
node verifyIntent.js
```

This will output the current status of the specified payment intent.

## Notes

- **Destination Address:** Ensure that the `destination` address is a valid Solana address associated with your Code Wallet.
- **Amount Constraints:** The minimum payment amount is $0.05 USD, the maximum is $250 USD. Adjust the `amount` as needed.

## Further Steps

- **Integrate with Your Application:** Incorporate the SDK into your application's backend to handle payments dynamically.
- **Explore Advanced Features:** Look into features like [Payment Fees](../intents/payment-fees), [Tipping](../intents/tipping), and [Idempotency](../reference/idempotency) to enhance your payment flows.
- **Check Examples:** Refer to the [Node.js Examples](https://github.com/code-payments/code-sdk/tree/main/examples) repository for more comprehensive use cases.

## Need Help?

If you encounter any issues or have questions, join our community on [Discord](https://discord.gg/T8Tpj8DBFp) or follow us on [Twitter](https://twitter.com/getcode).
