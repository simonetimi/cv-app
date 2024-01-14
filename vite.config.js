import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // set folder where it'll be deployed
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [react(), ViteImageOptimizer({})],
});
