import { expect } from 'chai';
import { PublicKey } from '@code-wallet/keys';
import { 
    getCommitmentAddress, 
    getCommitmentTokenAddress, 
    getProofAddress, 
    getSplitterPoolAddress,
    getSplitterPoolTokenAddress,
    getTimelockAddress,
    getTimelockTokenAddress
} from '../src/utils';

const timeAuthority = PublicKey.fromBase58('codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR');
const mint = PublicKey.fromBase58('kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6');

describe('Timelock PDAs', () => {

    it('correctly derives a timelock address', () => {

        const owner = PublicKey.fromBase58('BuAprBZugjXG6QRbRQN8QKF8EzbW5SigkDuyR9KtqN5z');
        const [address, bump] = getTimelockAddress({
            mint,
            timeAuthority,
            owner,
        })

        expect(address.toBase58()).to.equal('7Ema8Z4gAUWegampp2AuX4cvaTRy3VMwJUq8LMJshQTV');
        expect(bump).to.equal(254);

    })

    it('correctly derives an associated timelock token account', () => {

        const timelockAddress = PublicKey.fromBase58('7Ema8Z4gAUWegampp2AuX4cvaTRy3VMwJUq8LMJshQTV');
        const [address, bump] = getTimelockTokenAddress({
            timelock: timelockAddress,
        })

        expect(address.toBase58()).to.equal('3538bYdWoRXUgBbyAyvG3Zemmawh75nmCQEvWc9DfKFR');
        expect(bump).to.equal(255);

    })

})

describe('Splitter PDAs', () => {

    it('correctly derives a splitter pool address', () => {

        const poolAuthority = timeAuthority;
        const poolName = 'codedev-treasury-3';
        const [address, bump] = getSplitterPoolAddress({
            mint,
            poolAuthority,
            poolName,
        })

        expect(address.toBase58()).to.equal('3HR2k4etyHtBgHCAisRQ5mAU1x3GxWSgmm1bHsNzvZKS');
        expect(bump).to.equal(254);

    })

    it('correctly derives an associated splitter token account', () => {

        const pool = PublicKey.fromBase58('3HR2k4etyHtBgHCAisRQ5mAU1x3GxWSgmm1bHsNzvZKS');
        const [address, bump] = getSplitterPoolTokenAddress({
            pool,
        })

        expect(address.toBase58()).to.equal('BF6vGtAGf1WWbgyKQeHpyiieRKM6X3jZm8QJYib7e3XV');
        expect(bump).to.equal(254);

    })

});

describe('Commitment PDAs', () => {

    it('correctly derives a commitment address', () => {

        const pool = PublicKey.fromBase58('3HR2k4etyHtBgHCAisRQ5mAU1x3GxWSgmm1bHsNzvZKS');
        const recentRoot = Buffer.from('a26336ee808c6da0efa8f9977987aca89b61557c2de7090f0e092a500dbdc9b4', 'hex');
        const transcript = Buffer.from('7703412617e79c889e0fade0ddc3ac27ce823d7c82ec4062284c9c82bd36346f', 'hex');
        const destination = PublicKey.fromBase58('A1WsiTaL6fPei2xcqDPiVnRDvRwpCjne3votXZmrQe86');
        const amount = 100000;

        const [address, bump] = getCommitmentAddress({
            pool,
            recentRoot,
            transcript,
            destination,
            amount,
        })

        expect(address.toBase58()).to.equal('4vF8wWhuUSPTmUWPRvNcB5aPNzDvjCYBhyizpG6VFNi6');
        expect(bump).to.equal(247);
    
    })

    it('correctly derives an associated commitment token account', () => {

        const pool = PublicKey.fromBase58('3HR2k4etyHtBgHCAisRQ5mAU1x3GxWSgmm1bHsNzvZKS');
        const commitment = PublicKey.fromBase58('4vF8wWhuUSPTmUWPRvNcB5aPNzDvjCYBhyizpG6VFNi6');

        const [address, bump] = getCommitmentTokenAddress({
            pool,
            commitment,
        })

        expect(address.toBase58()).to.equal('7BXkxmuwH4GGm48gPWMWqHnLYX7NwrtGPUtfHKnhgMmZ');
        expect(bump).to.equal(254);

    })

});

describe('Proof PDAs', () => {

    it('correctly derives a proof address', () => {

        const pool = PublicKey.fromBase58('3HR2k4etyHtBgHCAisRQ5mAU1x3GxWSgmm1bHsNzvZKS');
        const merkleRoot = Buffer.from('e8eb6f7266f0de778923e5cdadf30c3d8a4c11a518c40fc96c65acdc4fd3bb2b', 'hex');
        const commitment = PublicKey.fromBase58('4vF8wWhuUSPTmUWPRvNcB5aPNzDvjCYBhyizpG6VFNi6');

        const [address, bump] = getProofAddress({
            pool,
            merkleRoot,
            commitment,
        })

        expect(address.toBase58()).to.equal('9VNbqqrDVAxCPmXTq1BDWw7b3gjcXcwn9j2hAhsHWdNB');
        expect(bump).to.equal(255);

    });

});