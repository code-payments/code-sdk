# Payment Events

You may want to know when a payment has been made, or when a user has canceled a payment. You can do this by listening to events.

You have the ability to listen for payment events on both the client- and server-side. The client-side uses a WebSocket connection to the Code Sequencer for [events](../reference/browser-events), while the server-side SDK uses a [webhook](../reference/webhook) endpoint.

Below you'll find an example of how to use both. 

<br>

::: info
The webhook URL will need to be public before you create the intent. 

You can use [cloudflare tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/) to test this locally.

<br>

For example, run `cloudflared tunnel --url localhost:3030`
1) Then replace the url below with the url provided by cloudflare tunnels
2) And finally, start the server with `node server.js`
:::


## Events Example

The full example code can be found on [GitHub](https://github.com/code-payments/code-sdk/tree/main/examples/4-minimal-with-webhook).

::: code-group

```js [client-side]
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', {
    // ...

    confirmParams: {
        success: { url: 'https://example.com/success/{{INTENT_ID}}', }, // Optional
        cancel: { url: 'https://example.com/cancel', }, // Optional
    },
});

button.on('success', async (event) => {
    // Handle successful payment, the intent ID will be provided in the event object

    // return true; // Return true to prevent the browser from navigating to the optional success URL provided in the confirmParams
});

button.on('cancel', async (event) => {
    // Handle cancelled payment, the intent ID will be provided in the event object

    // return true; // Return true to prevent the browser from navigating to the optional cancel URL provided in the confirmParams
});

button.mount('#button-container');
```

```js [server-side]
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

:::

This snippet creates a payment button that looks like this:

<div id="button-container"></div>
