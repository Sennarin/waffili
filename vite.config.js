import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// The app is a single page, so /privacy_policy etc. don't exist on disk and
// would 404 on a plain static host. Write a copy of index.html into each
// route's folder so those URLs are real files and need no server rewrite.
const STATIC_ROUTES = ['privacy_policy', 'terms_and_conditions']

function staticRoutes() {
	let outDir
	return {
		name: 'static-route-pages',
		apply: 'build',
		configResolved(config) {
			outDir = path.resolve(config.root, config.build.outDir)
		},
		closeBundle() {
			const html = fs.readFileSync(path.join(outDir, 'index.html'))
			for (const route of STATIC_ROUTES) {
				const dir = path.join(outDir, route)
				fs.mkdirSync(dir, { recursive: true })
				fs.writeFileSync(path.join(dir, 'index.html'), html)
			}
		},
	}
}

export default defineConfig({
	// '/' for a normal host; the GitHub Pages workflow sets VITE_BASE=/waffili/
	base: process.env.VITE_BASE || '/',
	plugins: [react(), svgr(), staticRoutes()],
})
