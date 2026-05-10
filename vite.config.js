import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // Absolute imports: import X from '@/components/...'
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Production build output goes to dist/
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split vendor bundle for better caching
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },

  // Dev server
  server: {
    port: 5173,
    open: true,
  },
});
