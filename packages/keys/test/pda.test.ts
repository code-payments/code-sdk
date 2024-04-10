import { expect } from 'chai';
import { PublicKey, findProgramAddress, createProgramAddress } from '../src';

describe('Program derived addresses', () => {

    it('returns a program derived address given a program address and no seeds', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('CZ3TbkgUYpDAJVEWpujQhDSgzNTeqbokrJmYa1j4HAZc'),
            seeds: [],
        })).to.deep.equal([
            PublicKey.fromBase58('9tVtkyCGAHSDDBPwz7895aC3p2gJRjpu2v26o35FTUco'), 255
        ]);
    });

    it('returns a program derived address after having tried multiple bump seeds given a program address and no seeds', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('EfTbwNBrSqSuCNBhWUHsBoBdSMWgRU1S47daqRNgW7aK'),
            seeds: [],
        })).to.deep.equal([
            PublicKey.fromBase58('CKWT8KZ5GMzKpVRiAULWKPg1LiHt9U3NdAtbuTErHCTq'),
            251
        ]);
    });

    it('returns a program derived address given a program address and a byte-array seed', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('FD3PDEvpQ9JXq8tv7FpJPyZrCjWkCnAaTju16gFPdpqP'),
            seeds: [new Uint8Array([1, 2, 3])],
        })).to.deep.equal([
            PublicKey.fromBase58('9Tj3hpMWacDiZoBe94sjwJQ72zsUVvEQYsrqyy2CfHky'), 
            255
        ]);
    });

    it('returns a program derived address after having tried multiple bump seeds given a program address and a byte-array seed', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('9HT3iB4oX1aZPH5V8eNUGByKuwhfcKjBQ3x9rfEAuNeF'),
            seeds: [ new Uint8Array([1, 2, 3]) ],
        })).to.deep.equal([
            PublicKey.fromBase58('EeTcRajHcPh74C5D4GqZePac1wYB7Dj9ChTaNHaTH77V'),
            251
        ]);
    });

    it('returns a program derived address given a program address and a string seed', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('EKaNRGA37uiGRyRPMap5EZg9cmbT5mt7KWrGwKwAQ3rK'),
            seeds: [ 'hello' ],
        })).to.deep.equal([
            PublicKey.fromBase58('6V76gtKMCmVVjrx4sxR9uB868HtZbL3piKEmadC7rSgf'),
            255,
        ]);
    });

    it('returns a program derived address after having tried multiple bump seeds given a program address and a string seed', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('9PyoV2rqNtoboSvg2JD7GWhM5RQvHGwgdDvK7MCfpgX1'),
            seeds: [ 'hello' ],
        })).to.deep.equal([
            PublicKey.fromBase58('E6npEurFu1UEbQFh1DsqBvny17XxUK2QPMgxD3Edn3aG'),
            251
        ]);
    });

    it('returns a program derived address given a program address and a UTF-8 string seed', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('A5dcVPLJsE2vbf7hkqqyYkYDK9UjUfNxuwGtWF2m2vEz'),
            seeds: [ '\uD83D\uDE80' ],
        })).to.deep.equal([
            PublicKey.fromBase58('GYpAzW57Ex4Sw3rp4pq95QrjvtsDyqZsMhSZwqz3NMsE'),
            255
        ]);
    });

    it('returns a program derived address after having tried multiple bump seeds given a program address and a UTF-8 string seed', async () => {
        expect(findProgramAddress({
            programAddress: PublicKey.fromBase58('H8gBP21L5ietkHgXcGbgQBCVVEdPUQyuP9Q5MPRLLSJu'),
            seeds: [ '\uD83D\uDE80' ],
        })).to.deep.equal([
            PublicKey.fromBase58('46v3JvPtEPeQmH3euXydEbxYD6yfxeZjWSzkkYvvM5Pp'),
            251
        ]);
    });

    it('returns the same result given a program address and two different seed inputs that concatenate to the same bytes', async () => {
        const a = findProgramAddress({
            programAddress: PublicKey.fromBase58('9PyoV2rqNtoboSvg2JD7GWhM5RQvHGwgdDvK7MCfpgX1'),
            seeds: [ 'butterfly' ],
        });

        const b = findProgramAddress({
            programAddress: PublicKey.fromBase58('9PyoV2rqNtoboSvg2JD7GWhM5RQvHGwgdDvK7MCfpgX1'),
            seeds: [ 'butter', 'fly' ],
        });
        
        expect(a).to.deep.equal(b);
    });

});
