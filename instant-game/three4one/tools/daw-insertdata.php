<!DOCTYPE html>
<html --manifest="dropaword.manifest" lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta charset="utf-8">

		<title>Three4One</title>
		<meta name="viewport" content="initial-scale=1.0" />
		
		<style type="text/css">
		<!--
		/* ... Hier werden die Formate definiert ... */
		table td {
			border: solid 1px black;
			text-align: center;
		}
		-->
		</style>
		
	</head>
	<body>		
<?php
require_once('../php/t4o_config.php');

$pathHash = array(
	2 => array(
			path => '/srv/www/htdocs/Three4One/img/Laender/www.openclipart.org/people/koppi/png',
			url => '/Three4One/img/Laender/www.openclipart.org/people/koppi/png',
			soundpath => '/srv/www/htdocs/Three4One/mp3/2'
		),
	3 => array(
			path => '/srv/www/htdocs/Three4One/img/chemicalElements',
			url => '/Three4One/img/chemicalElements',
			soundpath => '/srv/www/htdocs/Three4One/mp3/3'
		),
	);		
function convertImg($serverFilename)
{	
	$mimeType = 'image/jpeg'; //mime_content_type($serverFilename);
//	echo("SERVERFILENAME: $serverFilename<BR>");
	$content = file_get_contents ($serverFilename);
	$b64Content = base64_encode($content);
	return "data:" . $mimeType . ";base64," . $b64Content;
}

function saveData()
{
	global $pathHash;
	
	$path = $pathHash[$_POST['package']]['path'];
	
	foreach ($_POST['id'] as $bild => $elementId)
	{
		if ( !empty($_POST['id'][$bild]))
		{
			$sql = "UPDATE daw_elemente SET
					bild = '{$bild}',
					wokla = TRIM('" . mysql_real_escape_string($_POST['wokla'][$bild]) . "'),
					b64bild = '" . convertImg($path . "/" . $bild) . "' ,
					thema = TRIM('{$_POST['thema'][$bild]}'),
					package_id = {$_POST['package']}
					WHERE id = {$_POST['id'][$bild]}
					";
			$result = false;
			$result = mysql_query($sql);
			if ( $result === false )
			{
				      echo 'Daten konnten nicht aktualisiert werden: ' . mysql_error() . "<br>SQL: $sql<BR>";
			}
			$elementId = $_POST['id'][$bild];
		}
		else 
		{
			$sql = "INSERT INTO daw_elemente (bild, wokla, b64bild, thema, package_id) VALUES (
					'{$bild}',
					TRIM('" . mysql_real_escape_string($_POST['wokla'][$bild]) . "'),
					'" . convertImg($path . "/" . $bild) . "',
					TRIM('{$_POST['thema'][$bild]}'),
				    {$_POST['package']}					
					)";
			$result = false;
			$result = mysql_query($sql);
			if ( $result === false )
			{
				      echo 'Daten konnten nicht eingefügt werden: ' . mysql_error() . "<br>SQL: $sql";
			}
			
			$elementId = mysql_insert_id();			
			print("Neue ElementID: $elementId<BR>SQL: $sql<BR>");
		}
	
		foreach ($_POST['lemma'][$bild] as $sprache => $lemma )
		{
			if ( $lemma != '' )
			{
			$sql = "INSERT INTO daw_elemente_lemmas (elemente_id, module_id, lang, lemma, soundexists) VALUES (
				$elementId,
				{$_POST['module'][$bild][$sprache]},
				'$sprache',
				TRIM('" . mysql_real_escape_string($lemma) . "'),
				TRIM('{$_POST['soundexists'][$bild][$sprache]}')
				) ON DUPLICATE KEY 
					UPDATE lemma = TRIM('" . mysql_real_escape_string($lemma) . "'), 
						   module_id = {$_POST['module'][$bild][$sprache]},
						   soundexists = TRIM('{$_POST['soundexists'][$bild][$sprache]}')
				";
				$result = false;
				print("SQL: $sql<BR>");
				$result = mysql_query($sql);
				if ( $result === false )
				{
					      echo 'Lemmas konnten nicht eingefügt werden: ' . mysql_error() . "<br>SQL: $sql<BR>";
				}
			}
		}
	}
}

function getSelection($name, $table, $where, $selVal)
{
	$txt = "";
	$sql = "SELECT * FROM  $table" . ( !empty($where) ? " WHERE $where" : '');
	$result = mysql_query($sql);
	if ($result) 
  	{
  		$txt = "<select name='$name'>";
  		while ( $data1 = mysql_fetch_assoc($result) )
  		{
  			$selected = ($data1['id'] == $selVal ? "selected='selected'" : '');
  			$txt .= "<option value='$data1[id]' $selected>$data1[name]</option>";
  		}
  		$txt .= "</select>";
  	}
  	else
  	{
  		die("Fehler beim Lesen von $table: " . mysql_error() . "<BR>SQL: $sql<BR>");
  	}
	return $txt;	
}

function getSoundFile($soundexists, $packageId, $name, $lang)
{
	global $pathHash;
	
	$soundpath = $pathHash[$packageId]['soundpath']; 
	
	$name = substr($name,0,-4) . '.mp3';
	$subdir = substr($name,0,1);
//	print $soundpath. "/" . $lang . "/" . $subdir . "/". $name;
	if ($soundexists != '' && ( $soundexists != '0' && $soundexists != '-1') )
	{
		return $soundexists;
	}
	elseif (file_exists($soundpath. "/" . $lang . "/" .$subdir . "/". $name) )
	{
		return $name;
	}
	else
	{
		return '';
	}
}

//print('<PRE>');print_r($_POST);print('</PRE>');
if ( isset($_POST['id']) )
{
	saveData();
}

if ( $_REQUEST['package'] )
{
	$packageID = $_REQUEST['package'];
}
$count=0;
print("<form action='daw-insertdata.php' method='post'>");
print(getSelection("package", 'daw_packages', "", $packageID));
print("<input type='submit'>");
if ( !empty($packageID) )
{
	$files = scandir($pathHash[$packageID]['path'], 1);
	$url = $pathHash[$packageID]['url'];
	
	print("<table>");
	print("<tr><th>Bild</th><th>DE</th><th>FR</th><th>EN</th><th>ES</th><th>PL</th><th>IT</th><th>TR</th><th>RU</th><th>WOKLA</th><th>THEMA</th></tr>");
	
	foreach ( $files as $file )
	{
		if ( strlen($file) > 4 && substr_compare($file, '.png', -4, 4) == 0  )
		{
			$sql = "SELECT de.*, del.lang, del.lemma, del.module_id, del.soundexists 
			          FROM `daw_elemente` de 
			     LEFT JOIN daw_elemente_lemmas del ON de.id = del.elemente_id 
			         WHERE bild='$file'
			           AND de.package_id = $packageID";
			$result = mysql_query($sql);
			$data = array();
			if ($result) 
		  	{
		  		while ( $data1 = mysql_fetch_assoc($result) )
		  		{
		  			$data = array_merge($data, $data1);
		  			$data['lemma_' . $data['lang']] = $data['lemma'];
		  			$data['soundexists_'. $data['lang']] = $data['soundexists'];
		  		}
		  	}
	    
			//print('DATA: <PRE>');print_r($data);print('</PRE>');
		  	$fullname = $url . "/" . $file;
			print("<tr>");
			print("<td>");
			print("<input type='hidden' name='id[$file]' value='$data[id]'><img src=\"$fullname\"><br>$file");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][de]' value='" . htmlentities($data['lemma_de'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][de]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][de]' value='" .getSoundFile($data['soundexists_de'], $packageID, $file, 'de') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][fr]' value='" . htmlentities($data['lemma_fr'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][fr]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][fr]' value='" .getSoundFile($data['soundexists_fr'], $packageID, $file, 'fr') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][en]' value='" . htmlentities($data['lemma_en'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][en]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][en]' value='" .getSoundFile($data['soundexists_en'], $packageID, $file, 'en') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][es]' value='" . htmlentities($data['lemma_es'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][es]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][es]' value='" .getSoundFile($data['soundexists_es'], $packageID, $file, 'es') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][pl]' value='" . htmlentities($data['lemma_pl'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][pl]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][pl]' value='" .getSoundFile($data['soundexists_pl'], $packageID, $file, 'pl') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][it]' value='" . htmlentities($data['lemma_it'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][it]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][it]' value='" .getSoundFile($data['soundexists_it'], $packageID, $file, 'it') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][tr]' value='" . htmlentities($data['lemma_tr'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][tr]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][tr]' value='" .getSoundFile($data['soundexists_tr'], $packageID, $file, 'tr') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='lemma[$file][ru]' value='" . htmlentities($data['lemma_ru'], ENT_QUOTES, 'utf-8') . "'>");
			print(getSelection("module[$file][ru]", 'daw_packages_module', "package_id = $packageID", $data['module_id']));
			print("<input type='text' name='soundexists[$file][ru]' value='" .getSoundFile($data['soundexists_ru'], $packageID, $file, 'ru') . "'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='wokla[$file]' value='$data[wokla]'>");
			print("</td>");
			print("<td>");
			print("<input type='text' name='thema[$file]' value='$data[thema]'>");
			print("</td>");
			print("<td>");
			print("</td>");
			
			print("</tr>");
			
			if ( (++$count % 5) == 0 )
			{
				print("<tr><td><input type='submit'></td></tr>");
				print("<tr><th>Bild</th><th>DE</th><th>FR</th><th>EN</th><th>ES</th><th>PL</th><th>IT</th><th>TR</th><th>RU</th><th>WOKLA</th><th>THEMA</th></tr>");
			}
		}
	}
	print("</table>");
}
print("</form>");
