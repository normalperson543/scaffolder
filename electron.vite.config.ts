import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const resolveOptions = {
  alias: {
    '@renderer': resolve('src/renderer/src'),
    '@': resolve('src/renderer/src')
  }
}
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: resolveOptions
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: resolveOptions
  },
  renderer: {
    resolve: resolveOptions,
    plugins: [react(), tailwindcss()],
  }
})
