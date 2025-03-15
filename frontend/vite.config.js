import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    host: '0.0.0.0',
  },
  preview: {
    allowedHosts: ['phonebook-app-front.onrender.com'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js',
    include: ['src/components/**/*.test.jsx'],
  },
  build: {
    outDir: '../backend/assets',
    assetsDir: ''
  }
})
