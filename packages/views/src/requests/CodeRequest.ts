import { EventChannel, InternalEvents } from "@code-wallet/events";
import { Intent } from "@code-wallet/intents";
import * as proto from '@code-wallet/rpc';

export interface CodeRequest {
    emitter: EventChannel<InternalEvents> | null;

    intent: Intent;
    kikCode?: Uint8Array;

    hasMessage(): boolean;
    toPayload(): string;
    generateKikCode(): Promise<void>;
}

export type CodeRequestWithMessage = CodeRequest & {
    toProto(): Promise<proto.SendMessageRequest>;
    openStream(emitter: EventChannel<InternalEvents>): Promise<void>;
    closeStream(): void;
}

export type CodeRequestFromPayload = (
    payload: string, 
    options?: { 
        clientSecret?: string; 
        idempotencyKey?: string; 
        successUrl?: string; 
        cancelUrl?: string; 
    }) => CodeRequest;
