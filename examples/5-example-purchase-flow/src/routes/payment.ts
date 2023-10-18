import { Router, Request, Response } from 'express';
import * as articles from '../models/articles';
import * as payments from '../models/payments';
import { useConfig } from '../config';
import { verifyToken } from '../utils/jwt';
import * as code from '@code-wallet/client';

const router = Router();

router.post('/create-intent/:item', async (req: Request, res: Response) => {
  const config = useConfig();
  const item = articles.getArticleById(req.params.item);
  if (!item) {
    return res.status(404).send('Not found');
  }

  const { clientSecret, id } = await code.paymentIntents.create({
    mode: 'payment',
    amount: item.price,
    currency: item.currency,
    destination: config.storeAccount,

    // Uncomment this line to receive a webhook event when the payment is
    // completed. You'll need to use a tunnel or deploy this server to the
    // public internet to receive the webhook event.

    // webhook: { url: config.webhookURL },
  });

  // Save the payment intent id for later
  payments.addPaymentIntent(id, item.id);

  // Return the client secret to the client so that a payment can be made
  // against this intent
  res.send({ clientSecret, });
});

router.post('/webhook', async (req: Request, res: Response) => {
  // The Code API will send a webhook event when the payment is completed. This
  // event triggers before the client is redirected to the success page but it
  // will not wait on this server to respond before redirecting the client to
  // the success page.

  // When we receive a webhook event, we can use the JWT to verify that it was
  // sent by Code and that it hasn't been tampered with. It will be signed with
  // the public key `codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR`. A status of
  // 'SUBMITTED' means that the payment has been completed.

  const config = useConfig();

  // Extract JWT token from the request body
  const token: string = req.body;

  console.log('Received webhook event:', token);

  try {
    // Verify the JWT token
    const publicKey = config.codeSequencerPublicKey;
    const payloadJSON = await verifyToken(token, publicKey) as any;

    // Find the payment related to the purchase
    const payment = payments.findPaymentByIntent(payloadJSON.intent);
    if (!payment) {
      console.warn('Payment not found');
    } else if (payloadJSON.state !== 'SUBMITTED') {
      console.warn('Unexpected state:', payloadJSON.state);
    } else {

      // Update the payment status and increment the purchase count
      payments.updatePaymentAfterPurchase(payloadJSON.intent);
    }

    res.send({ success: true });
  } catch (error) {
    console.warn('Error verifying JWT:', error);
    res.status(400).send({ success: false, error: 'Invalid token' });
  }
});

export default router;