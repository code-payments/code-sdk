import * as proto from '@code-wallet/rpc';
import { expect } from 'chai';
import {
    ErrLoginDomainRequired,
    ErrLoginRequired,
    ErrLoginVerifierRequired,
    IntentType,
    Keypair,
    LoginRequestIntent,
    PublicKey,
} from '../src';

describe('LoginRequestIntent', () => {

    const opt = { 
        mode: 'login' as IntentType,
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
            const intent = new LoginRequestIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                }
            });

            expect(intent.options.login!.domain).to.equal('app.getcode.com');
            expect(intent.options.login!.verifier).to.equal(verifier.getPublicKey().toBase58());
        });
    });

    describe('validate', () => {

        it('should throw an error if login is missing', () => {
            expect(() => new LoginRequestIntent({
                ...opt,
            } as any)).to.throw(ErrLoginRequired().message);
        });

        it('should throw an error if login.domain is missing', () => {
            expect(() => new LoginRequestIntent({
                ...opt,
                login: {
                    verifier: verifier.getPublicKey().toBase58()
                }
            } as any)).to.throw(ErrLoginDomainRequired().message);
        });

        it('should throw an error if login.verifier is missing', () => {
            expect(() => new LoginRequestIntent({
                ...opt,
                login: { domain }
            } as any)).to.throw(ErrLoginVerifierRequired().message);
        });
    });

    describe('toProto', () => {
        it('should return correct protobuf json', () => {
            const intent = new LoginRequestIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                }
            });

            intent.rendezvousKeypair = rendezvous;
            const msg = intent.toProto();

            expect(msg.toJson()).to.deep.equal({
                requestToLogin: {
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
            const intent = new LoginRequestIntent({
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
                0x52, 0x5b, 0x0a, 0x11, 0x0a, 0x0f, 0x61, 0x70, 0x70, 0x2e,
                0x67, 0x65, 0x74, 0x63, 0x6f, 0x64, 0x65, 0x2e, 0x63, 0x6f,
                0x6d, 0x22, 0x22, 0x0a, 0x20, 0x90, 0x5c, 0xc7, 0x96, 0xae,
                0x7a, 0x19, 0x98, 0x46, 0x18, 0x36, 0xcd, 0x9f, 0x59, 0x05,
                0x2f, 0x8a, 0x2a, 0x52, 0xcd, 0x53, 0x9b, 0x41, 0x7e, 0x57,
                0x7c, 0x11, 0x82, 0x83, 0xd2, 0xa0, 0x6c, 0x32, 0x22, 0x0a,
                0x20, 0x70, 0xa4, 0xae, 0xb6, 0x8f, 0x76, 0x36, 0x3f, 0x22,
                0x66, 0x81, 0xdf, 0x16, 0x62, 0xbf, 0xc0, 0xf6, 0x42, 0x36,
                0xe9, 0x7a, 0x7a, 0x64, 0x87, 0x46, 0x6a, 0x93, 0x99, 0x54,
                0x5e, 0x7a, 0xfb
            ]);

            expect(actual.toString()).to.equal(expected.toString());
        });
    });

    describe('sign', () => {
        it('should expect a login signer', () => {
            const intent = new LoginRequestIntent({
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
            const intent = new LoginRequestIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                },
                signers: [verifier]
            });

            intent.rendezvousKeypair = rendezvous;

            const res = intent.sign();
            const msg = proto.RequestToLogin.fromBinary(res.signedBytes);

            expect(msg.toJson()).to.deep.equal({
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
                    value: 'NmXm9rvjyt9XlrPYyLYqcIFyhyd1RG2P/yBdhs0dL2ducXpNZD/0lPpINq5rlkxb/HEGVe+hUli74pgmCljGBw=='
                },
            });
        });

        it('should return correct signature bytes', () => {
            const intent = new LoginRequestIntent({
                ...opt,
                login: {
                    domain,
                    verifier: verifier.getPublicKey().toBase58()
                },
                signers: [verifier]
            });

            intent.rendezvousKeypair = rendezvous;

            const res = intent.sign();
            const msg = proto.RequestToLogin.fromBinary(res.signedBytes);
            const actual = msg.toBinary();

            const expected = new Uint8Array([
                0x0a, 0x11, 0x0a, 0x0f, 0x61, 0x70, 0x70, 0x2e, 0x67, 0x65,
                0x74, 0x63, 0x6f, 0x64, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x22,
                0x22, 0x0a, 0x20, 0x90, 0x5c, 0xc7, 0x96, 0xae, 0x7a, 0x19,
                0x98, 0x46, 0x18, 0x36, 0xcd, 0x9f, 0x59, 0x05, 0x2f, 0x8a,
                0x2a, 0x52, 0xcd, 0x53, 0x9b, 0x41, 0x7e, 0x57, 0x7c, 0x11,
                0x82, 0x83, 0xd2, 0xa0, 0x6c, 0x2a, 0x42, 0x0a, 0x40, 0x36,
                0x65, 0xe6, 0xf6, 0xbb, 0xe3, 0xca, 0xdf, 0x57, 0x96, 0xb3,
                0xd8, 0xc8, 0xb6, 0x2a, 0x70, 0x81, 0x72, 0x87, 0x27, 0x75,
                0x44, 0x6d, 0x8f, 0xff, 0x20, 0x5d, 0x86, 0xcd, 0x1d, 0x2f,
                0x67, 0x6e, 0x71, 0x7a, 0x4d, 0x64, 0x3f, 0xf4, 0x94, 0xfa,
                0x48, 0x36, 0xae, 0x6b, 0x96, 0x4c, 0x5b, 0xfc, 0x71, 0x06,
                0x55, 0xef, 0xa1, 0x52, 0x58, 0xbb, 0xe2, 0x98, 0x26, 0x0a,
                0x58, 0xc6, 0x07, 0x32, 0x22, 0x0a, 0x20, 0x70, 0xa4, 0xae,
                0xb6, 0x8f, 0x76, 0x36, 0x3f, 0x22, 0x66, 0x81, 0xdf, 0x16,
                0x62, 0xbf, 0xc0, 0xf6, 0x42, 0x36, 0xe9, 0x7a, 0x7a, 0x64,
                0x87, 0x46, 0x6a, 0x93, 0x99, 0x54, 0x5e, 0x7a, 0xfb
            ]);

            expect(actual.toString()).to.equal(expected.toString());
        });
    });
});