import * as code from "@code-wallet/client";
import express from "express";
import bodyParser from "body-parser";

const port = 3030;
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// The webhook response is a JWT, so we need to parse it as such
app.use(bodyParser.text({ type: 'application/jwt' }));

// index page (with the payment button)
app.get('/', function(req, res) {
  res.render('index');
});

// Create a payment intent. We're letting Code know that a payment is coming
// soon and we want to be notified once it's made.
app.post('/create-intent', async (req, res) => {

  const { clientSecret, id } = await code.paymentIntents.create({
    amount: 0.01,
    currency: 'usd',
    destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',

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

  // The id value can also be used to query the status of the payment intent
  // manually. See examples/3-minimal-with-verify/server.js
  console.log('Created intent', id);

  // The clientSecret value needs to be sent to the browser so that the browser
  // can use it to setup a payment with this intent instance. The client will
  // use the payment details along with this value to derive the same payment
  // intent id on its end.
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

app.listen(port, () => {
  console.log(`🚀 Minimal example listening on port ${port}`)
  console.log(`http://localhost:${port}`)
});
