#! /usr/bin/env php

<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/4/13
 * Time: 11:20
 */

use GuzzleHttp\Client;
use GuzzleHttp\TransferStats;

require_once __DIR__ . '/../../vendor/autoload.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/basic/functions.php';

envDes();

// Guzzle request
$client = new Client();
$client->request(
    'GET',
    'http://passport.oasgames.com/index.php?m=getLoginUser',
    [
        'on_stats' => function (TransferStats $stats) {

            // You must check if a response was received before using the
            // response object.
            if ($stats->hasResponse()) {
                print_r($stats->getHandlerStats());
            }
            else {
                // Error data is handler specific. You will need to know what
                // type of error data your handler uses before using this
                // value.
                print_r($stats->getHandlerErrorData());
            }
        }
    ]
);
