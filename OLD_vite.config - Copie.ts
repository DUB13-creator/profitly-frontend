import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/sites': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/launch': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/stop': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/status': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/upload': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/analyze': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/results': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/scrape': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
