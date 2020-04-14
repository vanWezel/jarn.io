<?php

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['name']) || empty($data['email']) || empty($data['subject']) || empty($data['email'])) {
    throw new Exception('Something went wrong, please try again.');
}

$parts = [
    'from: ' . $data['name'] . '<' . $data['email'] . '>',
    '',
    'message:',
    $data['message']
];

mail('contact@jarn.io', $data['subject'], implode("\n", $parts));

echo 'send!';