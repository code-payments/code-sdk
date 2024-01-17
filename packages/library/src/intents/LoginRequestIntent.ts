import * as proto from '@code-wallet/rpc';
import { Keypair, PublicKey } from '../keys';
import { CodePayload, CodeKind } from '../payload';
import { SignedIntent } from '../intent';
import { 
    ErrLoginDomainRequired, 
    ErrLoginRequired, 
    ErrLoginVerifierRequired, 
    ErrUnexpectedError
} from '../errors';
import { validateElementOptions } from '../elements/validate';
import { ElementOptions  } from '../elements/options';
import { AbstractIntent } from './AbstractIntent';

/**
 * Represents a login request and provides methods to construct, validate, and sign the request.
 */
class LoginRequestIntent extends AbstractIntent {
    domain: string;
    verifier: PublicKey;
    signer?: Keypair;

    /**
     * Constructs a new PaymentRequestIntent instance.
     * 
     * @param opt - The payment request options.
     */
    constructor(opt: ElementOptions) {
        super({
            ...opt,
            mode: 'login',
        });

        const { signers } = opt;
        const { domain, verifier } = opt.login!;

        this.domain = domain;
        this.verifier = PublicKey.fromBase58(verifier);

        if (signers) {
            this.signer = signers.find((k) => k.getPublicKey().toBase58() === verifier)
        }
    }

    init(): void {
        // noop
    }

    toPayload(): CodePayload {
        // See payload encoding for CodeKind.RequestPayment
        const kind = CodeKind.RequestLogin;
        const nonce = this.nonce.value;

        // Create a rendezvous payload and derive a keypair from it
        return new CodePayload({ kind, nonce, });
    }

    /**
     * Validates the payment request options.
     */
    validate() {
        validateElementOptions(this.options);

        if (!this.options.login) {
            throw ErrLoginRequired();
        }

        if (!this.options.login.domain) {
            throw ErrLoginDomainRequired();
        }

        if (!this.options.login.verifier) {
            throw ErrLoginVerifierRequired();
        }
    }

    /**
     * Converts the payment request intent to its protobuf representation.
     * 
     * @returns The protobuf representation of the payment request intent.
     */
    toProto() : proto.Message {
        const msg = new proto.RequestToLogin({
            domain: {
                value: this.domain,
            },
            verifier: {
                value: this.verifier.toBuffer(),
            },
            rendezvousKey: {
                value: this.rendezvousKeypair.getPublicKey().toBuffer(),
            },
        });

        return new proto.Message({
            kind: {
                case: 'requestToLogin',
                value: msg,
            }
        });
    }

    /**
     * Signs the payment request intent.
     * 
     * @returns A signed intent containing the message, intent, and signature.
     */
    sign(): SignedIntent {
        if (!this.signer) {
            throw ErrLoginVerifierRequired();
        }

        const envelope = this.toProto();
        const msg = envelope.kind.value as proto.RequestToLogin;
        if (!msg) {
            throw ErrUnexpectedError();
        }

        msg.signature = new proto.Common.Signature({
            value: this.signer.sign(msg.toBinary()),
        });

        const sig = this.rendezvousKeypair.sign(envelope.toBinary());
        const intent = this.rendezvousKeypair.getPublicKey().toBase58();
        const signedBytes = msg.toBinary();
        const signature = sig;

        return {
            envelope,
            signedBytes,
            intent,
            signature,
        }
    }
}

export {
    LoginRequestIntent,
}