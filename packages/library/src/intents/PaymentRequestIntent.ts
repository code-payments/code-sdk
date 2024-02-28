import * as proto from '@code-wallet/rpc';
import { CurrencyCode } from '../currency';
import { PublicKey } from '../keys';
import { CodePayload, CodeKind } from '../payload';
import { SignedIntent } from '../intent';
import {
    ErrAmountRequired, 
    ErrCurrencyRequired, 
    ErrDestinationRequired, 
    ErrUnexpectedError
} from '../errors';
import { validateElementOptions } from '../elements/validate';
import { ElementOptions } from '../elements/options';
import { Kin } from '../kin';
import { AbstractIntent } from './AbstractIntent';

/**
 * Class for handling payment request intents, including validation, conversion, and signing.
 */
class PaymentRequestIntent extends AbstractIntent {
    convertedAmount: number | undefined;

    /**
     * Initialises a new instance of a payment request intent with specified options.
     * @param opt The payment request options, including amount, currency, and destination.
     */
    constructor(opt: ElementOptions) {
        super({
            ...opt,
            currency: opt.currency?.toLowerCase() as CurrencyCode,
            mode: 'payment',
        });
    }

    init(): void {
        // Normalises and converts the floating point amount to a whole number for encoding,
        // addressing floating point precision issues by rounding to 2 decimal places first.
        if (this.options.amount !== undefined) {
            const normalizedAmount = parseFloat(this.options.amount.toFixed(2));
            this.convertedAmount = Math.round(normalizedAmount * 100);
        }
    }

    toPayload(): CodePayload {
        // Constructs the payment request payload with the normalised amount and currency.
        if (!this.convertedAmount) throw ErrUnexpectedError();
        
        return new CodePayload({
            kind: CodeKind.RequestPayment,
            amount: BigInt(this.convertedAmount),
            nonce: this.nonce.value,
            currency: this.options.currency,
        });
    }

    /**
     * Validates the payment request options to ensure all required information is provided.
     */
    validate(): void {
        validateElementOptions(this.options);

        if (!this.options.destination) throw ErrDestinationRequired();
        if (this.options.amount === undefined) throw ErrAmountRequired();
        if (!this.options.currency) throw ErrCurrencyRequired();
    }

    /**
     * Converts the payment request intent to its protobuf representation for transmission.
     * @returns The protobuf representation of the payment request intent.
     */
    toProto(): proto.Message {
        const destination = PublicKey.fromBase58(this.options.destination!);
        const exchangeData = this.constructExchangeData();

        return new proto.Message({
            kind: {
                case: 'requestToReceiveBill',
                value: new proto.RequestToReceiveBill({
                    requestorAccount: { value: destination.toBuffer() },
                    exchangeData,
                }),
            },
        });
    }

    /**
     * Constructs the exchange data for the payment request based on the currency.
     * @returns The exchange data for the protobuf message.
     */
    private constructExchangeData(): proto.IExchangeData | proto.IExchangeDataWithoutRate {
        const { currency, amount } = this.options;
        if (currency === "kin") {
            return {
                case: 'exact',
                value: {
                    currency: 'kin',
                    exchangeRate: 1,
                    quarks: Kin.fromDecimal(amount!).toQuarks(),
                    nativeAmount: amount,
                },
            };
        } else {
            return {
                case: 'partial',
                value: {
                    currency,
                    nativeAmount: amount,
                },
            };
        }
    }

    /**
     * Signs the payment request intent, generating the necessary signature.
     * @returns The signed intent with the message, intent ID, and signature.
     */
    sign(): SignedIntent {
        const envelope = this.toProto();
        const signature = this.rendezvousKeypair.sign(envelope.toBinary());
        const intent = this.rendezvousKeypair.getPublicKey().toBase58();

        return {
            envelope,
            signedBytes: envelope.toBinary(),
            intent,
            signature,
        };
    }
}

export { PaymentRequestIntent };
