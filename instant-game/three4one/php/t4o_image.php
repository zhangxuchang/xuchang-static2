<?php
$startPath = "../img/Laender/www.openclipart.org/people/koppi/png/";

/**
 * find files matching a pattern
 * using PHP "glob" function and recursion
 *
 * @return array containing all pattern-matched files
 *
 * @param string $dir     - directory to start with
 * @param string $pattern - pattern to glob for
 */
function find($dir, $pattern){
    // escape any character in a string that might be used to trick
    // a shell command into executing arbitrary commands
    $dir = escapeshellcmd($dir);
    // get a list of all matching files in the current directory
    $files = glob("$dir/$pattern");
    // find a list of all directories in the current directory
    // directories beginning with a dot are also included
    foreach (glob("$dir/{.[^.]*,*}", GLOB_BRACE|GLOB_ONLYDIR) as $sub_dir){
        $arr   = find($sub_dir, $pattern);  // resursive call
        $files = array_merge($files, $arr); // merge array with files from subdirectory
    }
    // return all found files
    return $files;
}

$sf = $_REQUEST['image'];

error_log("t4o_image: $startPath, $sf");
$fileArr = find($startPath, $sf);

$path = $fileArr[0];

switch(substr($path, -3))
{
	case 'png':
		$contentType = 'image/png';
		break;
		
	case 'jpg':
		$contentType = 'image/jpeg';
		break;
}

if ( file_exists($path) )
{
	header("Content-Type: $contentType");
	header('Content-Length: '.filesize($path)); // provide file size
	header("Expires: -1");
	
	readfile($path);
}
else 
{
	header("Content-Type: audio/mpeg");
	header('Content-Length: 0'); // provide file size
	header("HTTP/1.0 404 Not Found");
    header("Status: 404 Not Found");	
}