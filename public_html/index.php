<?php

$greeting = file_get_contents('http://host.docker.internal:5678/hello');

echo $greeting;
