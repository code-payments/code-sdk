import { App } from 'vue';
import { initConfig, Options } from './config';
import { initRouter } from './router';

export default {
    install: async (app: App, options: Options) => {
        const config = initConfig(options).value;
        const router = initRouter(config.routes);
        app.use(router);
    }
};