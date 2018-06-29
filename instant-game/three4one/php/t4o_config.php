<?php
ini_set('display_errors', '0');
//ini_set('error_reporting', E_ALL);

if ( substr_compare($_SERVER["SERVER_NAME"],'domes-muc.de',-12) == 0 )
{
	if ( strpos($_SERVER['PHP_SELF'], 'fwesz36ccdffg') !== false )
	{
		// Hueber-Daten
		$host = "mysql.webhosting31.1blu.de";
		$user = "s132009_1344626";
		$passwd = "zZhccX";
		$db = "db132009x1344626";
		$defaultPackage = 1;
		$dbTablePrefix = "daw_";
	}
	else
	{
		// OpenSource Daten
		$host = "mysql.webhosting31.1blu.de";
		$user = "s132009_1344852";
		$passwd = "Faf9yM";
		$db = "db132009x1344852";
		$defaultPackage = 2;
		$dbTablePrefix = "daw_";
	}
}
elseif ( substr_compare($_SERVER["SERVER_NAME"],'hueber.de',-9) == 0 )
{
		// OpenSource Daten
		$host = "localhost";
		$user = "dropaword";
		$passwd = "r55Zlk_6";
		$db = "dropaword";
		$defaultPackage = 2;
		$dbTablePrefix = "daw_";
}
else
{
	$host = "localhost";
	$user = "bwbspiel";
	$passwd = "bwbspiel";
	$db = "bwbspiel";
	$defaultPackage = 2;
	$dbTablePrefix = "daw_";
}
//print("HOST: $host, USER: $user<BR>");

$link = mysql_connect($host, $user, $passwd);
if (!$link) {
    die('keine Verbindung möglich: ' . mysql_error());
}
if ( !mysql_select_db($db) )
{
    echo "Kann $db nicht auswählen: " . mysql_error();
    exit;
}

mysql_set_charset('utf8',$link);

// **************************************************
// generate UNIQUE random numbers between min and max
// uses the updated mt_rand() php function
// 'min' = minimum random number
// 'max' = maximum random number
// 'count' = how many numbers in the array
// returns array with random numbers
// error msg if count is greater than max
// **************************************************
function generateUniqueRandoms($min, $max, $count)  {
    if($count > $max)  {  // this prevents an infinite loop
        echo "ERROR: The array count is greater than the random number maximum.<br>\n";
        echo "Therefore, it is impossible to build an array of unique random numbers.<br>\n";
        return;
    }   
    $numArray = array();
    for($i = 0; $i < $count; $i++)  {       
        $numArray[$i] = mt_rand($min,$max);         // set random number
        for($j = 0; $j < $i; $j++)                 // for each number, check for duplicates
        {
            if($numArray[$i] == $numArray[$j]) {
                $numArray[$i] = mt_rand($min,$max);         // if duplicate, generate new random
                $j = -1;                                // go back through and check new number
            }
        }
    }
    return $numArray;
} // end generateUniqueRandoms() ----------------------

