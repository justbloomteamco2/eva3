import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/eva3/', // Replace with your actual GitHub repository name
  plugins: [react()],
})
