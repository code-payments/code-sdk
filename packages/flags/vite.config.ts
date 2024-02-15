import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'flags',
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        exports: 'named',
      },
    },
    sourcemap: false,
    minify: true,
  },
});