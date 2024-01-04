// Plugins
import vue from '@vitejs/plugin-vue'

// Utilities
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-besa/',
  plugins: [vue()]
})
