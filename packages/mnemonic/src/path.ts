import { ErrInvalidIndex, ErrInvalidPathIdentifier } from "./errors";
import { Offset } from "./offset";

/**
 * Represents the derivation path for Hierarchical Deterministic (HD) wallets.
 */
class Path {
    /** Starting identifier for derivation paths. */
    static readonly identifier = "m";

    /** Separator for components in the derivation path. */
    static readonly separator = "/";

    /** Identifier for hardened derivation. */
    static readonly hardener = "'";

    /** Array of Offset values indicating the derivation path. */
    indexes: Offset[];

    /**
     * Creates an instance of Path.
     *
     * @param {string} path - The derivation path string.
     */
    constructor(path: string) {
        this.indexes = Path.parse(path);
    }

    /**
     * Parses a derivation path string into an array of Offset values.
     *
     * @param {string} path - The derivation path string.
     * @returns {Offset[]} An array of parsed Offset values.
     */
    static parse(path: string): Offset[] {
        const components = path.split(Path.separator);

        const identifier = components.shift();
        if (identifier !== Path.identifier) {
            throw ErrInvalidPathIdentifier(identifier);
        }

        const indexes = components.map((index) => {
            const hardened = index.endsWith(Path.hardener);
            const value = hardened ? index.slice(0, -1) : index;
            const parsed = parseInt(value, 10);

            if (isNaN(parsed) || parsed < 0 || parsed > Offset.maxIndex) {
                throw ErrInvalidIndex(index);
            }

            return new Offset(parsed, hardened);
        });
        return indexes;
    }

    /**
     * Converts an array of Offset values into a string representation.
     *
     * @param {Offset[]} indexes - An array of Offset values.
     * @returns {string} The string representation of the derivation path.
     */
    static stringify(indexes: Offset[]): string {
        if (indexes.length === 0) {
            return Path.identifier;
        }

        return Path.identifier + this.separator + indexes.map((index) => {
            return index.value + (index.hardened ? Path.hardener : "");
        }).join(Path.separator);
    }

    /**
     * Returns the string representation of the derivation path.
     *
     * @returns {string} The string representation of the derivation path.
     */
    toString(): string {
        return Path.stringify(this.indexes);
    }
}

export {
    Path,
}