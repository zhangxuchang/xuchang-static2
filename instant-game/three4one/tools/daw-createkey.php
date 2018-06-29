<?php 
require_once('../php/t4o_createkey.php');

// Kommandozeilenaufruf
if ($argc > 0)
{
  for ($i=1;$i < $argc;$i++)
  {
    list($k, $v) = explode("=", $argv[$i], 2); 
    $_REQUEST[$k] = $v;
  }
  $email = $_REQUEST['EMAIL'];
  $lang  = $_REQUEST['LANG'];
  $code  = $_REQUEST['CODE'];
  $packageId = $_REQUEST['PACKAGE_ID'];
  
  if ( empty($code) )
  {
    $encrypted_data = encrypt ($email, $lang, $packageId);
  
    print "EMAIL:      $email\n";
    print "LANG:       $lang\n";
    print "PACKAGE_ID: $lang\n";
    print "CRYPTED:    $encrypted_data\n";
  }
  else
  {
    $decrypted_data = decrypt($code, $email, $lang);
  
    print "DECRYPTED: " . ($decrypted_data ? 'TRUE' : 'FALSE') . "\n";
  }
}

/* */

