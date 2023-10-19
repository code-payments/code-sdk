# Intents
The Code app redefines how transactions are approached on the Solana blockchain, leveraging an innovative model that creates `Intents` rather than directly submitting transactions. Specifically, when we talk about an intent, it captures a user's desired action, without the intricate blockchain mechanisms beneath it. An intent can then be transformed into the one or more transactions that are required to fulfill that desired action. 

```mermaid
graph LR
  Intent -->|1 or more| Actions
  Actions -->|1 or more| Transactions
  Transactions -->|1 or more| Instructions
```

From both the app and SDK point of view, you only need to create an intent and the tooling will take care of the rest.

::: info Example
A user may wish to `Withdraw` funds from their account, this suggests that the app needs to create transactions for unlocking multiple [Timelock](../reference/timelock) accounts and then transfer the funds to a destination account. From a developer perspective, the app only needs to create a `Withdraw` intent and the tooling will take care of the rest. 
:::

We plan to support a wide variety of intents in the future, but for now, we will focus on the most common ones. Specifically, we will focus on the `PaymentIntent`.

## Intent vs. Transaction: The Distinction
* **Creation & Fulfillment**: When a user decides to pay another user in the Code app, they're essentially crafting a "payment intent." This isn't a blockchain transaction itself. Instead, it sets in motion a chain of events that culminates in several transactions, ultimately fulfilling that payment intent.

* **The Role of the Code Sequencer**: Unlike traditional wallets, the Code app doesn’t directly push transactions onto the blockchain. After an intent is created, the Code app communicates with the Code Sequencer. The Sequencer, equipped with nonce values, assists in breaking down this intent into individual transactions.

* **Signature-based Communication**: Transactions formulated within the mobile app are not communicated in their entirety to the Sequencer. Only the signatures are. The Sequencer, aware of the intent type, re-creates these transactions on its end and appends the received signatures. A discrepancy in intent perceptions between the app and Sequencer would invalidate these transactions, assuring alignment and consistency on both ends.

* **Ensuring On-Chain Privacy**: Payments are uniquely partitioned into categorized values via the splitter contract. This ensures that while the transactions are visible on-chain, the exact value and intent remain obscured, promoting user privacy.


## Why This Matters?
The distinction between an intent and a transaction is more than semantics, it's a foundational shift in approach. It mirrors the functionality of mainstream payment platforms but is tailored for the blockchain, providing several advantages:

* **Future Flexibility**: This model paves the way for the introduction of diverse intent types, expanding the app's functionalities.

* **Blockchain Abstraction**: The actual blockchain mechanics are abstracted from the user's intent. They specify what they wish to accomplish, and the system handles the underlying complexities.

* **Intent Identification**: The intent ID typically corresponds to the rendezvous public key, ensuring a cohesive link with the Rendezvous Key system discussed earlier.

Intents, especially payment intents in the Code app, represent a strategic departure from standard transaction models. By segmenting user intentions from blockchain transactions and intricately linking them with systems like the Rendezvous Key, the Code app promises an efficient, flexible, and private payment experience.

## How to Use Intents

The Code app supports many intent types internally and we plan to roll out more in the future. Our initial focus will be on keeping things simple and easy to use. Currently, the SDK  only supports a subset of the intents that the app supports. 

If you want to get close to the metal you can use the raw `@code-wallet/rpc` package to create intents that are not yet supported by the SDK but documentation is limited and you won't have the tooling to assist in generating the right transactions.

Proceed to the next section to learn how to create [Payment Requests](./payment-requests.md) using the SDK.

::: info Example Usage
You can also refer to the [examples](../example/payment-verification) for more information.
:::
