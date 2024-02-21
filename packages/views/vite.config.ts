import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      crypto: 'crypto-browserify',
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
    },
  },
  define: {
    'global': {},
    'process.env': {},
    'process.browser': true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'code-views',
    },
    rollupOptions: {
      external: [
        "@solana/web3.js",
        '@vueuse/core',
        'vue'
      ],
      output: {
        exports: 'named',
        globals: {
          "@solana/web3.js": "SolanaWeb3",
          '@vueuse/core': 'VueUseCore',
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});