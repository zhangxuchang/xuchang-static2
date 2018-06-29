<?php
header('Content-Type: text/cache-manifest');
echo "CACHE MANIFEST\n";
//phpinfo();

$preDir = "../";
$dirArr = array('jscript', 'css', 'thirdparty', 'pict', 'sencha');
$baseDir = str_replace('php/t4o_manifest.php', '', $_SERVER["PHP_SELF"]); 
$hashes = "";

foreach ( $dirArr as $directory)
{
	echo "# Dir: " . $preDir . $directory . "\n";
	$dir = new RecursiveDirectoryIterator($preDir . $directory);
	
	foreach ( new RecursiveIteratorITerator($dir) as $file )
	{
		if ( $file->IsFile() &&
			 $file != "./manifest.php" &&
			 !strpos($file, '/.') &&
			 substr($file->getFilename(), 0, 1) != "." )
			 {
			 	echo $baseDir . substr($file, strlen($preDir)) ."\n";
			 	$hashes .= md5_file($file);
			 }
	}
}
echo "# Hash: " . md5($hashes) . "\n";
echo "NETWORK:\n*\n";
