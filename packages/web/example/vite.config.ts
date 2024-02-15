import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

let env = {} as { SDK_PATH: string };
if (process.env.NODE_ENV === 'production') {
  console.warn('Using production environment');
  env.SDK_PATH = 'https://sdk.getcode.com/v1/elements';
} else {
  console.warn('Using dev environment');
  env.SDK_PATH = 'http://localhost:8740/v1/elements';
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  root: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
    },
  },
  define: {
    'process.env': env,
    'process.browser': true,
    'global': {}
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
