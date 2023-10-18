import { expect } from 'chai';
import { IdempotencyKey, ErrInvalidSize } from '../src';
import bs58 from 'bs58';

describe('IdempotencyKey', () => {
    it('should create new idempotency key from Uint8Array of correct size', () => {
        const key = new IdempotencyKey();
        expect(key.value).to.have.length(11);
    });

    it('should throw ErrInvalidSize for Uint8Array of incorrect size', () => {
        const data = new Uint8Array(10); // Incorrect size
        expect(() => new IdempotencyKey(data)).to.throw(ErrInvalidSize().message);
    });

    it('should create new idempotency key from clientSecret', () => {
        const data = [0,1,2,3,4,5,6,7,8,9,10];
        const clientSecret = bs58.encode(data);
        const key = IdempotencyKey.fromClientSecret(clientSecret);
        expect(key.value).to.have.length(11);
        expect(key.value.toString()).to.equal(bs58.decode(clientSecret).toString());
    });

    it('should create new idempotency key from string', () => {
        const str = 'test_string';
        const key = IdempotencyKey.fromSeed(str);
        expect(key.value).to.have.length(11);

        const array = new Uint8Array([
            0x4b, 0x64, 0x1e, 0x9a, 0x92, 
            0x3d, 0x1e, 0xa5, 0x7e, 0x18, 
            0xfe
        ]);
        expect(key.value.toString()).to.equal(new Uint8Array(array).toString());
    });

});