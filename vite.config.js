import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: "/StayEasy/",   // for GitHub Pages deployment
  base: "/",       // for GitHub Pages deployment
})
