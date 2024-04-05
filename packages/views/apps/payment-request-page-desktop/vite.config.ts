import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { config } from 'dotenv';

config();

let env = {} as { WS_PATH: string, HTTP_PATH: string };
if (process.env.NODE_ENV === 'production') {
  console.warn('Using production environment');
  env = {
    WS_PATH: 'wss://cash.getcode.com',
    HTTP_PATH: 'https://cash.getcode.com',
  }
} else {
  console.warn('Using dev environment');
  env = {
    WS_PATH: 'ws://localhost:3000',
    HTTP_PATH: 'http://localhost:3000',
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/v1/elements/payment-request-modal-desktop/',
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
  server: {
    port: 8790,
  },
})
