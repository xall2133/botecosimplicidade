
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Injeta apenas a API_KEY para o código do cliente
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
