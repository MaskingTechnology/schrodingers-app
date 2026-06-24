
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jitar, { type JitarConfig } from '@jitar/plugin-vite';

const jitarConfig: JitarConfig = {
  projectRoot: '../../../',
  sourceRoot: '../../',
  jitarUrl: 'http://localhost:3000',
  segments: [],
  middleware: []
};

export default defineConfig({
  root: './app',
  publicDir: 'public',
  build: {
    outDir: '../../../build/terrace/app',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
    tsconfigPaths: true
  },
  plugins: [
    react(),
    jitar(jitarConfig)
  ],
  server: {
      port: 5174
  }
});
