// Resolves a public/-relative path against Vite's configured base path
// (e.g. '/waffili/' when deployed to GitHub Pages), so hardcoded image
// references still work under a sub-path deployment.
export function asset(path) {
	return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
