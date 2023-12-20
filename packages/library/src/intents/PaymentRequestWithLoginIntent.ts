import * as proto from '@code-wallet/rpc';
import { Keypair, PublicKey } from '../keys';
import { SignedIntent } from '../intent';
import { 
    ErrLoginDomainRequired, 
    ErrLoginRequired, 
    ErrLoginVerifierRequired, 
    ErrUnexpectedError
} from '../errors';
import { ElementOptions  } from '../elements/options';
import { PaymentRequestIntent } from './PaymentRequestIntent';

/**
 * Represents a payment request with login and provides methods to construct, validate, and sign the request.
 */
class PaymentRequestWithLoginIntent extends PaymentRequestIntent {
    domain: string;
    verifier: PublicKey;
    signer?: Keypair;

    /**
     * Constructs a new PaymentRequestIntent instance.
     * 
     * @param opt - The payment request options.
     */
    constructor(opt: ElementOptions) {
        super(opt);

        this.validate();

        const { signers } = opt;
        const { domain, verifier } = opt.login!;

        this.domain = domain;
        this.verifier = PublicKey.fromBase58(verifier);

        if (signers) {
            this.signer = signers.find((k) => k.getPublicKey().toBase58() === verifier)
        }
    }

    /**
     * Validates the payment request options.
     */
    validate() {
        super.validate();

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
     * Specifically, this method adds the domain and verifier to the request to
     * receive bill message.
     * 
     * @returns The protobuf representation of the payment request intent.
     */
    toProto() : proto.Message {
        const msg = super.toProto();
        const req = msg.kind.value as proto.RequestToReceiveBill;
        if (!req) {
            throw ErrUnexpectedError();
        }

        req.domain = new proto.Common.Domain({
            value: this.domain,
        });

        req.verifier = new proto.Common.SolanaAccountId({
            value: this.verifier.toBuffer(),
        });

        return new proto.Message({
            kind: {
                case: 'requestToReceiveBill',
                value: req,
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
            throw ErrUnexpectedError();
        }

        const msg = this.toProto();
        const req = msg.kind.value as proto.RequestToReceiveBill;
        if (!req) {
            throw ErrUnexpectedError();
        }

        // Add the signature to the request to receive bill message.
        req.signature = new proto.Common.Signature({
            value: this.signer.sign(req.toBinary()),
        });

        // Sign the message envelope with the rendezvous keypair
        return super.sign();
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
    PaymentRequestWithLoginIntent,
}