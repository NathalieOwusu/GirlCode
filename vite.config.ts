import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  root: 'client',
  server: {
  port:5173,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  css: {
    postcss: {
    },
  },
});
