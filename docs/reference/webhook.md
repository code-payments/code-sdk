# Webhook Events

Sometimes you may want to know when a payment has been made, or when a user has cancelled a payment. With the SDK, you can do this by listening to [Browser Events](./browser-events), or by setting up a callback endpoint (webhooks). 

It is best practice to not exclusively rely on browser based events, as they can be tampered with or may not come through at all (eg: network outages). Instead, you can ask the Code Sequencer to notify you of events using a webhook.

## How it works

When you create an intent, you can provide a webhook URL. This URL will be called by the Code Sequencer when a payment has been made.

The webhook will contain a [JSON Web Token](https://jwt.io/) that you can use to verify that the webhook was sent by Code and that it hasn't been tampered with. It will be signed with the public key `codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR`. We recommend using a library like [jsonwebtoken](https://www.npmjs.com/package/jose) to verify the JWT (jwtVerify).

You can find a full example of this under the SDK examples [here](https://github.com/code-wallet/code-sdk/blob/main/examples/5-example-purchase-flow/src/routes/payment.ts#L38-L78).

::: warning
The webhook URL will need to be public before you create the intent. The Code Sequencer will verify that the domain you provide is publicly accessible before it will create the intent.
:::

## Testing Locally

You can use [cloudflare tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/) to test this locally. For example, run `cloudflared tunnel --url localhost:3000` and then use the cloudflare public url as your webhook endpoint.

## Example

```js
import * as code from "@code-wallet/client";
import express from "express";

const app = express();

// ...

// Create intent (notify the Code Sequencer that you want to receive a payment)
app.post('/create-intent', async (req, res) => {
  const { clientSecret, id } = await code.paymentIntents.create({
    /// ...

    // The location where we want to be notified once the payment is made. This
    // URL must be publicly accessible and live at the time this call is made.
    //
    // You can use cloudflare tunnels to test this locally:
    // See https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/
    //
    // For example, run `cloudflared tunnel --url localhost:3030`
    // 1) Then replace the url below with the url provided by cloudflare tunnels
    // 2) And finally, start the server with `node server.js`
    webhook: { url: 'https://example.com/webhook' },
  });

  console.log('Created intent', id);

  // This value needs to be sent to the browser so that the browser can use it
  // to setup a payment with this intent instance.
  res.send({ clientSecret });
});

// This endpoint is where Code will let us know that a payment has been made.
// You can use this to gate content or update your database that a payment has
// been made.
app.post('/webhook', function(req, res) {

  console.log('Received webhook event');

  // Once we receive a webhook event, we can use the JWT to verify that it was
  // sent by Code and that it hasn't been tampered with. It will be signed with
  // the public key `codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR`

  const jwt = req.body.split('.');
  const [header, payload, signature] = jwt.map((part) => Buffer.from(part, 'base64'));

  console.log('header:\n', header.toString());
  console.log('payload:\n', payload.toString());
  console.log('signature:\n', signature.toString('hex'));

  // Example response:
  // header:
  //   {"alg":"EdDSA","typ":"JWT"}
  // payload:
  //   {"amount":0.01,"currency":"USD","destination":"E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR","exchangeRate":0.00000893,"intent":"9joz92rMXnS8NuK9Y3PnukdVi1W7S9cs388CTQxxg6r6","quarks":112000000,"state":"SUBMITTED"}
  // signature:
  //   0d3e5361e13a727ca7cb0aaed9bb30652266d24701aae7ce26c3acc6f1886274310f69af3ca545f3057fc628ec9c45e74b606da7d44539f05637a6c8c56cde01

  // After verifying the JWT, you can check the payload to see if the payment
  // was successful.

  // At this point you can store that the intent was paid for in your database

  res.send({ success: true });
});
```


