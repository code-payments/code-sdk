---
title: Quick Start - Python
description: Get up and running with the Code SDK in Python.
---
# Quick Start - Python

This guide will help you integrate the Code SDK into your Python application, allowing you to create and verify payment intents seamlessly.

## Prerequisites

- **Python**: Ensure you have Python (version 3.7 or newer) installed.
- **pip**: Python package installer, usually included with Python installations.

## Step 1: Install the Code Python SDK

Use pip to install the Code SDK. Open your terminal and run:

```bash
pip install code-wallet
```

If you're using a virtual environment, ensure it's activated before running the above command.

## Step 2: Create a Payment Intent

Create a Python script named `create_intent.py` and add the following code to create a payment intent:

```python
# create_intent.py

from code_wallet.client.intents import payment_intents

def create_payment_intent():
    test_data = {
        'destination': "E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR", # Replace with your destination address
        'amount': 0.05,  # Minimum amount is $0.05 USD
        'currency': 'usd',
    }

    try:
        # Create a payment request intent
        response = payment_intents.create(test_data)
        print("Payment Intent Created:", response)
    except Exception as e:
        print("Error creating payment intent:", e)

if __name__ == "__main__":
    create_payment_intent()
```

Run the script:

```bash
python create_intent.py
```

You should see a response indicating that the payment intent has been created, including an `id` and `clientSecret`.

## Step 3: Verify the Payment Intent

Create another Python script named `verify_intent.py` to verify the status of the payment intent:

```python
# verify_intent.py

from code_wallet.client.intents import payment_intents

def verify_payment_intent(intent_id):
    try:
        # Verify the intent status
        status = payment_intents.get_status(intent_id)
        print("Payment Intent Status:", status)
    except Exception as e:
        print("Error verifying payment intent:", e)

if __name__ == "__main__":
    # Replace 'your-intent-id' with the actual intent ID returned from create_intent.py
    intent_id = 'your-intent-id'
    verify_payment_intent(intent_id)
```

Run the verification script:

```bash
python verify_intent.py
```

This will output the current status of the specified payment intent.

## Notes

- **Destination Address:** Ensure that the `destination` address is a valid Solana address associated with your Code Wallet.
- **Amount Constraints:** The minimum payment amount is $0.05 USD, the maximum is $250 USD. Adjust the `amount` as needed.

## Further Steps

- **Integrate with Your Application:** Incorporate the SDK into your application's backend to handle payments dynamically.
- **Explore Advanced Features:** Look into features like [Payment Fees](./payment-fees), [Tipping](./tipping), and [Idempotency](../reference/idempotency) to enhance your payment flows.
- **Check Examples:** Refer to the [Python Examples](https://github.com/code-payments/code-sdk-python/tree/main/example) repository for more comprehensive use cases.

## Need Help?

If you encounter any issues or have questions, join our community on [Discord](https://discord.gg/T8Tpj8DBFp) or follow us on [Twitter](https://twitter.com/getcode).
