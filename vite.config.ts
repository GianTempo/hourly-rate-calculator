import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://giantempo.github.io/hourly-rate-calculator",
	plugins: [react()],
})
