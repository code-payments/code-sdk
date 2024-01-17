const ErrUnexpectedError = () => new Error("unexpected error");
const ErrNetworkError = (error: any) => new Error(`Network error ${error}`);
const ErrInvalidResponse = (status:number) => new Error(`Request failed with status code ${status}`);
const ErrIntentIdRequired = () => new Error("intent ID is required");
const ErrSignerRequired = () => new Error("signer is required");

export {
    ErrUnexpectedError,
    ErrIntentIdRequired,
    ErrSignerRequired,
    ErrNetworkError,
    ErrInvalidResponse,
};
