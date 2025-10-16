import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: "/StayEasy/",   // for GitHub Pages deployment
  base: "/MinorProject-luxaryhottels/",       // for GitHub Pages deployment
  server: {
    port: 5175,
    strictPort: true,
  },
  preview: {
    port: 5175,
    strictPort: true,
  },
})
