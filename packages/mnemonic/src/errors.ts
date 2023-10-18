const ErrUnsupportedLanguage = () => new Error('Unsupported language');
const ErrInvalidEntropyError = () => new Error('Invalid entropy');
const ErrInvalidMnemonicError = () => new Error('Invalid mnemonic');
const ErrInvalidPathIdentifier = (identifier: string | undefined) => new Error(`Invalid path identifier: ${identifier}`)
const ErrInvalidIndex = (index: string | undefined) => new Error(`Invalid index: ${index}`)

export {
    ErrUnsupportedLanguage,
    ErrInvalidEntropyError,
    ErrInvalidMnemonicError,
    ErrInvalidPathIdentifier,
    ErrInvalidIndex,
}