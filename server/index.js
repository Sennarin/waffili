import { createServer } from 'node:http'
import handler from '../api/partner.js'

const port = process.env.PORT || 3001

createServer((req, res) => {
	if (req.url !== '/api/partner') {
		res.statusCode = 404
		return res.end()
	}
	let raw = ''
	req.on('data', chunk => (raw += chunk))
	req.on('end', () => {
		try {
			req.body = raw ? JSON.parse(raw) : {}
		} catch {
			req.body = {}
		}
		handler(req, res)
	})
}).listen(port, () => console.log(`Partner API listening on :${port}`))
