import { Client } from "../client";
import { Intent, } from "@code-wallet/intents";
import * as proto from "@code-wallet/rpc";
import { ErrUnexpectedError } from "../errors";

async function createIntent(intent: Intent, client: Client) {
    const msg = await intent.getSendMessageRequestProto()
    const res = await client.send(proto.Messaging, 'sendMessage', msg);

    if (res.result !== proto.SendMessageResponse_Result.OK) {
        ErrUnexpectedError();
    }
    
    return {
        clientSecret: intent.getClientSecret(),
        id: intent.getIntentId(),
    };
}

export {
    createIntent,
}
