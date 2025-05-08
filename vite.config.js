import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: 'index.html',
    },
  },
  plugins: [react(), tailwindcss()],
});
