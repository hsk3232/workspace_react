import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/kobis': {
        target: 'http://kobis.or.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kobis/, ''),
      },
    },
  },
})
