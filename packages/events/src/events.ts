export interface InternalStreamEvents {
    error: { message: string };
    streamClosed: {};
    streamTimeout: {};
}

export interface InternalElementEvents {
    resize: { width: number, height: number};
}

export interface InternalButtonEvents {
    invoke: {};
    beforeInvoke: {};
    afterInvoke: {};
    navigate: { url: string };
}

export interface InternalCardEvents {
    requestToGrabBill: {};
    requestToReceiveBill: {};
    codeScanned: {};
    clientRejectedPayment: {};
    intentSubmitted: {};
    airdropReceived: {};
}

export interface InternalPayloadEvents {
    updatedSuccessUrl: { value: string };
    updatedCancelUrl: { value: string };
    updatedIdempotencyKey: { value: string };
    updatedClientSecret: { value: string };
}

export type InternalEvents = InternalStreamEvents & 
                             InternalButtonEvents & 
                             InternalElementEvents & 
                             InternalCardEvents &
                             InternalPayloadEvents;