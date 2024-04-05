import { expect } from 'chai';
import { CurrencyCode, Kin, ErrInvalidCurrency } from '@code-wallet/currency';
import { CodePayload, CodeKind } from '../src';
import { ErrInvalidSize, ErrInvalidValue } from '../src/errors';

describe('CodePayload', () => {

    const nonce = new Uint8Array([
        0x01, 0x02, 0x03, 0x04, 0x05, 
        0x06, 0x07, 0x08, 0x09, 0x10, 
        0x11
    ])

    const fiatAmount = 2_814_749_767_10911;
    const kinAmount = Kin.fromQuarks(5_000_000n);

    const sampleKin  = new Uint8Array([
        0x00, 0x40, 0x4B, 0x4C, 0x00, 
        0x00, 0x00, 0x00, 0x00, 0x01, 
        0x02, 0x03, 0x04, 0x05, 0x06, 
        0x07, 0x08, 0x09, 0x10, 0x11
    ])

    const sampleKinAsFiat = new Uint8Array([
        0x02, 0x00, 0x88, 0x13, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x01,
        0x02, 0x03, 0x04, 0x05, 0x06,
        0x07, 0x08, 0x09, 0x10, 0x11
    ])

    const sampleFiat = new Uint8Array([
        0x02, 0x8c, 0xFF, 0x00, 0x00, 
        0x00, 0x00, 0x00, 0x01, 0x01, 
        0x02, 0x03, 0x04, 0x05, 0x06, 
        0x07, 0x08, 0x09, 0x10, 0x11
    ])

    const sampleTip = new Uint8Array([
        0x05, 0x00, 0x00, 0x00, 0x00,
        0x67, 0x65, 0x74, 0x63, 0x6f,
        0x64, 0x65, 0x2e, 0x34, 0x56,
        0x71, 0x2f, 0x72, 0x2b, 0x58,
    ]);

    const sampleTipDot = new Uint8Array([
        0x05, 0x00, 0x00, 0x00, 0x00,
        0x62, 0x6f, 0x62, 0x5f, 0x62,
        0x65, 0x6e, 0x6e, 0x69, 0x6e,
        0x67, 0x74, 0x6f, 0x6e, 0x2e,
    ]);


    it('should create new payload from parameters', () => {
        const kind = CodeKind.Cash;
        const amount = BigInt(100);
        const payload = new CodePayload({kind, amount, nonce});
        
        expect(payload.kind).to.equal(kind);
        expect(payload.amount).to.equal(amount);
        expect(payload.nonce).to.eql(nonce);
    });

    it('should throw ErrInvalidSize if the binary data is of incorrect size', () => {
        const data = new Uint8Array(19); // Incorrect size
        expect(() => CodePayload.fromData(data)).to.throw(ErrInvalidSize().message);
    });

    it('should serialize and deserialize correctly for Cash and GiftCard', () => {
        const kind = CodeKind.Cash;
        const amount = BigInt(100);
        const payload = new CodePayload({kind, amount, nonce});
        
        const serialized = payload.toBinary();
        const deserialized = CodePayload.fromData(serialized);

        expect(deserialized.kind).to.equal(kind);
        expect(deserialized.amount).to.equal(amount);
        expect(deserialized.nonce).to.eql(nonce);
    });

    it('should serialize and deserialize correctly for RequestPayment', () => {
        const kind = CodeKind.RequestPayment;
        const amount = BigInt(100);
        const currency = 'usd';

        const payload = new CodePayload({kind, amount, nonce, currency});

        const serialized = payload.toBinary();
        const deserialized = CodePayload.fromData(serialized);

        expect(deserialized.kind).to.equal(kind);
        expect(deserialized.amount).to.equal(amount);
        expect(deserialized.nonce).to.eql(nonce);
        expect(deserialized.currency).to.equal(currency);
    });

    it('should throw ErrInvalidCurrency if the currency is invalid', () => {
        const kind = CodeKind.RequestPayment;
        const amount = BigInt(100);
        const currency = 'INVALID' as CurrencyCode; // Invalid currency

        expect(() => new CodePayload({kind, amount, nonce, currency})).to.throw(ErrInvalidCurrency().message);
    });

    it('should match sample data when encoding Kin (cash)', () => {
        const amount = kinAmount.toQuarks();
        const payload = new CodePayload({kind: CodeKind.Cash, amount, nonce});

        const encoded = payload.toBinary();
        expect(encoded.toString()).to.eql(sampleKin.toString());
    });

    it('should match sample data when encoding Kin (request)', () => {
        const amount = BigInt(kinAmount.toDecimal() * 100);
        const payload = new CodePayload({kind: CodeKind.RequestPayment, amount, nonce, currency: 'kin'});

        const encoded = payload.toBinary();
        expect(encoded.toString()).to.eql(sampleKinAsFiat.toString());
    });

    it('should match sample data when encoding Fiat', () => {
        const amount = BigInt(fiatAmount);
        const payload = new CodePayload({kind: CodeKind.RequestPayment, amount, nonce, currency: 'usd'});

        const encoded = payload.toBinary();
        expect(encoded.toString()).to.eql(sampleFiat.toString());
    });

    it('should throw ErrInvalidCurrency for RequestPayment without currency', () => {
        const kind = CodeKind.RequestPayment;
        const amount = BigInt(100);

        const payload = new CodePayload({ kind, amount, nonce });
        expect(() => payload.validate()).to.throw(ErrInvalidCurrency().message);
    });

    it('should throw ErrInvalidValue for RequestPayment without amount', () => {
        const kind = CodeKind.RequestPayment;
        const currency = 'usd';

        const payload = new CodePayload({ kind, nonce, currency });
        expect(() => payload.validate()).to.throw(ErrInvalidValue().message);
    });

    it('should throw ErrInvalidValue for GiftCard without amount', () => {
        const kind = CodeKind.GiftCard;

        const payload = new CodePayload({ kind, nonce });
        expect(() => payload.validate()).to.throw(ErrInvalidValue().message);
    });

    it('should throw ErrInvalidValue for Cash without amount', () => {
        const kind = CodeKind.Cash;

        const payload = new CodePayload({ kind, nonce });
        expect(() => payload.validate()).to.throw(ErrInvalidValue().message);
    });

    it('should create new payload with RequestLogin kind', () => {
        const kind = CodeKind.RequestLogin;
        const payload = new CodePayload({ kind, nonce });
        
        expect(payload.kind).to.equal(kind);
        expect(payload.nonce).to.eql(nonce);
        expect(payload.amount).to.be.undefined;
        expect(payload.currency).to.be.undefined;
    });

    it('should serialize and deserialize correctly for RequestLogin', () => {
        const kind = CodeKind.RequestLogin;
        const payload = new CodePayload({ kind, nonce });
        
        const serialized = payload.toBinary();
        const deserialized = CodePayload.fromData(serialized);

        expect(deserialized.kind).to.equal(kind);
        expect(deserialized.nonce).to.eql(nonce);
        expect(deserialized.amount).to.be.undefined;
        expect(deserialized.currency).to.be.undefined;
    });

    it('should generate binary data of correct length for RequestLogin', () => {
        const payload = new CodePayload({ kind: CodeKind.RequestLogin, nonce });
        const binaryData = payload.toBinary();

        expect(binaryData.length).to.equal(CodePayload.MAX_LENGTH);
    });

    it('should encode standard username', () => {
        
        const payload = new CodePayload({
            kind: CodeKind.Tip,
            username: "getcode"
        });
        const encoded = payload.toBinary();

        expect(encoded.toString()).to.eql(sampleTip.toString());
    });

    it('should encode single pad username', () => {
        const payload = new CodePayload({
            kind: CodeKind.Tip,
            username: "bob_bennington"
        });
        const encoded = payload.toBinary();

        expect(encoded.toString()).to.eql(sampleTipDot.toString());
    });

    it('should throw when username is too long', () => {
        try {
            new CodePayload({
                kind: CodeKind.Tip,
                username: "bob_benningtons"
            });
        }
        catch (e) {
            expect(e.message).to.equal(ErrInvalidValue().message);
        }
    });

    it('should decode username', () => {
        const payload = CodePayload.fromData(sampleTip);

        expect(payload.kind).to.equal(CodeKind.Tip);
        expect(payload.username).to.equal("getcode");
        expect(payload.nonce).to.eql(new Uint8Array(11));
    });
});