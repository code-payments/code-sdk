import * as proto from '@code-wallet/rpc';
import { CurrencyCode } from '../currency';
import { IdempotencyKey } from '../idempotency';
import { Keypair, PublicKey } from '../keys';
import { CodePayload, CodeKind } from '../payload';
import { Intent, SignedIntent } from '../intent';
import { 
    ErrAmountRequired, 
    ErrCurrencyRequired, 
    ErrDestinationRequired, 
    ErrUnexpectedError
} from '../errors';
import { generateRendezvousKeypair } from '../rendezvous';
import { validateElementOptions } from '../elements/validate';
import { ElementOptions  } from '../elements/options';
import { Kin } from '../kin';

/**
 * Represents a payment request and provides methods to construct, validate, and sign the request.
 */
class PaymentRequestIntent implements Intent {
    options: ElementOptions;
    nonce: IdempotencyKey;

    convertedAmount: number;

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

            // Normalize currency to lowercase 
            // (just in case the end user is not using TypeScript)
            currency: opt.currency && opt.currency.toLowerCase() as CurrencyCode,
        };

        this.validate();

        // Create an 11 byte buffer from idempotencyKey if provided, otherwise generate a random nonce
        if (this.options.idempotencyKey) {
            this.nonce = IdempotencyKey.fromSeed(this.options.idempotencyKey);
        } else if (this.options.clientSecret) {
            this.nonce = IdempotencyKey.fromClientSecret(this.options.clientSecret);
        } else {
            this.nonce = IdempotencyKey.generate();
        }

        // We need to be very careful with floating point numbers. Ideally, we
        // would use a whole number and remainder as two bigints, or even a
        // string, but that is UX hostile and our goal is to keep it as simple
        // for the end dev as possible. Payment requests are limited to 2 decimal
        // places and up to 1 dollar.
        
        // If we assume we're going to be dealing with a floating point, we need
        // to take special care to ensure that we map to the exact same encoded
        // payload on the mobile app, browser, and backend. Otherwise, the
        // rendezvous key will not line up.

        // For example, if we have a price of 0.14, our encoding requires us to
        // multiply that value by 100. However, 0.14 * 100 is actually
        // 14.000000000000002 in IEEE-754. Another example, 0.29 * 100 is
        // actually 28.999999999999996. Furthermore, as we move away from 0-1,
        // there are decimal values that cannot be represented in IEEE-754.

        // We're going to use the toFixed() method to round to 2 decimal places
        // for the amount. This method handles the IEEE-754 issue for us.

        // Normalize amount to 2 decimal places
        this.options.amount = parseFloat(this.options.amount!.toFixed(2));

        // Multiply into encoding units
        this.convertedAmount = parseInt((this.options.amount! * 100).toFixed());

        // See payload encoding for CodeKind.RequestPayment
        const kind = CodeKind.RequestPayment;
        const amount = BigInt(this.convertedAmount);
        const nonce = this.nonce.value;

        // Create a rendezvous payload and derive a keypair from it
        this.rendezvousPayload = new CodePayload(kind, amount, nonce, this.options.currency);
        this.rendezvousKeypair = generateRendezvousKeypair(this.rendezvousPayload);
    }

    /**
     * Validates the payment request options.
     */
    validate() {
        validateElementOptions(this.options);

        if (!this.options.destination) {
            throw ErrDestinationRequired();
        }

        if (!this.options.amount) {
            throw ErrAmountRequired();
        }

        if (!this.options.currency) {
            throw ErrCurrencyRequired();
        } 
    }

    /**
     * Converts the payment request intent to its protobuf representation.
     * 
     * @returns The protobuf representation of the payment request intent.
     */
    toProto() {
        const destination = PublicKey.fromBase58(this.options.destination!);
        const { currency, amount } = this.options;

        let exchangeData: any | undefined;
        if (currency === "kin") {
            exchangeData = {
                case: 'exact',
                value: new proto.ExchangeData({
                    currency: 'kin',
                    exchangeRate: 1,
                    quarks: Kin.fromDecimal(amount!).toQuarks(),
                    nativeAmount: amount,
                })
            }
        } else {
            exchangeData = {
                case: 'partial',
                value: new proto.ExchangeDataWithoutRate({
                    currency,
                    nativeAmount: amount,
                })
            }
        }

        const msg = new proto.RequestToReceiveBill({
            requestorAccount: new proto.Common.SolanaAccountId({
                value: destination.toBuffer(),
            }),
            exchangeData,
        });

        return new proto.Message({
            kind: {
                case: 'requestToReceiveBill',
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
        const envelope = this.toProto();
        const msg = envelope.kind.value as proto.RequestToReceiveBill;
        if (!msg) {
            throw ErrUnexpectedError();
        }

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
    PaymentRequestIntent,
}