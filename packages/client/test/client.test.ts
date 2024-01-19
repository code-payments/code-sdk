import * as proto from "@code-wallet/rpc";
import * as client from "../src/";

import { Client } from "../src/";
import { PublicKey } from "@code-wallet/library";
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

});