const ErrInvalidSize = () => new Error("invalid size");
const ErrDestinationRequired = () => new Error("destination is required");
const ErrAmountRequired = () => new Error("amount is required");
const ErrCurrencyRequired = () => new Error("currency is required");
const ErrInvalidCurrency = () => new Error("invalid currency");
const ErrUnexpectedError = () => new Error("unexpected error");
const ErrAmbiguousNonce = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey");
const ErrInvalidMode = () => new Error(`invalid mode`);
const ErrInvalidAddress = () => new Error("invalid address");

export {
    ErrInvalidSize,
    ErrDestinationRequired,
    ErrAmountRequired,
    ErrCurrencyRequired,
    ErrInvalidCurrency,
    ErrUnexpectedError,
    ErrAmbiguousNonce,
    ErrInvalidMode,
    ErrInvalidAddress,
};
