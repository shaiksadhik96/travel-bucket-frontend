// vite.config.ts or vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-router', 'framer-motion'],
  },
  build: {
    rollupOptions: {
      external: ['react-router', 'framer-motion'],
    },
  },
});
