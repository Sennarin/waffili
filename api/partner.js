const API_URL =
	process.env.AFFILIATES_API_URL || 'https://wgraff.com/api/affiliates/create'

function send(res, status, body) {
	res.statusCode = status
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(body))
}

function firstError(data) {
	const errors = data && data.errors
	if (errors && typeof errors === 'object') {
		const first = Object.values(errors)[0]
		if (first) return String(first)
	}
	return (data && data.message) || 'Could not create the account.'
}

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return send(res, 405, { success: false, message: 'Method not allowed' })
	}

	const apiKey = process.env.AFFILIATES_API_KEY
	if (!apiKey) {
		return send(res, 500, { success: false, message: 'Server is not configured' })
	}

	const { username, email } = req.body || {}
	if (
		typeof username !== 'string' ||
		!username.trim() ||
		typeof email !== 'string' ||
		!/^\S+@\S+\.\S+$/.test(email)
	) {
		return send(res, 400, { success: false, message: 'Invalid username or email' })
	}

	let upstream
	let data = null
	try {
		upstream = await fetch(API_URL, {
			method: 'POST',
			headers: { 'X-Api-Key': apiKey, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: username.trim(),
				email: email.trim(),
				status: 'created',
			}),
		})
		data = await upstream.json().catch(() => null)
	} catch {
		return send(res, 502, { success: false, message: 'Upstream is unreachable' })
	}

	if (!upstream.ok || !data || !data.success || !data.data?.regUrl) {
		const status = upstream.status === 400 ? 400 : 502
		return send(res, status, { success: false, message: firstError(data) })
	}

	// The API returns an http:// registration link; the site is served over https.
	const regUrl = data.data.regUrl.replace(/^http:\/\/wgraff\.com/, 'https://wgraff.com')
	return send(res, 200, { success: true, regUrl })
}
