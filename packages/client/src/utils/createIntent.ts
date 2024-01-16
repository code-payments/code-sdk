import bs58 from "bs58";
import { Buffer } from "buffer";
import { 
    Intent,
} from "@code-wallet/library";
import { Connection } from "../connection";

async function createIntent(intent: Intent, client: Connection) {
    const envelope = intent.sign();
    const body = {
        intent: envelope.intent,
        message: Buffer.from(envelope.message).toString('base64url'),
        signature: bs58.encode(envelope.signature),
        webhook: intent.options.webhook?.url,
    };

    await client.post('createIntent', body);

    return {
        clientSecret: intent.getClientSecret(),
        id: intent.getIntentId(),
    };
}

export {
    createIntent,
}
