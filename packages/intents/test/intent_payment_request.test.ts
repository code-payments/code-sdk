import { expect } from 'chai';
import { CurrencyCode, Kin } from '@code-wallet/currency';
import {
    ErrAmountRequired,
    ErrCurrencyRequired,
    ErrDestinationRequired,
    PaymentRequestIntent,
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
        it('should return correct protobuf json for USD', () => {
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination,
                amount: 10,
                currency: 'usd'
            });

            const protoMessage = intent.toProto();
            const buf = protoMessage.toJson();

            expect(buf).to.deep.equal({
                requestToReceiveBill: {
                    requestorAccount: {
                        value: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='
                    }, 
                    partial: {
                        currency: 'usd',
                        nativeAmount: 10,
                    }
                }
            });
        });

        it('should return correct protobuf json for KIN', () => {
            const kinAmount = Kin.fromDecimal(54321.6789);
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination:'2q7pyhPwAwZ3QMfZrnAbDhnh9mDUqycszcpf86VgQxhF',
                amount: kinAmount.toDecimal(),
                currency: 'kin'
            });

            const protoMessage = intent.toProto();
            const buf = protoMessage.toJson();

            expect(buf).to.deep.equal({
                requestToReceiveBill: {
                    requestorAccount: {
                        value: 'Gy9JCW4+Xb0Pz6nAwM2S2as7IVRLNNXdSmXZi4eLmSI='
                    }, 
                    exact: {
                        currency: 'kin',
                        exchangeRate: 1,
                        nativeAmount: 54321.68,
                        quarks: "5432168000"
                    }
                }
            });
        });

        it('should return correct protobuf bytes for USD', () => {
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

        it('should return correct protobuf bytes for KIN', () => {
            const intent = new PaymentRequestIntent({
                mode: 'payment',
                destination: '2q7pyhPwAwZ3QMfZrnAbDhnh9mDUqycszcpf86VgQxhF',
                amount: 54321.6789,
                currency: 'kin'
            });

            const protoMessage = intent.toProto();
            const actual = protoMessage.toBinary();
            const expected = new Uint8Array([
                0x2a, 0x43, 0x0a, 0x22, 0x0a, 0x20, 0x1b, 0x2f, 0x49, 0x09, 0x6e,
                0x3e, 0x5d, 0xbd, 0x0f, 0xcf, 0xa9, 0xc0, 0xc0, 0xcd, 0x92, 0xd9,
                0xab, 0x3b, 0x21, 0x54, 0x4b, 0x34, 0xd5, 0xdd, 0x4a, 0x65, 0xd9,
                0x8b, 0x87, 0x8b, 0x99, 0x22, 0x12, 0x1d, 0x0a, 0x03, 0x6b, 0x69,
                0x6e, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f, 0x19,
                0x29, 0x5c, 0x8f, 0xc2, 0x35, 0x86, 0xea, 0x40, 0x20, 0xc0, 0x9c,
                0xa1, 0x9e, 0x14
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
            expect(actual.signedBytes.toString()).to.equal(expected.message.toString());
            expect(actual.signature.toString()).to.equal(expected.signautre.toString());

        });
    });
});