const ErrCurrencyRequired = () => new Error("currency is required");
const ErrInvalidCurrency = () => new Error("invalid currency");

export {
    ErrCurrencyRequired,
    ErrInvalidCurrency,
};
