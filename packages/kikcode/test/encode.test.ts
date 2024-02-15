
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

});