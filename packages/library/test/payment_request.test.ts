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

    describe('sign', () => {
        it('should return correct signature bytes', () => {
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
                currency: 'usd',
                idempotencyKey: '1234'
            });

            const actual = intent.sign();
            const expected = {
                message: new Uint8Array([
                    10, 34, 10, 32, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 26, 14, 10, 3, 117, 115, 100, 17,
                    0, 0, 0, 0, 0, 0, 36, 64
                ]),
                intent: 'GHEXGTE2r1PartuDip4VhDz8b2RY4xqRTRtMCUEaEXXN',
                signautre: new Uint8Array([
                    103, 103, 195, 242, 9, 66, 226, 48, 98, 182, 94,
                    172, 255, 84, 166, 93, 138, 175, 245, 162, 121, 68,
                    236, 16, 142, 46, 221, 160, 161, 70, 224, 49, 50,
                    66, 74, 43, 247, 39, 69, 179, 130, 15, 140, 178,
                    59, 255, 47, 104, 56, 75, 75, 193, 226, 2, 251,
                    52, 183, 8, 41, 236, 218, 205, 21, 14
                ])
            }

            expect(actual.intent).to.equal(expected.intent);
            expect(actual.message.toString()).to.equal(expected.message.toString());
            expect(actual.signature.toString()).to.equal(expected.signautre.toString());

        });
    });
});