import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  server: {
    port: 3000, // 指定端口号，默认是3000
    open: true, // 是否自动打开浏览器，默认是 true
    // 更多服务器配置...
    proxy: {
      // 设置代理
      '/api': {
        target: 'http://127.0.0.1:8088', // 代理目标地址，修改为你的服务器地址
        changeOrigin: true, // 是否改变原始主机头为目标URL，默认是 true
        pathRewrite: { '^/api': '' }, // 重写路径，将以/api开头的请求重写为空
        secure: false // 是否验证 SSL 证书，默认是 true
      }
    }
  },
});
