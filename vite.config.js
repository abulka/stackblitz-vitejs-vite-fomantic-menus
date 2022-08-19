import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Had to add this to make routing work
  resolve: {
    // 文件系统路径的别名
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
