<?php
$secret = 'XX.dd4_ert5dySaa--!';

// Encrypting
function encrypt($email, $lang, $package) {
    $enc = "";
    global $iv, $secret;

    $string = $lang . "/" . $email . "=" . $package;
    $enc=mcrypt_cbc (MCRYPT_TripleDES, $secret, $string, MCRYPT_ENCRYPT, '12345678');
    
    return base64_encode(hash('crc32', $enc, false));
}

function holeDemoBedingung($packageId)
{
  global $dbTablePrefix;
  
	  	// Hole DEMO-Bedingung aus Tabelle
  	$sql = "SELECT demo_select
  			  FROM {$dbTablePrefix}packages
  			 WHERE id = $packageId
  			   AND available = -1";
  	
  	error_log("holeDemoBedingung: $sql");
	$result = mysql_query($sql);
	if (!$result) {
	    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
	    exit;
	}
	$row = mysql_fetch_row($result);
	
	return $row[0];	
}