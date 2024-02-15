import wasmModule from './kikcode_webassembly.js';

const MAIN_BYTE_COUNT = 35;
const PAYLOAD_BYTE_COUNT = 20;

export interface KikCodeModule {
  _kikcode_encode: (arg1: number, arg2: number, arg3: number) => number;
  _kikcode_decode: (arg1: number, arg2: number, arg3: number) => number;
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  cwrap: (name: string, returnType: string, argTypes: string[]) => (...args: any[]) => any;
  ccall: (name: string, returnType: string, argTypes: string[], args: any[]) => any;
  getValue: (ptr: number, type: string) => number;
  setValue: (ptr: number, value: number, type: string) => void;
  HEAPU8: Uint8Array;
}

const init = (): Promise<KikCodeModule> => {
  return new Promise((resolve, reject) => {
    wasmModule().then((module: KikCodeModule) => {
      resolve(module);
    }).catch((err: Error) => {
      reject(err);
    });
  });
}

const encode = async(data: Uint8Array) : Promise<Uint8Array> => {
  if (data.length !== PAYLOAD_BYTE_COUNT) {
    throw new Error(`Payload must be ${PAYLOAD_BYTE_COUNT} bytes`);
  }

  const vm = await init();
  const encodedOutDataPtr = vm.ccall(
    'kikcode_encode',                 // C function name
    'number',                         // Return type (pointer)
    ['array', 'number'],              // Argument types
    [data, data.length]               // Arguments
  );

  return new Uint8Array(vm.HEAPU8.buffer, encodedOutDataPtr, MAIN_BYTE_COUNT);
}

const decode = async (data: Uint8Array) : Promise<Uint8Array> => {
  if (data.length !== MAIN_BYTE_COUNT) {
    throw new Error(`Payload must be ${MAIN_BYTE_COUNT} bytes`);
  }

  const vm = await init();
  const outputSizePtr = vm._malloc(4); // Allocate memory for output size
  const decodedOutDataPtr = vm.ccall(
    'kikcode_decode',                  // C function name
    'number',                          // Return type (pointer)
    ['array', 'number', 'number'],     // Argument types
    [data, data.length, outputSizePtr] // Arguments
  );

  const outputSize = vm.getValue(outputSizePtr, 'i32');
  return new Uint8Array(vm.HEAPU8.buffer, decodedOutDataPtr, outputSize);
}

export { encode, decode };