# Idempotency
Sometimes it is desirable to ensure that a particular action is carried out only once. This unique execution assurance is usually referred to as `idempotency`.

Take, for instance, the world of online gaming. Here, players often engage in frequent, small-value transactions to acquire in-game items or advantages. When a gamer decides to purchase an in-game asset, it's crucial that the transaction process is seamless.

Imagine a scenario where a player is making a purchase in a game integrated with the Code SDK. They pay for an in-game item but a technical hiccup, like the game's server going down, interferes with the transaction. As a result, the payment is processed, but the player doesn't receive the item they've paid for. This situation is not just a source of frustration, it can diminish trust in both the game and the payment system.

In the absence of idempotency:

1) There's potential for players to pay for items but not receive them due to issues on the game's services.
2) Players lack an efficient way to validate their purchase if they attempt to re-issue the same intent, potentially being charged again.

## Transactions with Idempotency
To address these challenges, the Code app SDK offers a mechanism to produce payment intents using an `idempotencyKey`.

```js{9}
// Create intent (notify the Code Sequencer that you want to receive a payment)
app.post('/create-intent', async (req, res) => {
  // Crafting a payment intent for an in-game item
  const { clientSecret, id } = await code.paymentIntents.create({
    amount: 0.25,
    currency: 'usd',
    destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
    // Utilizing the game and item IDs to form a deterministic idempotencyKey
    idempotencyKey: `${game.id}-${item.id}`,
  });

  // This value needs to be sent to the browser so that the browser can use it
  // to setup a payment with this intent instance.
  res.send({ clientSecret });
});
```

See a full example [here](../example/payment-verification).

-------------------------------------------------------------------------------

By incorporating the `idempotencyKey` with specific game and item IDs:

* Players purchases are singular. Any effort to replicate the transaction will fail.

* Should any interruptions occur during the buying process, like server outages or communication failures, the transaction can be re-validated without the threat of repeated charges.
