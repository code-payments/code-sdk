const ErrUnknownElementType = (type: string) => new Error(`Unknown element type: ${type}`);
const ErrRequiredParameter = (param: string) => new Error(`Required parameter: ${param}`);
const ErrInvalidParameter = (param: string) => new Error(`Invalid parameter: ${param}`);

export {
    ErrUnknownElementType,
    ErrRequiredParameter,
    ErrInvalidParameter,
}