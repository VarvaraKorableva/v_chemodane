import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: []
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: true
  }
});
