import base58 from 'bs58';
import { PublicKey } from "@code-wallet/keys";
import { Mnemonic, MnemonicPhrase } from "@code-wallet/mnemonic";

import * as proto from "@code-wallet/rpc";
import * as client from "../src/";

import { Client } from "../src/";
import { expect } from 'chai';

describe('Low level client', () => {
        
    it('test low level getStatus api message', async () => {
        const intentId = PublicKey.fromBase58('9sK9x3MC7yEMzfA5VRRcu2P72gCGGsF1htpeAMXae9bz') 
        const msg = new proto.GetStatusRequest({
            intentId: {
                value: intentId.toBuffer(),
            }
        })

        const api = new Client('https://cash.getcode.com/v1');
        const res = await api.send(proto.MicroPayment, 'getStatus', msg);

        expect(res).to.not.be.undefined;
        expect(res.exists).to.be.true;
        expect(res.codeScanned).to.be.true;
        expect(res.intentSubmitted).to.be.true;
    });

    it('test low level GetTokenAccountInfos api message', async () => {
        // Get the status of a cash link, for example:
        // https://cash.getcode.com/c/#/e=W9LAp6pdX6fSqFWpeENA2W

        const entropy = base58.decode('W9LAp6pdX6fSqFWpeENA2W');
        const phrase = Mnemonic.toMnemonic(entropy);

        expect(phrase).to.not.be.undefined;
        expect(phrase).to.be.equal('ugly bind decline coil faculty roof surge lake judge fix seminar child');

        const keypair = new MnemonicPhrase(phrase).toKeypair();

        // Create a new request message
        const msg = new proto.GetTokenAccountInfosRequest({
            owner: {
                value: keypair.getPublicValue(),
            }
        })

        // Sign the request
        const sig = keypair.sign(msg.toBinary());
        msg.signature = new proto.Common.Signature({
            value: sig,
        });

        // Ask the server for the token account infos
        const api = new Client('https://cash.getcode.com/v1');
        const res = await api.send(proto.Account, 'getTokenAccountInfos', msg);

        // Response should look like this:
        /*
            GetTokenAccountInfosResponse {
                result: 0,
                tokenAccountInfos: {
                    '6VZ5VHtxMhJ4GziU7mGzjPcbwzePaSTRTWzQh39UV3NB': TokenAccountInfo {
                        accountType: 12,
                        index: 0n,
                        balanceSource: 2,
                        balance: 100000n,
                        managementState: 3,
                        blockchainState: 1,
                        mustRotate: false,
                        claimState: 1,
                        address: [SolanaAccountId],
                        owner: [SolanaAccountId],
                        authority: [SolanaAccountId],
                        originalExchangeData: [ExchangeData],
                        mint: [SolanaAccountId]
                    }
                }
            }
        */

        expect(res).to.not.be.undefined;
        expect(res.result).to.be.equal(proto.GetTokenAccountInfosResponse_Result.OK);
    });

});

describe('High level client', () => {

    it('test high level getStatus api message', async () => {
        const res = await client.getStatus({
            intent: '9sK9x3MC7yEMzfA5VRRcu2P72gCGGsF1htpeAMXae9bz',
        });

        expect(res).to.not.be.undefined;
        expect(res.exists).to.be.true;
        expect(res.codeScanned).to.be.true;
        expect(res.intentSubmitted).to.be.true;
    });

    it('test high level create payment intent api message', async () => {
        const res = await client.paymentIntents.create({
            mode: 'payment',
            amount: 100,
            currency: 'usd',
            destination: '9sK9x3MC7yEMzfA5VRRcu2P72gCGGsF1htpeAMXae9bz',
        });

        expect(res).to.not.be.undefined;
        expect(res.clientSecret).to.not.be.undefined;
        expect(res.id).to.not.be.undefined;
    });

    it('test high level register webhook api message', async () => {
        const res = await client.webhook.register({
            intent: 'DXzWn2E6Z96xDY8z5L4ef7dymvFMghUZvzeAaMw2miGX',
            url: 'https://example.com',
        });

        expect(res).to.not.be.undefined;
        expect(res.success).to.be.false;
        expect(res.message).to.be.equal('request_not_found');
    });

});