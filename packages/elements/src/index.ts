import { Keypair, PublicKey } from '@code-wallet/library';
import { elements } from './types';
import { initConfig, Options } from './config';

const opt: Options = { 
  codeSdk: process.env.SDK_PATH,
};

initConfig(opt);

export default { elements, Keypair, PublicKey }
export * from './types';