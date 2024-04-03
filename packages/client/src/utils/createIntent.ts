import * as proto from "@code-wallet/rpc";
import { Intent, IntentWithMessage } from "@code-wallet/intents";
import { Client } from "../client";
import { ErrUnexpectedError } from "../errors";

async function createIntent(intent: Intent, client: Client) {
    if (intent.hasMessage()) {
        const withMessage = intent as IntentWithMessage;
        const msg = await withMessage.getSendMessageRequestProto();
        const res = await client.send(proto.Messaging, 'sendMessage', msg);

        if (res.result !== proto.SendMessageResponse_Result.OK) {
            ErrUnexpectedError();
        }
    }
    
    return {
        clientSecret: intent.getClientSecret(),
        id: intent.getIntentId(),
    };
}

export {
    createIntent,
}
