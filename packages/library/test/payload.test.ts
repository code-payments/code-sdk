import { expect } from 'chai';
import { CodePayload, CodeKind, CurrencyCode, Kin } from '../src';
import { ErrInvalidCurrency, ErrInvalidSize } from '../src/errors';

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

    it('should create new payload from parameters', () => {
        const kind = CodeKind.Cash;
        const amount = BigInt(100);
        const payload = new CodePayload(kind, amount, nonce);
        
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
        const payload = new CodePayload(kind, amount, nonce);
        
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

        const payload = new CodePayload(kind, amount, nonce, currency);

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

        expect(() => new CodePayload(kind, amount, nonce, currency)).to.throw(ErrInvalidCurrency().message);
    });

    it('should match sample data when encoding Kin (cash)', () => {
        const amount = kinAmount.toQuarks();
        const payload = new CodePayload(CodeKind.Cash, amount, nonce);

        const encoded = payload.toBinary();
        expect(encoded.toString()).to.eql(sampleKin.toString());
    });

    it('should match sample data when encoding Kin (request)', () => {
        const amount = BigInt(kinAmount.toDecimal() * 100);
        const payload = new CodePayload(CodeKind.RequestPayment, amount, nonce, 'kin');

        const encoded = payload.toBinary();
        expect(encoded.toString()).to.eql(sampleKinAsFiat.toString());
    });

    it('should match sample data when encoding Fiat', () => {
        const amount = BigInt(fiatAmount);
        const payload = new CodePayload(CodeKind.RequestPayment, amount, nonce, 'usd');

        const encoded = payload.toBinary();
        expect(encoded.toString()).to.eql(sampleFiat.toString());
    });

});