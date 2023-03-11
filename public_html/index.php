<?php

// docker.for.mac.host.internal

$greeting = file_get_contents('http://docker.host.internal:3000/hello');

echo $greeting;
