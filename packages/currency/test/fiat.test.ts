import { expect } from 'chai';
import { CurrencyCode, currencyCodeToIndex, indexToCurrencyCode, isValidCurrency } from '../src';

describe('Currency utilities', () => {

    describe('currencyCodeToIndex', () => {
        
        it('should convert valid currency codes to indices', () => {
            expect(currencyCodeToIndex("kin")).to.equal(0);
            expect(currencyCodeToIndex("usd")).to.equal(140);
            expect(currencyCodeToIndex("eur")).to.equal(43);
        });

        it('should throw an error for invalid currency codes', () => {
            expect(() => currencyCodeToIndex("invalid" as CurrencyCode)).to.throw(Error);
        });

    });

    describe('indexToCurrencyCode', () => {

        it('should convert valid indices to currency codes', () => {
            expect(indexToCurrencyCode(0)).to.equal("kin");
            expect(indexToCurrencyCode(140)).to.equal("usd");
            expect(indexToCurrencyCode(43)).to.equal("eur");
        });

        it('should throw an error for invalid indices', () => {
            expect(() => indexToCurrencyCode(-1)).to.throw(Error);
            expect(() => indexToCurrencyCode(200)).to.throw(Error);  // 200 is out of bounds
        });

    });

    describe('isValidCurrency', () => {

        it('should return true for valid currency codes', () => {
            expect(isValidCurrency("kin")).to.be.true;
            expect(isValidCurrency("usd")).to.be.true;
            expect(isValidCurrency("eur")).to.be.true;
        });

        it('should return false for invalid currency codes', () => {
            expect(isValidCurrency("invalid")).to.be.false;
        });

    });

});