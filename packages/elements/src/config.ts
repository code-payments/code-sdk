import { Ref, ref } from "vue";

const ErrConfigNotInitialized = () => new Error("Config not initialized");

export interface Options {
  codeSdk?: string;
}

let config: Ref<Options>;
const initConfig = (opts: Options) => {
  if (opts.codeSdk === undefined) {
    throw new Error("codeSdk path is required");
  }

  config = ref(opts);
}

const useConfig = () => {
  if (!config) {
    throw ErrConfigNotInitialized;
  }

  return { 
    config,

    codeSdk: () => config.value.codeSdk,
  }
}

export {
  initConfig,
  useConfig,
}