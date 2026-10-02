<?php
header('Content-Type: application/json');

function respond($status, $body) {
	http_response_code($status);
	echo json_encode($body);
	exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	respond(405, ['success' => false, 'message' => 'Method not allowed']);
}

function env($name, $default = '') {
	$value = getenv($name);
	if ($value === false || $value === '') $value = $_SERVER[$name] ?? ($_ENV[$name] ?? '');
	return $value !== '' ? $value : $default;
}

$apiKey = env('AFFILIATES_API_KEY');
$apiUrl = env('AFFILIATES_API_URL', 'https://wgraff.com/api/affiliates/create');

if (!$apiKey) {
	respond(500, ['success' => false, 'message' => 'Server is not configured']);
}

$input = json_decode(file_get_contents('php://input'), true);
$username = is_array($input) && isset($input['username']) ? trim((string) $input['username']) : '';
$email = is_array($input) && isset($input['email']) ? trim((string) $input['email']) : '';

if ($username === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
	respond(400, ['success' => false, 'message' => 'Invalid username or email']);
}

$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
	CURLOPT_POST => true,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_TIMEOUT => 20,
	CURLOPT_HTTPHEADER => [
		'X-Api-Key: ' . $apiKey,
		'Content-Type: application/json',
	],
	CURLOPT_POSTFIELDS => json_encode([
		'username' => $username,
		'email' => $email,
		'status' => 'created',
	]),
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
	respond(502, ['success' => false, 'message' => 'Upstream is unreachable']);
}

$data = json_decode($response, true);

if ($httpCode !== 200 || !is_array($data) || empty($data['success']) || empty($data['data']['regUrl'])) {
	$message = 'Could not create the account.';
	if (is_array($data)) {
		if (!empty($data['errors']) && is_array($data['errors'])) {
			$message = (string) reset($data['errors']);
		} elseif (!empty($data['message'])) {
			$message = (string) $data['message'];
		}
	}
	respond($httpCode === 400 ? 400 : 502, ['success' => false, 'message' => $message]);
}

// The API returns an http:// registration link; the site is served over https.
$regUrl = preg_replace('#^http://wgraff\.com#', 'https://wgraff.com', $data['data']['regUrl']);
respond(200, ['success' => true, 'regUrl' => $regUrl]);
