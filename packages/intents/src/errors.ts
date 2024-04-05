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
const ErrLoginVerifierRequired = () => new Error("login verifier is required");
const ErrLoginDomainRequired = () => new Error("login domain is required");
const ErrInvalidLoginDomain = () => new Error("invalid login domain");
const ErrLoginSubdomainsNotSupported = () => new Error("login subdomains are not supported");
const ErrLoginIPNotSupported = () => new Error("login IP addresses are not supported");
const ErrLoginLocalhostNotSupported = () => new Error("login localhost is not supported");
const ErrLoginPortsNotSupported = () => new Error("login ports are not supported");
const ErrLoginExpectedDomainName = () => new Error("login expected domain name but received a path");
const ErrPlatformRequired = () => new Error("platform is required");
const ErrExpectedPlatformName = () => new Error("expected platform name");
const ErrExpectedUsername = () => new Error("expected username");

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
    ErrLoginVerifierRequired,
    ErrLoginDomainRequired,
    ErrInvalidLoginDomain,
    ErrLoginSubdomainsNotSupported,
    ErrLoginIPNotSupported,
    ErrLoginLocalhostNotSupported,
    ErrLoginPortsNotSupported,
    ErrLoginExpectedDomainName,
    ErrPlatformRequired,
    ErrExpectedPlatformName,
    ErrExpectedUsername,
};
