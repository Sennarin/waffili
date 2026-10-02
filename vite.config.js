import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
export default defineConfig({
	// '/' for a normal host; the GitHub Pages workflow sets VITE_BASE=/waffili/
	base: process.env.VITE_BASE || '/',
	plugins: [react(), svgr()],
})
