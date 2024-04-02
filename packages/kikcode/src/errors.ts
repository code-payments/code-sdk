const ErrInvalidSize = () => new Error("invalid size");
const ErrInvalidValue = () => new Error("invalid value");
const ErrInvalidUsername = () => new Error("invalid username");
const ErrInvalidNonce = () => new Error("invalid nonce");

export {
    ErrInvalidSize,
    ErrInvalidValue,
    ErrInvalidUsername,
    ErrInvalidNonce,
};
