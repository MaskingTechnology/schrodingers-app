
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
    react()
  ],
  server: {
      port: 5174,
      proxy: { '/terrace': 'http://localhost:3000' }
  }
});
