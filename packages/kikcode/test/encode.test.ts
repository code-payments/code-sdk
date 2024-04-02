
import { expect } from 'chai';
import { encode, decode } from '../src/kikcode-encoding';

describe('payload encoding', () => {

  it('should encode and decode a payload', async () => {
    const key = new Uint8Array([
      0x6D, 0x70, 0x72, 0x00, 0x01,
      0x00, 0x00, 0x00, 0x40, 0x71,
      0xD8, 0x9E, 0x81, 0x34, 0x63,
      0x06, 0xA0, 0x35, 0xA6, 0x83,
    ]);

    const encoded = await encode(key);
    const decoded = await decode(encoded);

    expect(key).to.deep.equal(decoded);
  });

  it('should encode and decode a tip payload (no dot)', async () => {
    const key = new Uint8Array([
      0x05, 0x00, 0x00, 0x00, 0x00,
      0x67, 0x65, 0x74, 0x63, 0x6f,
      0x64, 0x65, 0x2e, 0x34, 0x56,
      0x71, 0x2f, 0x72, 0x2b, 0x58,
    ]);

    const encoded = await encode(key);
    const decoded = await decode(encoded);

    expect(key).to.deep.equal(decoded);
  });

  it('should encode and decode a tip payload (with dot)', async () => {
    const key = new Uint8Array([
      0x05, 0x00, 0x00, 0x00, 0x00,
      0x62, 0x6f, 0x62, 0x5f, 0x62,
      0x65, 0x6e, 0x6e, 0x69, 0x6e,
      0x67, 0x74, 0x6f, 0x6e, 0x2e,
    ]);

    const encoded = await encode(key);
    const decoded = await decode(encoded);

    expect(key).to.deep.equal(decoded);
  });
});