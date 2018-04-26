<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/4/13
 * Time: 11:42
 */

/**
 * @param $msg
 */
function myecho($msg)
{

    if (is_array($msg)) {
        print_r($msg);
    }
    else {
        echo $msg;
        echo "\n\n";
    }
}

;

function envDes()
{
    if (USE_PROXY == true) {
        myecho("start test with proxy switch is on");
        myecho("proxy uri: " . OAS_PROXY);
    }
    else {
        myecho("start test with proxy switch is off");
    }
}
