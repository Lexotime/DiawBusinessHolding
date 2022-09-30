import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'nested/about.html'),
        objectif: resolve(__dirname, 'nested/objectif.html'),
        offre: resolve(__dirname, 'nested/offre.html'),
        metier: resolve(__dirname, 'nested/metier.html')
      }
    }
  }
})