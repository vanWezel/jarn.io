<?php

$data = json_decode(file_get_contents('php://input'), true);

$parts = [
    'from: ' . $data['name'] . '<' . $data['email'] . '>',
    '',
    'message:',
    $data['message']
];

mail('mail@jarn.io', $data['subject'], implode("\n", $parts));

echo 'send!';