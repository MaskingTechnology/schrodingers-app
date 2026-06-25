
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './app',
  publicDir: 'public',
  build: {
    outDir: '../../../build/bar/app',
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
      port: 5175,
      proxy: { '/bar': 'http://localhost:3000' }
  }
});
