<?php
function convertFilename($in)
{
	$CONV = array(
		'Ä' => 'Ae',
		'Ö' => 'Oe',
		'Ü' => 'Ue',
		'ä' => 'ae',
		'ö' => 'oe',
		'ü' => 'ue',
		'ß' => 'ss'
	);
  $i=0;
  $out = '';
  while($i<mb_strlen($in))
  {
  	$char = mb_substr ( $in, $i , 1 , "UTF-8" );
//  	error_log("CHAR: $char");
  	
    if(array_key_exists($char, $CONV))
    {
      $out .= $CONV[$char];
      $i ++;
    }
    else
    {
      $out .= $char;
      $i ++;
    }
  }

  return $out;
}

$lang = $_REQUEST['lang'];
$sf = $_REQUEST['file'];
$packageId = $_REQUEST['packageId'];

//$sf = preg_replace("/(\\\x[0-9A-Fa-f]{2})/e", "chr(hexdec('\\1'))", $sf);

$dirtag = strtolower(substr($sf, 0, 1));

$path = "../mp3/$packageId/$lang/$dirtag/$sf";

if ( substr($path,-4) != '.mp3' )
{
	$path = $path . '.mp3';
}
error_log($path);

if ( ! file_exists($path) )
{
	$path = convertFilename($path);
	error_log("CONVERTED: " . $path);
}

if ( file_exists($path) )
{
	header("Content-Type: audio/mpeg");
	header('Content-Length: '.filesize($path)); // provide file size
	header("Expires: -1");
	header("Cache-Control: no-store, no-cache, must-revalidate");
	header("Cache-Control: post-check=0, pre-check=0", false);
	
	readfile($path);
}
else 
{
	header("Content-Type: audio/mpeg");
	header('Content-Length: 0'); // provide file size
	header("HTTP/1.0 404 Not Found");
    header("Status: 404 Not Found");	
}