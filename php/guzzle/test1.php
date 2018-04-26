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

//define("OAS_PROXY", 'http://127.0.0.1:8081');
define("OAS_PROXY", 'http://internal-elb-oas-ecs-http-proxy-1354046874.us-east-1.elb.amazonaws.com:80');

/**
 * @param $url
 *
 * @return mixed|\Psr\Http\Message\ResponseInterface
 */
function makeRequest($url)
{
    // Guzzle request
    $client = new Client();

    $res = $client->request(
        'GET',
        $url,
        [
            'proxy' => OAS_PROXY,
            //'proxy' => [
            //    'http'  => 'http://127.0.0.1:8081',
            //    'https' => 'http://127.0.0.1:8081',
            //    'no'    => ['.mit.edu', 'foo.com']
            //],
        ]
    );

    return $res;
}


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





