import { expect } from 'chai';

import { PublicKey } from '../src';

describe('PublicKey', function () {
    it('fromBase58', () => {
        const base58Key = PublicKey.fromBase58(
            'CiDwVBFgWV9E5MvXWoLgnEgn2hK7rJikbvfWavzAQz3',
        );
        const array = new Uint8Array([
            3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
        ]);

        expect(base58Key.toBuffer().equals(array)).to.be.true;
    });

    it('toBase58', () => {
        const key = PublicKey.fromBase58('CiDwVBFgWV9E5MvXWoLgnEgn2hK7rJikbvfWavzAQz3');
        expect(key.toBase58()).to.eq('CiDwVBFgWV9E5MvXWoLgnEgn2hK7rJikbvfWavzAQz3');

        const key2 = PublicKey.fromBase58('11111111111111111111111111111111');
        expect(key2.toBase58()).to.eq('11111111111111111111111111111111');
    });

    it('toBuffer', () => {
        const key = PublicKey.fromBase58('CiDwVBFgWV9E5MvXWoLgnEgn2hK7rJikbvfWavzAQz3');
        expect(key.toBuffer()).to.have.length(32);
        expect(key.toBase58()).to.eq('CiDwVBFgWV9E5MvXWoLgnEgn2hK7rJikbvfWavzAQz3');

        const key2 = PublicKey.fromBase58('11111111111111111111111111111111');
        expect(key2.toBuffer()).to.have.length(32);
        expect(key2.toBase58()).to.eq('11111111111111111111111111111111');
    });
});