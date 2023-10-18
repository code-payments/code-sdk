const ErrUnexpectedError = () => new Error("unexpected error");
const ErrUnexpectedHttpStatus = (val: any, msg: any) => new Error(`unexpected HTTP status: ${val}, ${msg}`);
const ErrUnexpectedServerError = (val: any) => new Error(`unexpected server error: ${val}`);

export {
    ErrUnexpectedError,
    ErrUnexpectedHttpStatus,
    ErrUnexpectedServerError,
};
