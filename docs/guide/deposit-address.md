---
title: Deposit Address
description: Learn how to find and use your deposit address in the Code app.
---

# Deposit Address

Your **Deposit Address** is essential for receiving payments through the Code SDK. This address is linked to your Code Wallet and ensures that funds are directed to the correct destination.

## How to Find Your Deposit Address

1. **Open the Code App:**
   - Launch the Code Wallet app on your mobile device.

2. **Navigate to Settings:**
   - Tap on the **Settings** icon, located in the top-right corner of the app interface.

3. **Access the Deposit Kin Tab:**
   - Within Settings, select the `Deposit Kin` tab. This section displays the Solana address designated for receiving Kin payments.

4. **Copy Your Deposit Address:**
   - Tap on the address to copy it to your clipboard. You can now use this address in your payment intents.

## Visual Reference

Below is an illustration of where to find your Deposit Address within the Code app:

<br>

<img src="/deposit-address.png" alt="Deposit Address" />

## Using the Deposit Address in Your Code

When creating a payment intent, you'll need to specify the `destination` parameter. This should be set to your **Deposit Address** to ensure that payments are correctly routed to your wallet.

### Example: Create a Payment Button with Deposit Address

```js [js]
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', {
  currency: 'usd',
  destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR', // Replace with your deposit address
  amount: 0.05,
});

button.mount('#button-container');
```

### HTML

```html [html]
<div id="button-container"></div>
```

With this setup, you'll receive push notifications whenever a payment is made to your **Deposit Address**.

