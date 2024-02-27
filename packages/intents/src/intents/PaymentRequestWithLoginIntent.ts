import * as proto from '@code-wallet/rpc';
import { Keypair, PublicKey } from '@code-wallet/keys';
import { PaymentRequestIntent } from './PaymentRequestIntent';

import { SignedIntent } from '../types';
import { ElementOptions, LoginRequestOptions, PaymentRequestOptions, } from '../options';
import { 
    ErrLoginDomainRequired, 
    ErrLoginRequired, 
    ErrLoginVerifierRequired, 
    ErrUnexpectedError
} from '../errors';

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
    constructor(opt: PaymentRequestOptions & LoginRequestOptions & ElementOptions) {
        super(opt);

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

        req.rendezvousKey = new proto.Common.SolanaAccountId({
            value: this.rendezvousKeypair.getPublicKey().toBuffer(),
        });

        if (this.options.fees) {
            req.additionalFees = this.options.fees.map((f) => {
                return new proto.AdditionalFeePayment({
                    destination: new proto.Common.SolanaAccountId({
                        value: PublicKey.fromBase58(f.destination).toBuffer(),
                    }),
                    feeBps: f.basisPoints,
                });
            });
        }

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
            throw ErrLoginVerifierRequired();
        }

        const envelope = this.toProto();
        const msg = envelope.kind.value as proto.RequestToReceiveBill;
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
    PaymentRequestWithLoginIntent,
}