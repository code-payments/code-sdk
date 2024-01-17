import * as code from "@code-wallet/client";
import { Keypair } from "@code-wallet/library";
import express from "express";

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'example.com';
const app = express();
const verifier = Keypair.generate();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// index page (with the payment button)
app.get('/', function(req, res) {
  res.render('index');
});

// This is a page that the user will be redirected to once the payment is made.
app.get('/success/:id', async (req, res) => {
  // Get the payment intent id from the URL
  const intent = req.params.id;

  try {
    // Get the status of the payment intent
    const status = await code.getStatus({ intent });
    const user   = await code.getUserId({ intent, verifier });

    // Render the success page with the intent id and status
    res.render('success', { intent, status, user });
  } catch (e) {
    console.log('error', e);
    res.json({ error: e.message });
  }
});

// This is a JSON file that Code will look for when verifying your domain. It
// should be publicly accessible at the root of your domain. For example:
// https://example.com/.well-known/code-payments.json
app.get('/.well-known/code-payments.json', (req, res) => {
  res.json({ "public_keys": [verifier.getPublicKey().toBase58()] });
});

// Create a payment intent. We're letting Code know that a payment is coming
// soon and we want to be notified once it's made.
app.post('/create-intent', async (req, res) => {

  const { clientSecret, id } = await code.paymentIntents.create({
    amount: 0.05,
    currency: 'usd',
    destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',

    login: {
      verifier: verifier.getPublicKey().toBase58(),

      // Cannot be localhost or a subdomain. It must be a domain that you own
      // and have access to. Code will verify that this domain is owned by you
      // by looking for the .well-known/code-payments.json file.
      domain: hostname,
    },

    signers: [ verifier ]
  });

  console.log('Created intent', id);

  // The clientSecret value needs to be sent to the browser so that the browser
  // can use it to setup a payment with this intent instance. The client will
  // use the payment details along with this value to derive the same payment
  // intent id on its end.
  res.send({ clientSecret });
});


app.listen(port, () => {
  console.log(`🚀 Minimal example listening on port ${port}`)
  console.log(`http://localhost:${port}`)
});
