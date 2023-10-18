import { Router, Request, Response } from 'express';
import { useLayout } from '../utils/layout';
import { useConfig } from '../config';
import * as articles from '../models/articles';
import * as payments from '../models/payments';
import * as code from '@code-wallet/client';

const router = Router();
const htmlResponse = useLayout();

router.get('/preview/:item', async (req: Request, res: Response) => {
    const config = useConfig();

    const item = articles.getArticleById(req.params.item);
    if (!item) {
        return res.status(404).send('Not found');
    }

    await htmlResponse(res,
        'article-preview-page',
        { 
            item, 
            content: item.content, 
            config: { 
                destination: config.storeAccount
            }
        }
    );
});

router.get('/full/:intent', async (req: Request, res: Response) => {
    const intent = req.params.intent;
    const payment = await handleIntentValidation(intent);

    if (!payment) { return res.status(404).send('Not found'); }

    const item = getAssociatedArticle(payment);
    if (!item) { return res.status(404).send('Not found'); }

    await htmlResponse(res, 'article-purchased-page', { item, content: item.content });
});

// Function to handle payment intent validation
async function handleIntentValidation(intent: string) {
    if (!intent) return null;

    const payment = payments.findPaymentByIntent(intent);
    if (!payment) return null;

    if (payment.status !== 'completed') {
        const { status } = await code.paymentIntents.getStatus({ intent });

        if (status === 'confirmed') {
            payments.updatePaymentAfterPurchase(intent);
        } else {
            return null;
        }
    }

    return payment;
}

// Function to get the associated article based on payment
function getAssociatedArticle(payment: payments.Payment) {
    const item = articles.getArticleById(payment.itemId);
    if (!item) return null;
    return item;
}

export default router;