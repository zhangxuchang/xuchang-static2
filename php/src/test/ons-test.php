<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/7/11
 * Time: 12:01
 */

use GuzzleHttp\Client;

require_once(__DIR__ . '/../../../vendor/autoload.php');
require_once(__DIR__ . '/../lib/functions.php');

$coreToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb3JlLm9hc2dhbWVzLmNvbSIsImlhdCI6MTUzMTI4OTUzNywiZXhwIjoxNTMxMzMyNzM3LCJ1aWQiOjAsImFwcGlkIjoyMTIsImRlbGVnYXRlIjoyNDAsInJvbGVzIjpbIlJPTEVfQ09SRV9ERUxFR0FURURfQVBQIl0sImlwIjoiIiwiY2hlY2tzdW0iOiI4NmRlZGZmMzYwNTBlNjQ3IiwicGFyYW1zIjpbXX0.AVQsK9KUG_2FyeW_PIPxP11dRDfI065-iq_L5Lc2Lro';

$job = (count($argv) > 1) ? $argv[1] : '';

switch ($job) {
    case 'send-code':
        test_Sendcode($coreToken);
        break;

    case 'get-status':
        test_getStatus();
        break;

    case 'send-msg':
        test_SendMessage($coreToken);
        break;

    default:
        myecho('Do nothing');
}

function test_getStatus()
{
    $client = new Client();
    $res    = $client->request(
        'GET',
        'https://api-ons.oasgames.com/api/send-sms/status',
        [
            'query'           => [
                'nonce' => '7d5fe8424c2d3d577d76b3ba8d5f8058',

            ],
            'connect_timeout' => 3.14,
        ]
    );

    print_r(
        [
            'status_code' => $res->getStatusCode(),
            'body'        => $res->getBody()->getContents(),
        ]
    );
}

function test_Sendcode($coreToken)
{
    $client = new Client();
    $res    = $client->request(
        'POST',
        'https://api-ons.oasgames.com/api/send-sms/code_async',
        [
            'form_params'     => [
                'tel'                      => '8615801309846',
                'code'                     => 'a3Ts5d',
                'lang'                     => 'cn',
                'oasis-notification-token' => $coreToken,

            ],
            'connect_timeout' => 10,
        ]
    );

    print_r(
        [
            'status_code' => $res->getStatusCode(),
            'body'        => $res->getBody()->getContents(),
        ]
    );

}

function test_SendMessage($coreToken)
{
    $client = new Client();
    $res    = $client->request(
        'POST',
        'https://api-ons.oasgames.com/api/send-sms/send_async',
        [
            'form_params'     => [
                'tel'                      => '8615801309846|8617333658827',
                'message'                  => 'This is a test message of ONS api',
                'oasis-notification-token' => $coreToken,

            ],
            'connect_timeout' => 10,
        ]
    );

    print_r(
        [
            'status_code' => $res->getStatusCode(),
            'body'        => $res->getBody()->getContents(),
        ]
    );

}
