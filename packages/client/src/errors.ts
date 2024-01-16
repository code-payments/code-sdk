const ErrUnexpectedError = () => new Error("unexpected error");
const ErrUnexpectedHttpStatus = (val: any, msg: any) => new Error(`unexpected HTTP status: ${val}, ${msg}`);
const ErrUnexpectedServerError = (val: any) => new Error(`unexpected server error: ${val}`);
const ErrIntentIdRequired = () => new Error("intent ID is required");
const ErrSignerRequired = () => new Error("signer is required");

export {
    ErrUnexpectedError,
    ErrUnexpectedHttpStatus,
    ErrUnexpectedServerError,
    ErrIntentIdRequired,
    ErrSignerRequired,
};
