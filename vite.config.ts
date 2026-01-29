import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Substitui process.env.API_KEY no código fonte pelo valor da variável de ambiente durante o build.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "")
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          genai: ['@google/genai']
        }
      }
    }
  }
});