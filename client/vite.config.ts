import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  dotenv.config({ path: '.env.production' })
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    https: isProduction
      ? {
          key: fs.readFileSync(
            path.resolve(__dirname, process.env.VITE_KEY_PATH || '')
          ),
          cert: fs.readFileSync(
            path.resolve(__dirname, process.env.VITE_CERT_PATH || '')
          ),
        }
      : undefined,
  },
})
