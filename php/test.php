<?php

function myPrint($data)
{
    print_r($data);

    echo PHP_EOL;
}

$TAG_PATTERN = "/^(v|V)?(?P<major>[0-9]+)(\\.(?P<minor>[0-9]+))?(\\.(?P<patch>[0-9]+))?(-alpha|-beta)[0-9]+\$/";

$tag  = 'v12.12.222-alpha1';
$tag2 = 'v1.0.0-beta2';

$matchs = [];

myPrint(preg_match($TAG_PATTERN, $tag, $matchs));

myPrint($matchs);

//myPrint(preg_match($TAG_PATTERN, $tag2, $matchs));
//
//myPrint($matchs);
