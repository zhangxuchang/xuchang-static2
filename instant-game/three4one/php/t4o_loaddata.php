<?php
require_once('t4o_config.php');
require_once('t4o_createkey.php');

// Maximale Anzahl von Daten pro Upload
$maxupload = 50;

// $thema = $_REQUEST['thema'];
$thema = 'MasseGewichte';

function getPlayData($sql)
{
  global $maxupload, $dbTablePrefix;
  
  error_log("getPlayData: $sql");
  $result = mysql_query($sql);
  //echo "SQL: $sql<BR>";
  if ($result) 
  {
    while( $row = mysql_fetch_assoc($result) )
    {
    	$row['lemma_' . $row['lang']] = $row['lemma'];
    	unset($row['lang']);
    	unset($row['lemma']);
    	$data[$row['id']] = array_merge((array)$data[$row['id']],$row);
    }
    //print("<PRE>");print_r($data);print("</PRE>");
    
    if ( count($data) > $maxupload )
    {
    	$randIdx = array_rand($data, $maxupload);
    //	print("<PRE>RANDIDX: ");print_r($randIdx);print("</PRE>");
    	
//    	$randIdx = generateUniqueRandoms(0, count($data)-1, 100);
    	$data = array_intersect_key($data, array_flip($randIdx));
    }
    $resArr["data"] = array_values($data);
/*
    $col_sql="SHOW COLUMNS FROM {$dbTablePrefix}elemente";
    
    $result = mysql_query($col_sql);
    if ($result) 
    {    	
      while( $row = mysql_fetch_assoc($result) )
      {
      	$cols[] = $row["Field"];
      }
      $resArr["cols"] = $cols;
*/
      $resArr["success"] = true;
      $resArr['errorMsg'] = "";
/*      
    } 
    else 
    {
      echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
      $resArr["success"] = false;
      $resArr['errorMsg'] = "Internal database error(2) !";
    }
*/
  }
  else {
      echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error() . "<BR>SQL: $sql";
      $resArr["success"] = false;
      $resArr['errorMsg'] = "Internal database error(2) !";
  }
  
  return $resArr;
}

  error_log("REQUEST: " . print_r($_REQUEST, true));

function getDataByLanguage()
{
  global $dbTablePrefix;
  
  $email = $_REQUEST['email'];
  $code = $_REQUEST['code'];
  $lang = ( !empty($_REQUEST['lang'])  ? $_REQUEST['lang'] : $defaultLang);

  if ( empty($code) )
  {
	  // $thema = $_REQUEST['thema'];
	  
  	$thema = 'MasseGewichte';
	$sql = "SELECT de.*, del.lang, del.lemma , del.soundexists
			FROM `{$dbTablePrefix}elemente` de LEFT JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id 
			WHERE thema = '" . mysql_real_escape_string($thema) . "'";
    $resArr = getPlayData($sql);
  }
  else if ( encrypt($email, $lang, $packageId) == $code )
  {
	  $sql = "SELECT de.id, de.bild, de.wokla, de.b64bild, de.thema, 
				   	del.lang, del.lemma, del.soundexists
	          FROM {$dbTablePrefix}elemente de JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id 
	           AND del.lang = '$lang'
	         ";
//	  $sql = "SELECT id, bild, lemma_$lang, wokla, b64bild, thema FROM {$dbTablePrefix}elemente";
	  $resArr = getPlayData($sql);
  }
  else
  {
    $resArr["success"] = false;
    $resArr['errorMsg'] = "Invalid code !";
    $resArr["data"] = array();
    $resArr["cols"] = array();
  }
}


function getData($packageId)
{
  global $dbTablePrefix;
  
	$codes = $_REQUEST['codes'];
	
	$langColArr = array();
	$langArr = array();
	
	$demoBed = holeDemoBedingung($packageId); 
	if ( is_null($demoBed) ) // Das Paket ist kostenlos
	{
		$sql = "SELECT DISTINCT del.lang
		  	  	  FROM `{$dbTablePrefix}elemente` de LEFT JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id
		  	  	 WHERE de.package_id = $packageId";

		error_log($sql);
		$result = mysql_query($sql);
		if ($result)
		{
			while( $row = mysql_fetch_assoc($result) )
			{
				$langArr[] = "'" . $row['lang'] . "'";
			}
			
		}
		else
		{
			echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error() . "<BR>SQL: $sql";
			$resArr["success"] = false;
			$resArr['errorMsg'] = "Internal database error(3) !";
		}
	}
	else
	{
		foreach ($codes as $code)
		{
			$decodeArr = json_decode($code, true);
			if ( encrypt($decodeArr['email'], $decodeArr['lang'], $packageId) == $decodeArr['code'] ) 
			{
				array_push($langColArr, 'lemma_' . $decodeArr['lang']);
				array_push($langArr, "'" . $decodeArr['lang'] . "'");
			}
		}
	}
    //$sql = "SELECT id, bild, " . join(',', $langColArr) . ", wokla, b64bild, thema FROM {$dbTablePrefix}elemente";
    $sql = "SELECT de.id, de.bild, de.wokla, de.b64bild, de.thema, del.lang, del.lemma
			  FROM `{$dbTablePrefix}elemente` de LEFT JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id
			 WHERE del.lang IN (" . join(",", $langArr) . ")
               AND de.package_id = $packageId";
	$resArr = getPlayData($sql);
	
	return $resArr;
}

function getDemoData($packageId)
{
  global $dbTablePrefix;
  
	$demoBed = holeDemoBedingung($packageId); 
	if ( ! is_null($demoBed)  && $demoBed != 'NO' ) // Das Paket hat Demomodus
	{
	    $sql = "SELECT de.id, de.bild, de.wokla, de.b64bild, de.thema, del.lang, del.lemma
				  FROM `{$dbTablePrefix}elemente` de LEFT JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id
				 WHERE de.package_id = $packageId
	               AND $demoBed";
		$resArr = getPlayData($sql);
	}
	else
	{
	    $resArr["data"] = array();
	}
    //$sql = "SELECT id, bild, " . join(',', $langColArr) . ", wokla, b64bild, thema FROM {$dbTablePrefix}elemente";
	
	return $resArr;
}

$packageId = $_REQUEST['packageId'];
if ( isset($_REQUEST['email']))
{
	$resArr = getDataByLanguage($packageId);	
}  
else if ( $_REQUEST['GETDEMODATA'])
{
	$resArr = getDemoData($packageId);
}
else
{
	$resArr = getData($packageId);
}
//print("<pre>");
//print_r($resArr);
//print("</PRE>");

$callback = $_REQUEST['callback'];
				//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . json_encode($resArr) . ');';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($resArr);
}
