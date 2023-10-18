import { expect } from 'chai';
import {
    CurrencyCode,
    ErrAmountRequired,
    ErrCurrencyRequired,
    ErrDestinationRequired,
    Kin,
    PaymentRequestIntent,
    PaymentRequestOptions,
} from '../src';

describe('PaymentRequestIntent', () => {

    const destination = '11111111111111111111111111111111';

    describe('constructor', () => {
        it('should initialize correctly', () => {
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
                currency: 'kin'
            });

            expect(intent.options.destination).to.equal(destination);
            expect(intent.options.amount).to.equal(10);
            expect(intent.options.currency).to.equal('kin');
            expect(intent.convertedAmount).to.equal(10 * 100);

            const intent2 = new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
                currency: 'usd'
            });

            expect(intent2.options.destination).to.equal(destination);
            expect(intent2.options.amount).to.equal(10);
            expect(intent2.options.currency).to.equal('usd');
            expect(intent2.convertedAmount).to.equal(10 * 100);
        });
    });

    describe('validate', () => {
        it('should throw an error if destination is missing', () => {
            expect(() => new PaymentRequestIntent({
                mode: 'payment',
                amount: 10,
                currency: 'kin'
            } as any)).to.throw(ErrDestinationRequired().message);
        });

        it('should throw an error if amount is missing', () => {
            expect(() => new PaymentRequestIntent({
                mode: 'payment',
                destination,
                currency: 'kin'
            } as any)).to.throw(ErrAmountRequired().message);
        });

        it('should throw an error if currency is missing', () => {
            expect(() => new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
            } as any)).to.throw(ErrCurrencyRequired().message);
        });

        it('should throw an error if currency is invalid', () => {
            expect(() => new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
                currency: 'invalidCurrency' as CurrencyCode
            })).to.throw(Error);
        });
    });

    describe('toProto', () => {
        it('should return correct protobuf json', () => {
            const kinAmount = Kin.fromDecimal(10);
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: Number(kinAmount.whole),
                currency: 'kin'
            });

            const protoMessage = intent.toProto();
            const buf = protoMessage.toJson();

            expect(buf).to.deep.equal({
                requestToReceiveBill: {
                    requestorAccount: {
                        value: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='
                    }, 
                    exact: {
                        currency: 'kin',
                        exchangeRate: 1,
                        nativeAmount: 10,
                        quarks: Math.floor(kinAmount.toDecimal() * 100).toString()
                    }
                }
            });
        });

        it('should return correct protobuf bytes', () => {
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
                currency: 'usd'
            });

            const protoMessage = intent.toProto();
            const actual = protoMessage.toBinary();
            const expected = new Uint8Array([
                0x2A, 0x34, 0x0A, 0x22, 0x0A, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x1A, 0x0E, 0x0A, 0x03, 0x75, 0x73, 0x64, 0x11, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x24, 0x40
            ]);

            expect(actual.toString()).to.equal(expected.toString());
        });
    });
});