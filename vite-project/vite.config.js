import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      UI: '/src/UI',
      assets: '/src/assets',
      utils: '/src/utils',
      modules: '/src/modules',
      store: '/src/store',
      routes: '/src/app/routes',
      styles: '/src/app/styles',
      layout: '/src/app/layout',
      pages: '/src/pages',
    },
  },
});
