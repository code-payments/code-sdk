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
  base: '/v1/elements/',
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
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,

    rollupOptions: {
      input: {
        'payment-request-button': path.resolve(__dirname, 'payment-request-button', 'index.html'),
        'payment-request-modal-desktop': path.resolve(__dirname, 'payment-request-modal-desktop', 'index.html'),
        'payment-request-modal-mobile': path.resolve(__dirname, 'payment-request-modal-mobile', 'index.html'),
        'login-request-button': path.resolve(__dirname, 'login-request-button', 'index.html'),
        'login-request-modal-desktop': path.resolve(__dirname, 'login-request-modal-desktop', 'index.html'),
        'login-request-modal-mobile': path.resolve(__dirname, 'login-request-modal-mobile', 'index.html'),
      }
    }
  },
  server: {
    port: 8740,
  },
})
