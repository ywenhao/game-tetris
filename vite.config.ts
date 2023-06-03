import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { fileURLToPath, URL as _URL } from 'node:url'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new _URL('./src', import.meta.url)),
    },
  },
})
