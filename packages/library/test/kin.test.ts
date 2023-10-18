import { expect } from 'chai';
import { Kin } from '../src';

describe('Kin and Quarks conversion utilities', () => {

    describe('fromQuarks', () => {

        it('should correctly convert quarks to kin', () => {
            expect(Kin.fromQuarks(100000n).whole).to.equal(1n);
            expect(Kin.fromQuarks(500000n).whole).to.equal(5n);
            expect(Kin.fromQuarks(10000n).whole).to.equal(0n);
            expect(Kin.fromQuarks(0n).whole).to.equal(0n);
        });

        it('should handle edge cases', () => {
            expect(Kin.fromQuarks(99999n).whole).to.equal(0n);
            expect(Kin.fromQuarks(100001n).whole).to.equal(1n);
        });

    });

    describe('toQuarks', () => {

        it('should correctly convert kin to quarks', () => {
            expect(new Kin(1).toQuarks()).to.equal(100000n);
            expect(new Kin(5).toQuarks()).to.equal(500000n);
            expect(new Kin(0).toQuarks()).to.equal(0n);
        });

        it('should handle edge cases', () => {
            expect(new Kin(-1).toQuarks()).to.equal(-100000n);
        });

    });

    describe('fromDecimal', () => {

        it('should correctly convert decimal to kin', () => {
            const kin = Kin.fromDecimal(1.23456);
            expect(kin.toQuarks()).to.equal(123456n);
        });

    });

    describe('toDecimal', () => {

        it('should correctly convert kin to decimal', () => {
            const kin = new Kin(1, 23456);
            expect(kin.toDecimal()).to.equal(1.23456);
        });

    });

    describe('Arithmetic Operations', () => {

        const kin1 = Kin.fromDecimal(1.23456);
        const kin2 = Kin.fromDecimal(2.34567);

        it('should correctly add two Kin instances', () => {
            const sum = kin1.add(kin2);
            expect(sum.toQuarks()).to.equal(358023n);
        });

        it('should correctly subtract two Kin instances', () => {
            const difference = kin1.subtract(kin2);
            expect(difference.toQuarks()).to.equal(-111111n);
        });

        it('should correctly multiply a Kin instance', () => {
            const product = kin1.multiply(2);
            expect(product.toQuarks()).to.equal(246912n);
        });

        it('should correctly divide a Kin instance', () => {
            const quotient = kin1.divide(2);
            expect(quotient.toQuarks()).to.equal(61728n);
        });

    });

});