<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 18/5/2
 * Time: 13:07
 */

$url = "http://www.facebook.com/dialog/oauth?client_id=562265367280905&redirect_uri="
       . urlencode("https://apps.facebook.com/naruto_fr")
       . "&scope=email,user_friends";


echo $url;
echo PHP_EOL;



