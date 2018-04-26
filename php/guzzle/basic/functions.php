<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/4/13
 * Time: 11:42
 */

/**
 * @param     $msg
 * @param int $lineHeight
 */
function myecho($msg, $lineHeight = 0)
{

    if (is_array($msg)) {
        print_r($msg);
        echo PHP_EOL;
    }
    else {
        echo $msg;
        echo "\n";
    }

    for ($i = 0; $i < $lineHeight; $i++) {
        echo PHP_EOL;
    }
}

;

function envDes()
{
    if (USE_PROXY == true) {
        myecho("start test with proxy switch is on");
        myecho("proxy uri: " . OAS_PROXY, 1);
    }
    else {
        myecho("start test with proxy switch is off", 1);
    }
}
