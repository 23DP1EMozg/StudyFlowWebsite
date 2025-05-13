// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/StudyFlowWebsite', // 👈 THIS IS CRITICAL
  plugins: [react()],
})