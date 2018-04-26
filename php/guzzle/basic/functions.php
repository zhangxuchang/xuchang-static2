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
function myecho ($msg) {

    if (is_array($msg)) {
        print_r($msg);
    }
    else {
        echo $msg;
        echo "\n";
    }
};
