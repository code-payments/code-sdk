import * as code from "@code-wallet/client";
import express from "express";
import bodyParser from "body-parser";

const port = 3030;
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// The webhook response is a JWT, so we need to parse it as such
app.use(bodyParser.text({ type: 'application/jwt' }));

app.get('/', (req, res) => {
  // index page (with the payment button)
  res.render('index');
});

app.get('/verify/:id', async (req, res) => {
  // verify page (where we check the status of the payment)
  
  const intent = req.params.id;
  const { status } = await code.paymentIntents.getStatus({ intent });

  res.render('verify', { intent, status });
});

app.post('/create-intent', async (req, res) => {
  // Create intent (notify the code API that a payment is coming soon)

  const { clientSecret, id } = await code.paymentIntents.create({
    amount: 0.05, // Minimum amount is $0.05 USD
    currency: 'usd',
    destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
  });

  console.log('Created intent', id);

  // This value needs to be sent to the browser so that the browser can use it
  // to setup a payment with this intent instance.
  res.send({ clientSecret });
});


app.listen(port, () => {
  console.log(`🚀 Minimal example listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})
