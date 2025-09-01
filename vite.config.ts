import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { ConfigEnv } from 'vite'

export default defineConfig(({ mode }: ConfigEnv) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    // If you need to access these variables in your tests or other build scripts
    define: {
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
    },
  }
})
