import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['localhost', '80.209.225.39', 'be48-2a02-7b40-50d1-e127-00-1.ngrok-free.app', '10a6-2a02-7b40-50d1-e127-00-1.ngrok-free.app'],

    proxy: {
      // tout ce qui commence par /sites ira vers http://localhost:8000/sites
      '/sites':    { target: 'http://localhost:8000', changeOrigin: true },
      '/scrapers': { target: 'http://localhost:8000', changeOrigin: true },
      '/launch':   { target: 'http://localhost:8000', changeOrigin: true },
      '/stop':     { target: 'http://localhost:8000', changeOrigin: true },
      '/status':   { target: 'http://localhost:8000', changeOrigin: true },
      '/api':      { target: 'http://localhost:8000', changeOrigin: true },
    }
  }
})
