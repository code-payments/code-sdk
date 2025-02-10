---
title: Quick Start - PHP
description: Get up and running with the Code SDK in PHP.
---
# Quick Start - PHP

This guide will help you integrate the Code SDK into your PHP application, allowing you to create and verify payment intents seamlessly.

## Prerequisites

- **PHP**: Ensure you have PHP (version 7.4 or newer) installed. 
- **Composer**: PHP dependency manager. Install it from [getcomposer.org](https://getcomposer.org/download/).

## Step 1: Install the Code PHP SDK

Use Composer to install the Code SDK. Navigate to your project directory and run:

```bash
composer require code-wallet/client
```

## Step 2: Create a Payment Intent

Create a PHP script named `createIntent.php` and add the following code:

```php
<?php
// createIntent.php

require 'vendor/autoload.php';

use CodeWallet\Client\PaymentIntents;

$paymentData = [
    'destination' => "E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR", // Replace with your destination address
    'amount' => 0.05, // Minimum amount is $0.05 USD
    'currency' => 'usd',
];

try {
    // Create a payment request intent
    $response = PaymentIntents::create($paymentData);
    echo "Payment Intent Created:\n";
    print_r($response);
} catch (Exception $e) {
    echo "Error creating payment intent: " . $e->getMessage();
}
```

Run the script:

```bash
php createIntent.php
```

You should see a response indicating that the payment intent has been created, including an `id` and `clientSecret`.

## Step 3: Verify the Payment Intent

Create another PHP script named `verifyIntent.php` to verify the status of the payment intent:

```php
<?php
// verifyIntent.php

require 'vendor/autoload.php';

use CodeWallet\Client\PaymentIntents;

// Replace 'your-intent-id' with the actual intent ID returned from createIntent.php
$intentId = 'your-intent-id';

try {
    // Verify the intent status
    $status = PaymentIntents::getStatus($intentId);
    echo "Payment Intent Status:\n";
    print_r($status);
} catch (Exception $e) {
    echo "Error verifying payment intent: " . $e->getMessage();
}
```

Run the verification script:

```bash
php verifyIntent.php
```

This will output the current status of the specified payment intent.

## Notes

- **Destination Address:** Ensure that the `destination` address is a valid Solana address associated with your Code Wallet.
- **Amount Constraints:** The minimum payment amount is $0.05 USD, the maximum is $250 USD. Adjust the `amount` as needed.

## Further Steps

- **Integrate with Your Application:** Incorporate the SDK into your application's backend to handle payments dynamically.
- **Explore Advanced Features:** Look into features like [Payment Fees](./payment-fees), [Tipping](./tipping), and [Idempotency](../reference/idempotency) to enhance your payment flows.
- **Check Examples:** Refer to the [PHP Examples](https://github.com/code-payments/code-sdk-php/tree/main/example) repository for more comprehensive use cases.

## Need Help?

If you encounter any issues or have questions, join our community on [Discord](https://discord.gg/T8Tpj8DBFp) or follow us on [Twitter](https://twitter.com/getcode).
