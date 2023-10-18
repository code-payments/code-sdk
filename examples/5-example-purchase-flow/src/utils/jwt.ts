import { jwtVerify } from 'jose';
import { PublicKey } from '@code-wallet/library';
import { createPublicKey } from 'crypto';

export async function verifyToken(token: string, publicKey: string) {
  const publicKeyBuffer = PublicKey.fromBase58(publicKey).toBuffer();

  const publicKeyDER = Buffer.concat([ 
    // these are ASN.1 headers for Ed25519 keys
    Buffer.from('302a300506032b6570032100', 'hex'), 
    publicKeyBuffer,
  ]);

  // convert to PEM format
  const publicKeyPEM = `-----BEGIN PUBLIC KEY-----\n${publicKeyDER.toString('base64')}\n-----END PUBLIC KEY-----\n`;

  // verify the token
  const public_key = createPublicKey({ key: publicKeyPEM, format: 'pem', type: 'spki' });
  const { payload } = await jwtVerify(token, public_key, { algorithms: ['EdDSA'] });

  return payload;
}