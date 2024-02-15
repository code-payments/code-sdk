import * as errors from './errors';
import { elements } from './elements';
import { initConfig, Options } from './config';

const opt: Options = { 
  codeSdk: process.env.SDK_PATH,
};

initConfig(opt);

export default { elements, errors }
export { elements, errors }