import { CodePayload, CodeKind } from '@code-wallet/kikcode';

import { BaseIntent } from './BaseIntent';
import { ElementOptions, ExternalPlatformOptions } from '../options';
import { 
    ErrExpectedPlatformName,
    ErrExpectedUsername,
    ErrPlatformRequired, 
} from '../errors';
import { validateElementOptions } from '../utils/validate';

/**
 * Represents a login request and provides methods to construct, validate, and sign the request.
 */
class TipRequestIntent extends BaseIntent {
    username: string = '';
    platform: string = '';

    /**
     * Constructs a new PaymentRequestIntent instance.
     * 
     * @param opt - The payment request options.
     */
    constructor(opt: ExternalPlatformOptions & ElementOptions) {
        super({
            ...opt,
            mode: 'tip',
        });
    }

    hasMessage(): boolean {
        return false;
    }

    init(opt: ElementOptions): void {
        const { username, name } = (opt as ExternalPlatformOptions).platform;

        this.username = username;
        this.platform = name;
    }

    toPayload(): CodePayload {
        // See payload encoding for CodeKind.Tip
        const kind = CodeKind.Tip;
        const username = this.username;

        // Create a rendezvous payload and derive a keypair from it
        return new CodePayload({ kind, username, });
    }

    /**
     * Validates the payment request options.
     */
    validate() {
        validateElementOptions(this.options);

        if (!this.options.platform) {
            throw ErrPlatformRequired();
        }

        if (!this.options.platform.name) {
            throw ErrExpectedPlatformName();
        }

        if (!this.options.platform.username) {
            throw ErrExpectedUsername();
        }

    }

}

export {
    TipRequestIntent,
}