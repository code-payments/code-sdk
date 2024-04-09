import express from "express";
import bodyParser from "body-parser";
import { jwtVerify, importJWK } from 'jose';
import { PublicKey } from "@code-wallet/keys";
import * as code from "@code-wallet/client";

const port = 3040;
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
    amount: 0.05,
    currency: 'usd',
    destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
  });

  // The id value can also be used to query the status of the payment intent
  // manually. See examples/3-minimal-with-verify/server.js
  console.log('Created intent', id);

  // The location where we want to be notified once the payment is made. This
  // URL must be publicly accessible and live at the time this call is made.
  //
  // You can use cloudflare tunnels to test this locally:
  // See https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/
  //
  // For example, run `cloudflared tunnel --url localhost:3030`
  // 1) Then replace the url below with the url provided by cloudflare tunnels
  // 2) And finally, start the server with `node server.js`
  const { success, message } = await code.webhook.register({
    intent: id,
    url: 'https://example.com/webhook',
  })

  console.log('Registered webhook', success, message);

  // The clientSecret value needs to be sent to the browser so that the browser
  // can use it to setup a payment with this intent instance. The client will
  // use the payment details along with this value to derive the same payment
  // intent id on its end.
  res.send({ clientSecret });
});

// This endpoint is where Code will let us know that a payment has been made.
// You can use this to gate content or update your database that a payment has
// been made.
app.post('/webhook', async (req, res) => {

  console.log('Received webhook event');

  // Once we receive a webhook event, we can use the JWT to verify that it was
  // sent by Code and that it hasn't been tampered with. It will be signed with
  // the public key `codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR`

  const jwt = req.body;

  // Example response:
  // header:
  //   {"alg":"EdDSA","typ":"JWT"}
  // payload:
  //   {"amount":0.01,"currency":"USD","destination":"E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR","exchangeRate":0.00000893,"intent":"9joz92rMXnS8NuK9Y3PnukdVi1W7S9cs388CTQxxg6r6","quarks":112000000,"state":"SUBMITTED"}
  // signature:
  //   0d3e5361e13a727ca7cb0aaed9bb30652266d24701aae7ce26c3acc6f1886274310f69af3ca545f3057fc628ec9c45e74b606da7d44539f05637a6c8c56cde01

  // Verify the JWT
  const publicKey = 'codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR';
  const event = await verifyToken(jwt, publicKey);

  console.log('Verified webhook event', event);

  // After verifying the JWT, you can check the payload to see if the payment
  // was successful.

  // At this point you can store that the intent was paid for in your database

  res.send({ success: true });
});

/**
 * A helper function to verify a token using the public key.
 * @throws {Error} If the token is invalid or has been tampered with.
 */
async function verifyToken(token, publicKey) {
  const publicKeyBuffer = PublicKey.fromBase58(publicKey).toBuffer();
  const publicKeyBase64Url = publicKeyBuffer.toString('base64url');

  const jwk = {
    kty: 'OKP',
    crv: 'Ed25519',
    alg: 'EdDSA',
    x: publicKeyBase64Url,
  };

  // Import the JWK to a format that the 'jose' library can use
  const importedKey = await importJWK(jwk, 'EdDSA');

  // Verify the token
  return await jwtVerify(token, importedKey, { algorithms: ['EdDSA'] });
}

app.listen(port, () => {
  console.log(`🚀 Minimal example listening on port ${port}`)
  console.log(`http://localhost:${port}`)
});
