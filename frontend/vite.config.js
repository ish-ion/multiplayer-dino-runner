/**
 * TODO: Configure Vite for Phaser game
 * - Development server settings
 * - Build optimization
 * - Asset handling
 */

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  define: {
    global: 'globalThis'
  }
});