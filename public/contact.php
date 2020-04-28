<?php

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['name']) || empty($data['email']) || empty($data['subject']) || empty($data['email'])) {
    throw new Exception('Something went wrong, please try again.');
}

$parts = [
    'from: ' . $data['name'] . '<' . $data['email'] . '>',
    'subject: ' . $data['subject'],
    '',
    'message:',
    $data['message']
];

$message = implode("\n", $parts);

try {
    mail('contact@jarn.io', $data['subject'], $message);
} catch (Exception $e) {

}

try {
    $config = parse_ini_file('../config/config.ini');
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => 'https://api.telegram.org/bot' . $config['key'] . '/sendMessage',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => ['chat_id' => $config['id'], 'text' => $message],
    ]);

    curl_exec($curl);

    curl_close($curl);
} catch (Exception $e) {
    
}

echo 'send!';