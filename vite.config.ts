import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
    proxy: {
      '/api': {
        target: 'ws://localhost:4002/api/',
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')

        // target: 'http://localhost:4002/api/test',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [react(), tsconfigPaths()]
})
