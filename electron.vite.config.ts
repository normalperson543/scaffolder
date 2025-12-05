import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const buildOptions = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'src/renderer/index.html'),
      create: resolve(__dirname, 'src/renderer/src/create/index.html')
    }
  }
}
const resolveOptions = {
  alias: {
    '@renderer': resolve('src/renderer/src'),
    '@': resolve('src/renderer/src')
  }
}
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: buildOptions,
    resolve: resolveOptions
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: buildOptions,
    resolve: resolveOptions
  },
  renderer: {
    resolve: resolveOptions,
    plugins: [react(), tailwindcss()],
    build: buildOptions
  }
})
