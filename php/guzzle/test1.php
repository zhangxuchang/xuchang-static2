#! /usr/bin/env php

<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/4/13
 * Time: 11:20
 */

use GuzzleHttp\Client;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/basic/functions.php';

// Guzzle request
$client = new Client();
$res    = $client->request(
    'GET',
    'http://www.oasgames.com/service/geoip/?ip=206.224.254.17',
    [
        //'proxy' => 'http://127.0.0.1:8081',
        'proxy' => [
            'http'  => 'http://127.0.0.1:8081',
            'https' => 'http://127.0.0.1:8081',
            'no'    => ['.mit.edu', 'foo.com']
        ],
    ]
);

myecho(
    [
        'status_code' => $res->getStatusCode(),
        'body'        => $res->getBody()->getContents(),
    ]
);





