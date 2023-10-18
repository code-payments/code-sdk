import { ElementOptions } from "./options";
import { Buffer } from "buffer";

/**
 * Converts a binary string to a base64 encoded string.
 * Works universally for both browser and Node.js environments.
 *
 * @param str - The binary string to encode.
 * @returns The base64 encoded string.
 */
function universalBtoa(str: string): string {
  if (typeof btoa === 'function') {
    return btoa(str);
  }
  return Buffer.from(str, 'binary').toString('base64');
}

/**
 * Decodes a base64 encoded string to a binary string.
 * Works universally for both browser and Node.js environments.
 *
 * @param str - The base64 encoded string to decode.
 * @returns The decoded binary string.
 */
function universalAtob(str: string): string {
  if (typeof atob === 'function') {
    return atob(str);
  }
  return Buffer.from(str, 'base64').toString('binary');
}

/**
 * Encodes the given intent into a string using base64 encoding
 * and URL encoding.
 *
 * @param intent - The intent to encode. If not provided, an empty object is used.
 * @returns The encoded intent string.
 */
function encode(intent: ElementOptions | undefined): string {
  return encodeURIComponent(universalBtoa(JSON.stringify(intent ?? {})));
}

/**
 * Decodes the given encoded intent string back into its original form.
 *
 * @param intent - The encoded intent string to decode.
 * @returns The decoded intent.
 */
function decode<T extends ElementOptions>(intent: string): T {
  return JSON.parse(universalAtob(decodeURIComponent(intent)));
}

export {
  encode,
  decode,
};