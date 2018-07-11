<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/7/11
 * Time: 12:07
 */

/**
 * @param $data
 */
function myecho($data)
{
    if (is_array($data)) {
        print_r($data);
    }
    else {
        echo $data . PHP_EOL;
    }

}
