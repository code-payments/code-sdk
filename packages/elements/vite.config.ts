import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production'; 
let env = {} as { SDK_PATH: string };
if (isProduction) {
  console.warn('Using production environment');
  env.SDK_PATH = 'https://sdk.getcode.com/v1/elements';
} else {
  console.warn('Using dev environment');
  env.SDK_PATH = 'http://localhost:8740/v1/elements';
}

export default defineConfig({
  base: '/',
  plugins: [
    vue({ isProduction }),
    dts({ 
      cleanVueFileName: true,
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    dedupe: ['vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    'global': {},
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ...env,
    },
    'process.browser': true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'code',
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    },
    sourcemap: false,
    minify: true,
  },
  server: {
    port: 8760,
  },
});