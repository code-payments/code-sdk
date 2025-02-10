# Rendezvous Key
The Rendezvous Key is an integral component of the [Code App](./app) and [Code Sequencer](./sequencer), it is a mechanism to establish a trusted communication channel. At its core, the system uses QR-like codes, which, when scanned, create a mechanism for opening a streaming channel for two parties to exchange intent details.

## What is it?
At its core, the Rendezvous Key is a [Keypair value](https://github.com/code-payments/code-sdk/blob/095be2b7231c1d8f612c12b1f23afc0ebb2fdb8a/packages/intents/src/keys/rendezvous.ts#L37).

It allows two parties to establish a direct communication channel without having to know each other's identity beforehand. By scanning a code, they can instantly 'rendezvous' and initiate an interaction. When users scan an [Intent](../intents/introduction) via the Code app, the underlying details are hashed into this key. All future messages and events regarding the intent are then signed using the rendezvous key. While the Code Sequencer can route messages based on this, it cannot alter them due to the key's private nature, ensuring message integrity. The Rendezvous Key elegantly merges SHA-256 hashing with QR code mechanics, simplifying user experience while underpinning robust security.

::: info Note
Without the rendezvous key, the Code Sequencer could alter details about the submitted intents. The rendezvous key ensures that the sequencer can only route messages, not alter them.
:::

## How it Works
Upon scanning an `Intent` via the Code app, be it a payment request or an incoming fund receipt, details of the intent are encoded into a QR-like code. This code's value undergoes a SHA-256 hashing process, generating a 'rendezvous' key. This key, specifically its public part, is crucial for the Code Sequencer to route messages between the interacting parties. Crucially, the sequencer only has access to this public portion, ensuring it can route but not alter messages, as it lacks the private key necessary for signing.

The Rendezvous Key ensures the Code Sequencer remains an intermediary, directing communication but never having the authority to tamper or alter it. All messages under this system are signed using the rendezvous key, bolstering security against potential threats.

## Structure
The rendezvous key is a 32-byte value that is derived using a SHA256 hash from a
20-byte payload. The payload is a 20-byte binary blob that contains the data
for the scan code before it is encoded.

For payment requests, the payload is structured as follows:

```
0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
| T | C |        Fiat               |                   Nonce                   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
```

You can find the payload details [here](https://github.com/code-payments/code-sdk/blob/main/packages/kikcode/src/payload.ts) and the communication protocol [here](https://github.com/code-payments/code-sdk/blob/main/packages/rpc/src/generated/messaging/v1/messaging_service_connect.ts).