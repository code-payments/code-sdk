import * as proto from '@code-wallet/rpc';
import { IdempotencyKey } from '../idempotency';
import { Keypair, PublicKey } from '../keys';
import { CodePayload, CodeKind } from '../payload';
import { Intent, SignedIntent } from '../intent';
import { 
    ErrLoginDomainRequired, 
    ErrLoginRequired, 
    ErrLoginVerifierRequired, 
    ErrUnexpectedError
} from '../errors';
import { generateRendezvousKeypair } from '../rendezvous';
import { validateElementOptions } from '../elements/validate';
import { ElementOptions  } from '../elements/options';

/**
 * Represents a login request and provides methods to construct, validate, and sign the request.
 */
class LoginRequestIntent implements Intent {
    domain: string;
    verifier: PublicKey;
    signer?: Keypair;

    options: ElementOptions;
    nonce: IdempotencyKey;

    rendezvousPayload: CodePayload;
    rendezvousKeypair: Keypair;

    /**
     * Constructs a new PaymentRequestIntent instance.
     * 
     * @param opt - The payment request options.
     */
    constructor(opt: ElementOptions) {
        this.options = {
            ...opt,
        };

        this.validate();

        const { signers } = opt;
        const { domain, verifier } = opt.login!;

        this.domain = domain;
        this.verifier = PublicKey.fromBase58(verifier);

        if (signers) {
            this.signer = signers.find((k) => k.getPublicKey().toBase58() === verifier)
        }

        // Create an 11 byte buffer from idempotencyKey if provided, otherwise generate a random nonce
        if (this.options.idempotencyKey) {
            this.nonce = IdempotencyKey.fromSeed(this.options.idempotencyKey);
        } else if (this.options.clientSecret) {
            this.nonce = IdempotencyKey.fromClientSecret(this.options.clientSecret);
        } else {
            this.nonce = IdempotencyKey.generate();
        }

        // See payload encoding for CodeKind.RequestPayment
        const kind = CodeKind.RequestLogin;
        const nonce = this.nonce.value;

        // Create a rendezvous payload and derive a keypair from it
        this.rendezvousPayload = new CodePayload({ kind, nonce, });
        this.rendezvousKeypair = generateRendezvousKeypair(this.rendezvousPayload);
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
        const message = msg.toBinary();
        const signature = sig;

        return {
            message,
            intent,
            signature,
        }
    }

    /**
     * Retrieves the client secret.
     * 
     * @returns The client secret as a string.
     */
    getClientSecret(): string {
        return this.nonce.toString();
    }

    /**
     * Retrieves the intent ID.
     * 
     * @returns The intent ID as a Base58 encoded string.
     */
    getIntentId(): string {
        return this.rendezvousKeypair.getPublicKey().toBase58();
    }
}

export {
    LoginRequestIntent,
}