import { expect } from 'chai';
import * as proto from '@code-wallet/rpc';
import { Keypair, PublicKey } from '@code-wallet/keys';
import { CurrencyCode } from '@code-wallet/currency';
import {
    ErrLoginDomainRequired,
    ErrLoginRequired,
    ErrLoginVerifierRequired,
    IntentType,
    PaymentRequestWithLoginIntent,
} from '../src';

describe('PaymentRequestWithLoginIntent', () => {

    const destination = 'CYbMQjhhFwE9NxYk91582ii4Q9jexXEtTesFmsgqKWRa';
    const opt = { 
        destination,
        amount: 0.5,
        mode: 'payment' as IntentType,
        currency: 'usd' as CurrencyCode,
    }

    const domain = 'app.getcode.com';
    const verifier = Keypair.fromRawPrivateKey(new Uint8Array ([
        31, 198, 32,  30, 134, 217, 253, 202,
        191, 201, 72, 101,  85,  57, 128, 211,
        204, 140, 82,  80,  37, 240, 241,  62,
        144, 107, 81,  63, 236, 197, 103,  45
    ]));

    const rendezvous = Keypair.fromRawPrivateKey(new Uint8Array([
        21,  17, 247, 182, 187, 209,  72, 224,
        155, 234, 125, 157, 197,  64, 106, 229,
        230,   5, 176,  18,  30,  47, 210, 243,
        87, 206,   0,   3, 208, 130,  81, 174
    ]));

    describe('constructor', () => {
        it('should initialize correctly', () => {
            const intent = new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                }
            });

            expect(intent.options.destination).to.equal(destination);
            expect(intent.options.amount).to.equal(0.5);
            expect(intent.options.currency).to.equal('usd');
            expect(intent.convertedAmount).to.equal(0.5 * 100);
            expect(intent.options.login!.domain).to.equal('app.getcode.com');
            expect(intent.options.login!.verifier).to.equal(verifier.getPublicKey().toBase58());
        });
    });

    describe('validate', () => {

        it('should throw an error if login is missing', () => {
            expect(() => new PaymentRequestWithLoginIntent({
                ...opt,
            } as any)).to.throw(ErrLoginRequired().message);
        });

        it('should throw an error if login.domain is missing', () => {
            expect(() => new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    verifier: verifier.getPublicKey().toBase58()
                }
            } as any)).to.throw(ErrLoginDomainRequired().message);
        });

        it('should throw an error if login.verifier is missing', () => {
            expect(() => new PaymentRequestWithLoginIntent({
                ...opt,
                login: { domain }
            } as any)).to.throw(ErrLoginVerifierRequired().message);
        });
    });

    describe('toProto', () => {
        it('should return correct protobuf json', () => {
            const intent = new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                }
            });

            intent.rendezvousKeypair = rendezvous;
            const msg = intent.toProto();

            expect(msg.toJson()).to.deep.equal({
                requestToReceiveBill: {
                    requestorAccount: {
                        value: PublicKey.fromBase58(destination).toBuffer().toString('base64')
                    }, 
                    partial: {
                        currency: 'usd',
                        nativeAmount: 0.5,
                    },
                    domain: {
                        value: domain
                    },
                    verifier: {
                        value: verifier.getPublicKey().toBuffer().toString('base64')
                    },
                    rendezvousKey: {
                        value: rendezvous.getPublicKey().toBuffer().toString('base64')
                    }

                }
            });
        });

        it('should return correct protobuf bytes', () => {
            const intent = new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                }
            });

            intent.rendezvousKeypair = rendezvous;
            const protoMessage = intent.toProto();
            const actual = protoMessage.toBinary();

            const expected = new Uint8Array([
                0x2a, 0x8f, 0x01, 0x0a, 0x22, 0x0a, 0x20, 0xab, 0x88, 0x67,
                0x2f, 0x94, 0x4e, 0xa4, 0x5b, 0x3c, 0x25, 0xc2, 0x6d, 0x73,
                0x2d, 0x2e, 0x5e, 0x40, 0xd5, 0xc7, 0xc1, 0x62, 0xc3, 0xcd,
                0x68, 0x58, 0xd5, 0xc9, 0x5a, 0x23, 0xfa, 0x34, 0x55, 0x1a,
                0x0e, 0x0a, 0x03, 0x75, 0x73, 0x64, 0x11, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0xe0, 0x3f, 0x22, 0x11, 0x0a, 0x0f, 0x61,
                0x70, 0x70, 0x2e, 0x67, 0x65, 0x74, 0x63, 0x6f, 0x64, 0x65,
                0x2e, 0x63, 0x6f, 0x6d, 0x2a, 0x22, 0x0a, 0x20, 0x90, 0x5c,
                0xc7, 0x96, 0xae, 0x7a, 0x19, 0x98, 0x46, 0x18, 0x36, 0xcd,
                0x9f, 0x59, 0x05, 0x2f, 0x8a, 0x2a, 0x52, 0xcd, 0x53, 0x9b,
                0x41, 0x7e, 0x57, 0x7c, 0x11, 0x82, 0x83, 0xd2, 0xa0, 0x6c,
                0x3a, 0x22, 0x0a, 0x20, 0x70, 0xa4, 0xae, 0xb6, 0x8f, 0x76,
                0x36, 0x3f, 0x22, 0x66, 0x81, 0xdf, 0x16, 0x62, 0xbf, 0xc0,
                0xf6, 0x42, 0x36, 0xe9, 0x7a, 0x7a, 0x64, 0x87, 0x46, 0x6a,
                0x93, 0x99, 0x54, 0x5e, 0x7a, 0xfb
            ]);

            expect(actual.toString()).to.equal(expected.toString());
        });
    });

    describe('sign', () => {
        it('should expect a login signer', () => {
            const intent = new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                },
            });

            intent.rendezvousKeypair = rendezvous;

            try {
                intent.sign();
            } catch (e) {
                expect(e.message).to.equal(ErrLoginVerifierRequired().message);
            }
        });

        it('should return correct signature json', () => {
            const intent = new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                },
                signers: [verifier]
            });

            intent.rendezvousKeypair = rendezvous;

            const res = intent.sign();
            const msg = proto.RequestToReceiveBill.fromBinary(res.signedBytes);

            expect(msg.toJson()).to.deep.equal({
                requestorAccount: {
                    value: PublicKey.fromBase58(destination).toBuffer().toString('base64')
                }, 
                partial: {
                    currency: 'usd',
                    nativeAmount: 0.5,
                },
                domain: {
                    value: domain
                },
                verifier: {
                    value: verifier.getPublicKey().toBuffer().toString('base64')
                },
                rendezvousKey: {
                    value: rendezvous.getPublicKey().toBuffer().toString('base64')
                },
                signature: {
                    value: '7EdpP8TSajVJ+79X0yCmG5FAlIlpJEO8Qsvo4CuSwyOLsJMXMqb15TrVyrFiNINEYHWfxpzJvwNkvrdiZT74Dg=='
                },
            });
        });

        it('should return correct signature bytes', () => {
            const intent = new PaymentRequestWithLoginIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                },
                signers: [verifier]
            });

            intent.rendezvousKeypair = rendezvous;

            const res = intent.sign();
            const msg = proto.RequestToReceiveBill.fromBinary(res.signedBytes);
            const actual = msg.toBinary();

            const expected = new Uint8Array([
                0x0a, 0x22, 0x0a, 0x20, 0xab, 0x88, 0x67, 0x2f, 0x94, 0x4e,
                0xa4, 0x5b, 0x3c, 0x25, 0xc2, 0x6d, 0x73, 0x2d, 0x2e, 0x5e,
                0x40, 0xd5, 0xc7, 0xc1, 0x62, 0xc3, 0xcd, 0x68, 0x58, 0xd5,
                0xc9, 0x5a, 0x23, 0xfa, 0x34, 0x55, 0x1a, 0x0e, 0x0a, 0x03,
                0x75, 0x73, 0x64, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0xe0, 0x3f, 0x22, 0x11, 0x0a, 0x0f, 0x61, 0x70, 0x70, 0x2e,
                0x67, 0x65, 0x74, 0x63, 0x6f, 0x64, 0x65, 0x2e, 0x63, 0x6f,
                0x6d, 0x2a, 0x22, 0x0a, 0x20, 0x90, 0x5c, 0xc7, 0x96, 0xae,
                0x7a, 0x19, 0x98, 0x46, 0x18, 0x36, 0xcd, 0x9f, 0x59, 0x05,
                0x2f, 0x8a, 0x2a, 0x52, 0xcd, 0x53, 0x9b, 0x41, 0x7e, 0x57,
                0x7c, 0x11, 0x82, 0x83, 0xd2, 0xa0, 0x6c, 0x32, 0x42, 0x0a,
                0x40, 0xec, 0x47, 0x69, 0x3f, 0xc4, 0xd2, 0x6a, 0x35, 0x49,
                0xfb, 0xbf, 0x57, 0xd3, 0x20, 0xa6, 0x1b, 0x91, 0x40, 0x94,
                0x89, 0x69, 0x24, 0x43, 0xbc, 0x42, 0xcb, 0xe8, 0xe0, 0x2b,
                0x92, 0xc3, 0x23, 0x8b, 0xb0, 0x93, 0x17, 0x32, 0xa6, 0xf5,
                0xe5, 0x3a, 0xd5, 0xca, 0xb1, 0x62, 0x34, 0x83, 0x44, 0x60,
                0x75, 0x9f, 0xc6, 0x9c, 0xc9, 0xbf, 0x03, 0x64, 0xbe, 0xb7,
                0x62, 0x65, 0x3e, 0xf8, 0x0e, 0x3a, 0x22, 0x0a, 0x20, 0x70,
                0xa4, 0xae, 0xb6, 0x8f, 0x76, 0x36, 0x3f, 0x22, 0x66, 0x81,
                0xdf, 0x16, 0x62, 0xbf, 0xc0, 0xf6, 0x42, 0x36, 0xe9, 0x7a,
                0x7a, 0x64, 0x87, 0x46, 0x6a, 0x93, 0x99, 0x54, 0x5e, 0x7a,
                0xfb
            ]);

            expect(actual.toString()).to.equal(expected.toString());
        });
    });
});