import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import eslintPlugin from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(),
  svgrPlugin(),
  eslintPlugin({
    exclude: ['/virtual:/', 'node_modules/**']
  })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
