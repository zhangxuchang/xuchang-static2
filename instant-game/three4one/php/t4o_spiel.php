<?php
require_once('t4o_config.php');
require_once('t4o_createkey.php');

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$picPath = "img/";
$defaultLang    = "es";


//
function convertImg($imgName)
{
	// PHP-Skript is in Subdirectory PHP, so go one up
	$serverFilename = dirname($_SERVER['SCRIPT_FILENAME']) . '/../' . $imgName;
	
	$mimeType = 'image/jpg'; //mime_content_type($serverFilename);
	$content = file_get_contents ($serverFilename);
	$b64Content = base64_encode($content);
	return "data:" . $mimeType . ";base64," . $b64Content;
}

// ****************************************************

function getGameData()
{
  global $defaultLang, $defaultPackage, $dbTablePrefix;
  
  $email = $_REQUEST['email'];
  $code = $_REQUEST['code'];
  $lang = ( !empty($_REQUEST['lang'])  ? $_REQUEST['lang'] : $defaultLang);
  $packageId = ( !empty($_REQUEST['packageId']) ? $_REQUEST['packageId'] : $defaultPackage);

  if ( encrypt($email, $lang, $packageId) == $code )
  {
	  $sql = "SELECT de.id 
	  			FROM {$dbTablePrefix}elemente de 
	  			JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id 
	  			JOIN {$dbTablePrefix}packages_module dpm ON dpm.id = del.module_id 
	  			JOIN {$dbTablePrefix}packages dp ON dpm.package_id = dp.id 
	  			/* WHERE dpm.name = '$lang' */
	           WHERE del.lang = '$lang'
	  		   AND de.package_id = $packageId
	  		   AND dp.available = -1";
  }
  else
  {
  	
  	$demoBed = holeDemoBedingung($packageId);
  	$demoBed = (empty($demoBed) ? '1=1' : $demoBed);
  	
	$sql = "SELECT de.id 
	          FROM {$dbTablePrefix}elemente de 
	          JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id 
	  		  JOIN {$dbTablePrefix}packages_module dpm ON dpm.id = del.module_id 
	  		  JOIN {$dbTablePrefix}packages dp ON dpm.package_id = dp.id 
	  		  WHERE $demoBed /* thema = '" . mysql_real_escape_string($thema) . "' */ 
	           AND del.lang = '$lang'
	           /* AND dpm.name = '$lang' */
	           AND de.package_id = $packageId
	  		   AND dp.available = -1	           
	           ";
  }
	error_log($sql);
	$result = mysql_query($sql);
	if (!$result) {
	    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
	    exit;
	}
	while( $row = mysql_fetch_row($result) )
	{
		$idArr[] = $row[0];
	}
	
	$randIndexArr = generateUniqueRandoms ( 0, count($idArr)-1, 3 );
	
	$sql = "SELECT de.id, de.bild, de.wokla, de.b64bild, de.thema, 
				   del.lemma as `lemma_$lang`, del.soundexists
	          FROM {$dbTablePrefix}elemente de 
	          JOIN {$dbTablePrefix}elemente_lemmas del ON de.id = del.elemente_id
	          JOIN {$dbTablePrefix}packages_module dpm ON dpm.id = del.module_id
	  		  JOIN {$dbTablePrefix}packages dp ON dpm.package_id = dp.id 
	         WHERE de.id IN ( {$idArr[$randIndexArr[0]]},{$idArr[$randIndexArr[1]]},{$idArr[$randIndexArr[2]]} )
	           /* AND dpm.name = '$lang' */
	           AND del.lang = '$lang'
	           AND de.package_id = $packageId
	  		   AND dp.available = -1	           
	       ";
	//echo $sql;
	error_log("SPIELEDATEN: $sql");
	$result = mysql_query($sql);
	if (!$result) {
	    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
	    exit;
	}
	while($row = mysql_fetch_assoc($result))
	{
	  $rowArr[$row['id']] = $row; 
	}
	    
	$output = array('bild' => $picPath . $rowArr[$idArr[$randIndexArr[0]]]['bild'],
						   'oktext' => $rowArr[$idArr[$randIndexArr[0]]]['lemma_' . $lang],
						   'fehltext1' => $rowArr[$idArr[$randIndexArr[1]]]['lemma_' . $lang],
						   'fehltext2' => $rowArr[$idArr[$randIndexArr[2]]]['lemma_' . $lang],
							'lang' => $lang . ', REQUEST:' . $_REQUEST['lang'],
							'b64bild' => $rowArr[$idArr[$randIndexArr[0]]]['b64bild'], 
							'soundexists' => $rowArr[$idArr[$randIndexArr[0]]]['soundexists'], 
	);

	return $output;
}

function getThemaList()
{
  global $dbTablePrefix;
  
	$sql = "SELECT DISTINCT thema FROM {$dbTablePrefix}elemente";
	$result = mysql_query($sql);
	if (!$result) {
	    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
	    exit;
	}
	$rowCount=1;
	while( $row = mysql_fetch_row($result) )
	{
		$output[] = array('id' => $rowCount++, 'thema' => $row[0]);
	}
	
	return array('data' => $output);
}

function getPackageList()
{
  global $dbTablePrefix;
  
	$sql = "SELECT DISTINCT id, name, demo_select, dataurl, copyrightnotice, logoIcon, cssTag 
	          FROM {$dbTablePrefix}packages
	         WHERE available = -1";
	
	$result = mysql_query($sql);
	if (!$result) {
	    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
	    exit;
	}
	while( $row = mysql_fetch_row($result) )
	{
		if ( is_null($row[2]) )
		{
			$mode = 'Free';
		}
		else if ( $row[2] == 'NO' )
		{
			$mode = 'Commercial';
		}
		else
		{
			$mode = 'Demo available';
		}
		$output[] = array('packageId' => $row[0], 
						  'packageName' => $row[1] . " ($mode)", 
						  'dataUrl' => $row[3], 
						  'copyrightNotice' => $row[4],
						  'logoIcon'  => $row[5],
						  'cssTag' => $row[6]);
	}
	
	return array('data' => $output);
}

function checkAccessCode()
{
  global $defaultLang, $defaultPackage;
  
  $email = $_REQUEST['email'];
  $code = $_REQUEST['code'];
  $lang = ( !empty($_REQUEST['lang'])  ? $_REQUEST['lang'] : $defaultLang);
  $packageId = ( !empty($_REQUEST['packageId']) ? $_REQUEST['packageId'] : $defaultPackage);
  
  $demoBed = holeDemoBedingung($packageId);  
  
  if ( is_null($demoBed) || encrypt($email, $lang, $packageId) == $code )
  {
	$output = array('success' => true);
  }
  else
  {
  	$output = array('success' => false);
  }
  
  return $output;
}

switch ($_REQUEST['command'])
{
	case 'THEMA':
		$output = getThemaList();
		break;

	case 'CHECK':
		$output = checkAccessCode();
		break;
		
	case 'GETPACKAGES':
		$output = getPackageList();
		break;
		
	case 'GAME':
	default:
		$output = getGameData();
		break;
		
}
$callback = $_REQUEST['callback'];
				//start output
if ($callback) {
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // never, ever cache, we want fresh info!
    header('Content-Type: text/javascript; charset="utf-8"');
    echo $callback . '(' . json_encode($output) . ');';
} else {
    header('Content-Type: application/x-json; charset="utf-8"');
    echo json_encode($output);
}				
