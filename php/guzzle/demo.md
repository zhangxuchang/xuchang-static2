```code1
$response = $client->send($request, [
              'timeout'  => 30,
              'curl'  => [
                  CURLOPT_PROXY => '*.*.*.*',
                  CURLOPT_PROXYPORT => *,
                  CURLOPT_PROXYUSERPWD => '*:*',
             ],
         ]);
```

```code2
$client = new GuzzleHttp\Client();

$res = $client->request('GET', 'https://whatismyip.com/ip.php', [
'debug' => true,
'proxy' => [
        'http' => 'http://username:password@199.220.220.105:2662'
    ]
]);

echo $res->getStatusCode().PHP_EOL;
echo $res->getBody().PHP_EOL;
```
