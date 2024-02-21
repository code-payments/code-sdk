import { Ref, ref, render } from "vue";
import { RouteRecordRaw } from "vue-router";

const ErrConfigNotInitialized = () => new Error("Config not initialized");

const ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
const ws_path = ws_scheme + '://' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
const self_path = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

export interface Options {
  wsPath: string;
  httpPath: string;
  renderPath: string;
  routes: RouteRecordRaw[];
}

const defaults: Options = {
  wsPath: ws_path,
  httpPath: self_path,
  renderPath: self_path,
  routes: [
    { 
      path: '/', 
      component: { template: '<div class="h-screen flex items-center justify-center text-white">Page Not Found</div>' },
      meta: { bodyClass: [] }
    },
  ]
}

let config: Ref<Options>;
const initConfig = (
  opts: Partial<Options> = {} as Partial<Options>
  ) => {
  config = ref({ ...defaults, ...opts, });

  // If the user didn't provide an wsProxyPath, use the current page's URL
  if (!config.value.wsPath) {
    config.value.wsPath = ws_path;
  }

  // If the user didn't provide a httpProxyPath, use the current page's URL
  if (!config.value.httpPath) {
    config.value.httpPath = self_path;
  }

  // If the user didn't provide a renderPath, use the current page's URL
  if (!config.value.renderPath) {
    config.value.renderPath = self_path;
  }

  // If the user didn't provide any routes, use the default routes
  if (!config.value.routes) {
    config.value.routes = defaults.routes;
  } else {
    // If the user provided routes, add the default routes to the end
    config.value.routes = [...defaults.routes, ...config.value.routes ];
  }
  return config;
}

const useConfig = () => {
  if (!config) {
    throw ErrConfigNotInitialized;
  }

  return { 
    config,

    wsPath: () => config.value.wsPath,
    httpPath: () => config.value.httpPath,
    renderPath: () => config.value.renderPath,
  }
}

export {
  initConfig,
  useConfig,
}