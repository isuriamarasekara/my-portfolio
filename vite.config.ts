import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove the entire server.headers section
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Add this instead
  }
})