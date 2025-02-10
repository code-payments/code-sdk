---
title: Quick Start - Go
description: Get up and running with the Code SDK in Go.
---
# Quick Start - Go

This guide will help you integrate the Code SDK into your Go application, allowing you to create and verify payment intents seamlessly.

## Prerequisites

- **Go**: Ensure you have Go (version 1.16 or newer) installed.
- **Git**: Required for fetching dependencies. Install it from [git-scm.com](https://git-scm.com/downloads).

## Step 1: Install the Code Go SDK

Use the Go toolset to install the Code SDK. Navigate to your project directory and run:

```bash
go get github.com/code-payments/code-sdk-go
```

This command fetches the SDK and adds it to your project's dependencies.

## Step 2: Create a Payment Intent

Create a Go file named `createIntent.go` and add the following code to create a payment intent:

```go
// createIntent.go
package main

import (
	"context"
	"log"

	codesdk "github.com/code-payments/code-sdk-go/sdk"
)

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	ctx := context.Background()

	// Setup the Code web client
	client := codesdk.NewWebClient()

	// Specify payment request details
	intent, err := codesdk.NewPaymentRequestIntent(
		// Use the string "usd" for currency
		codesdk.USD,
		// Minimum amount is $0.05 USD
		0.05,
		// Code Deposit Address or any Solana token account
		"E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR",
	)
	check(err)

	// Create a payment request intent
	createdIntent, err := client.CreatePaymentRequest(ctx, intent)
	check(err)

	log.Println("Payment Intent Created:", createdIntent.GetIntentId())
}
```

Run the script:

```bash
go run createIntent.go
```

You should see a log message indicating that the payment intent has been created, along with its `IntentId`.

## Step 3: Verify the Payment Intent

Create another Go file named `verifyIntent.go` to verify the status of the payment intent:

```go
// verifyIntent.go
package main

import (
	"context"
	"log"

	codesdk "github.com/code-payments/code-sdk-go/sdk"
)

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	ctx := context.Background()

	// Setup the Code web client
	client := codesdk.NewWebClient()

	// Replace 'your-intent-id' with the actual Intent ID returned from createIntent.go
	intentId := "your-intent-id"

	// Check the intent status
	status, err := client.GetIntentStatus(ctx, intentId)
	check(err)

	log.Println("Payment Intent Status:", status)
}
```

Run the verification script:

```bash
go run verifyIntent.go
```

This will output the current status of the specified payment intent.

## Notes

- **Destination Address:** Ensure that the `destination` address is a valid Solana address associated with your Code Wallet.
- **Amount Constraints:** The minimum payment amount is $0.05 USD, the maximum is $250 USD. Adjust the `amount` as needed.

## Further Steps

- **Integrate with Your Application:** Incorporate the SDK into your application's backend to handle payments dynamically.
- **Explore Advanced Features:** Look into features like [Payment Fees](./payment-fees), [Tipping](./tipping), and [Idempotency](../reference/idempotency) to enhance your payment flows.
- **Check Examples:** Refer to the [Go Examples](https://github.com/code-wallet/code-sdk-go/tree/main/example) repository for more comprehensive use cases.

## Need Help?

If you encounter any issues or have questions, join our community on [Discord](https://discord.gg/T8Tpj8DBFp) or follow us on [Twitter](https://twitter.com/getcode).
