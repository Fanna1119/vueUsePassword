import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue npm starter',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})