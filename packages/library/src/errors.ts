const ErrNotImplemented = () => new Error("not implemented");
const ErrInvalidSize = () => new Error("invalid size");
const ErrDestinationRequired = () => new Error("destination is required");
const ErrAmountRequired = () => new Error("amount is required");
const ErrCurrencyRequired = () => new Error("currency is required");
const ErrInvalidCurrency = () => new Error("invalid currency");
const ErrUnexpectedError = () => new Error("unexpected error");
const ErrAmbiguousNonce = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey");
const ErrInvalidValue = () => new Error("invalid value");
const ErrInvalidMode = () => new Error(`invalid mode`);
const ErrInvalidAddress = () => new Error("invalid address");
const ErrLoginRequired = () => new Error("login is required");
const ErrLoginDomainRequired = () => new Error("login domain is required");
const ErrLoginVerifierRequired = () => new Error("login verifier is required");

export {
    ErrNotImplemented,
    ErrInvalidSize,
    ErrDestinationRequired,
    ErrAmountRequired,
    ErrCurrencyRequired,
    ErrInvalidCurrency,
    ErrUnexpectedError,
    ErrAmbiguousNonce,
    ErrInvalidValue,
    ErrInvalidMode,
    ErrInvalidAddress,
    ErrLoginRequired,
    ErrLoginDomainRequired,
    ErrLoginVerifierRequired,
};
