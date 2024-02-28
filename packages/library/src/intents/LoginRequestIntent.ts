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
import { ElementOptions } from '../elements/options';
import { AbstractIntent } from './AbstractIntent';

/**
 * Class representing a login request, providing methods to construct, validate, and sign the request.
 */
class LoginRequestIntent extends AbstractIntent {
    domain: string;
    verifier: PublicKey;
    signer?: Keypair;

    /**
     * Constructs a new LoginRequestIntent instance with the given options.
     * @param opt The options for the login request.
     */
    constructor(opt: ElementOptions) {
        super({ ...opt, mode: 'login' });

        const { domain, verifier } = opt.login!;
        this.domain = domain;
        this.verifier = PublicKey.fromBase58(verifier);
        this.signer = opt.signers?.find((k) => k.getPublicKey().toBase58() === verifier);
    }

    init(): void {
        // No operation (noop), provided for extending AbstractIntent
    }

    toPayload(): CodePayload {
        return new CodePayload({
            kind: CodeKind.RequestLogin,
            nonce: this.nonce.value,
        });
    }

    /**
     * Validates the login request options, ensuring necessary information is provided.
     */
    validate(): void {
        validateElementOptions(this.options);
        const { login } = this.options;

        if (!login) throw ErrLoginRequired();
        if (!login.domain) throw ErrLoginDomainRequired();
        if (!login.verifier) throw ErrLoginVerifierRequired();
    }

    /**
     * Converts the login request to its protobuf representation for transmission.
     * @returns The protobuf representation of the login request.
     */
    toProto(): proto.Message {
        return new proto.Message({
            kind: {
                case: 'requestToLogin',
                value: new proto.RequestToLogin({
                    domain: { value: this.domain },
                    verifier: { value: this.verifier.toBuffer() },
                    rendezvousKey: { value: this.rendezvousKeypair.getPublicKey().toBuffer() },
                }),
            },
        });
    }

    /**
     * Signs the login request, ensuring it's authenticated before being sent.
     * @returns The signed intent with signature and envelope.
     */
    sign(): SignedIntent {
        if (!this.signer) throw ErrLoginVerifierRequired();

        const envelope = this.toProto();
        const msg = envelope.kind.value as proto.RequestToLogin;

        if (!msg) throw ErrUnexpectedError();

        const signedBytes = msg.toBinary();
        msg.signature = new proto.Common.Signature({
            value: this.signer.sign(signedBytes),
        });

        const signature = this.rendezvousKeypair.sign(envelope.toBinary());
        const intent = this.rendezvousKeypair.getPublicKey().toBase58();

        return { envelope, signedBytes, intent, signature };
    }
}

export { LoginRequestIntent };
