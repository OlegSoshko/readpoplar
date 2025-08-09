import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  plugins: [
    tailwindcss({
      config: './tailwind.config.js'
    }),
  ],
});