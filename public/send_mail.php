<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'No data received']);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$labName = $data['labName'] ?? '';
$type = $data['type'] ?? 'Inquiry';
$labStatus = $data['labStatus'] ?? '';
$launchTimeline = $data['launchTimeline'] ?? '';
$city = $data['city'] ?? '';
$sampleLoad = $data['sampleLoad'] ?? '';

$apiKey = 're_P7a1Fump_75sxZqQpB5KmbpYS52Djpw23';

$ch = curl_init('https://api.resend.com/emails');

// Construct email body based on status
$detailsHtml = '';
if ($labStatus === 'New Lab') {
    $detailsHtml = "<p><strong>Status:</strong> Planning New Lab</p>
                    <p><strong>Launch Timeline:</strong> $launchTimeline</p>";
} elseif ($labStatus === 'Existing Lab') {
    $detailsHtml = "<p><strong>Status:</strong> Existing Lab</p>
                    <p><strong>Lab Name:</strong> $labName</p>
                    <p><strong>City:</strong> $city</p>
                    <p><strong>Sample Load:</strong> $sampleLoad</p>";
} else {
    // Fallback if status not selected or just 'contact'
    $detailsHtml = "<p><strong>Lab Name:</strong> $labName</p>";
}

$payload = json_encode([
    'from' => 'leads@bestpathologylab.in',
    'to' => ['anprohealthtech@gmail.com'],
    'subject' => 'New LIMS Lead: ' . $name,
    'html' => "
        <h2>New Lead Generated</h2>
        <p><strong>Source:</strong> $type</p>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Email:</strong> $email</p>
        <hr>
        <h3>Lab Details</h3>
        $detailsHtml
    "
]);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to send email', 'details' => $response]);
}
?>