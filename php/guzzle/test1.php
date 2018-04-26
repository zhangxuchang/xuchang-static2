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
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/basic/functions.php';

/**
 * @param $url
 *
 * @return mixed|\Psr\Http\Message\ResponseInterface
 */
function makeRequest($url)
{
    if (USE_PROXY == true) {
        $oasProxy = OAS_PROXY;
    }
    else {
        $oasProxy = '';
    }

    // Guzzle request
    $client = new Client();
    $res    = $client->request(
        'GET',
        $url,
        [
            'proxy' => $oasProxy,
            //'proxy' => [
            //    'http'  => 'http://127.0.0.1:8081',
            //    'https' => 'http://127.0.0.1:8081',
            //    'no'    => ['.mit.edu', 'foo.com']
            //],
        ]
    );

    return $res;
}

function doPost($url, $formData, $header)
{
    if (USE_PROXY == true) {
        $oasProxy = OAS_PROXY;
    }
    else {
        $oasProxy = '';
    }

    // Guzzle request
    $client = new Client();
    $res    = $client->request(
        'POST',
        $url,
        [
            'proxy'       => $oasProxy,
            'form_params' => $formData,
            'headers'     => $header,
        ]
    );

    return $res;
}

envDes();

// test: http get reuqest
$url = "http://www.oasgames.com/service/geoip/?ip=206.224.254.17";
$res = makeRequest($url);
myecho("GET request $url");
myecho(
    [
        'status_code' => $res->getStatusCode(),
        'body'        => $res->getBody()->getContents(),
    ]
);

// test: https get reuqest
$url = "https://www.oasgames.com/service/geoip/?ip=206.224.254.17";
$res = makeRequest($url);
myecho("GET request $url");
myecho(
    [
        'status_code' => $res->getStatusCode(),
        'body'        => $res->getBody()->getContents(),
    ]
);

// test: post request
$url      = "https://panel-deploy-center.oasgames.com/req-info";
$formData = [
    'foo' => 'bar',
    'baz' => ['hi', 'there!'],
];

$headers = [
    'User-Agent' => 'testing/1.0',
    'Accept'     => 'application/json-1',
    'X-Foo'      => ['Bar', 'Baz'],
];

$res = doPost($url, $formData, $headers);

myecho("Post request $url");
myecho(
    [
        'status_code' => $res->getStatusCode(),
        'body'        => json_decode($res->getBody()->getContents()),
    ]
);





