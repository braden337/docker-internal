<?php

$url = getenv('GREETING_API_URL');

if ($url !== false) {
    $greeting = file_get_contents($url);
    echo $greeting;
} else {
    echo 'unable to load greeting';
}
