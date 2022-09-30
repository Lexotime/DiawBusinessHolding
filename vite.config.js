import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        metier: resolve(__dirname, 'metier/index.html'),
        offre: resolve(__dirname, 'offre/index.html'),
        objectif: resolve(__dirname, 'objectif/index.html')
      }
    }
  }
})