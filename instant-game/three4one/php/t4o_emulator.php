<?php
require_once('t4o_config.php');
require_once('t4o_createkey.php');

function insertSimulation($orientation, $width, $height)
{
	$sql = "INSERT INTO  `bwbspiel`.`daw_simulator` (
				`id` ,
				`orientation` ,
				`width` ,
				`height`
				)
				VALUES (
				NULL ,  '$orientation',  '$width',  '$height'
				);";
	
	if ( !mysql_query($sql) )
	{
		error_log('ERROR INSERT daw-emulator: ' . mysql_error());
		return false;
	}
	else
	{
		return mysql_insert_id(); 
	}
}

function insertSimulationEvents($dawId, $dataArr)
{
	foreach ( $dataArr as $data )
	{
		error_log("DATA-ARR: " . print_r($data, true));
		
		$sql = "INSERT INTO  `bwbspiel`.`daw_simulator_events` (
					`id` ,
					`daw_simulator_id` ,
					`type` ,
					`timeStamp` ,
					`bubbles` ,
					`cancelable` ,
					`detail` ,
					`screenX` ,
					`screenY` ,
					`pageX` ,
					`pageY` ,
					`clientX` ,
					`clientY` ,
					`ctrlKey` ,
					`altKey` ,
					`shiftKey` ,
					`metaKey` ,
					`button` ,
					`relatedTarget`
					)
					VALUES (
					NULL ,  $dawId,  '$data[type]', '$data[timeStamp]',  '$data[bubbles]',  '$data[cancelable]',  '$data[detail]',  
							$data[screenX],  $data[screenY],  $data[pageX],  $data[pageY],  $data[clientX],  $data[clientY],
							'$data[ctrlKey]',  '$data[altKey]',  '$data[shiftKey]',  '$data[metaKey]',  
							'$data[button]',  '$data[relatedTarget]'
					)";
						
		if ( !mysql_query($sql) )
		{
			error_log('ERROR INSERT daw-emulator-events: ' . mysql_error());
			return;
		}
		
	}
}

//print("<pre>");
//print_r($resArr);
//print("</PRE>");
$command = $_REQUEST['command'];

switch ($command)
{
	case 'SAVEEVENTS':
		$orientation = $_REQUEST['orientation'];
		$height = $_REQUEST['height'];
		$width = $_REQUEST['width'];
		$dataDecoded = json_decode($_REQUEST['data'], true);

		error_log("SAVEEVENTS DATA: " . print_r($_REQUEST, true));
		
		switch(json_last_error())
		{
		 case JSON_ERROR_DEPTH:
		  error_log('ERROR - Maximale Stacktiefe überschritten');
		  break;
		 case JSON_ERROR_CTRL_CHAR:
		  error_log('ERROR - Unerwartetes Steuerzeichen gefunden');
		 break;
		 case JSON_ERROR_SYNTAX:
		  error_log('ERROR - Syntaxfehler, ungültiges JSON');
		 break;
		 case JSON_ERROR_NONE:
		  error_log('ERROR - Keine Fehler');
		 break;
		}
		
		$dawId = insertSimulation($orientation, $width, $height);
		if ( $dawId !== false )
		{
			insertSimulationEvents($dawId, $dataDecoded);
		}
		break;
		
	case 'READEVENTS':
		$orientation = $_REQUEST['orientation'];
		$height = $_REQUEST['height'];
		$width = $_REQUEST['width'];

		$sql = "SELECT * FROM `daw_simulator` ds WHERE ds.orientation = '$orientation'";
		$result = mysql_query($sql);
		if ( $result === false )
		{
			error_log("READEVENTS simulatorRow: FEHLER=" . mysql_error() . " SQL=$sql");
		}
		$simulatorRow = mysql_fetch_assoc($result); // Hole nur 1. Zeile !!
	    error_log("READEVENTS simulatorRow: Orientation: $orientation, HEIGHT: $height, WIDTH: $width, ID: $simulatorRow[id]");
		
		$sql = "SELECT dse.* FROM `daw_simulator_events` dse WHERE dse.daw_simulator_id = $simulatorRow[id]";
 		$result = mysql_query($sql);
 		while( $row = mysql_fetch_assoc($result) )
	    {
	    	$row['screenX'] = $row['screenX'] / $simulatorRow['width'] * $width;
	    	$row['screenY'] = $row['screenY'] / $simulatorRow['height'] * $height;
	    	$row['pageX'] = $row['pageX'] / $simulatorRow['width'] * $width;
	    	$row['pageY'] = $row['pageY'] / $simulatorRow['height'] * $height;
	    	$row['clientX'] = $row['clientX'] / $simulatorRow['width'] * $width;
	    	$row['clientY'] = $row['clientY'] / $simulatorRow['height'] * $height;
	    	 $resArr[] = $row;
	    }

	    error_log("READEVENTS: Orientation: $orientation, HEIGHT: $height, WIDTH: $width, ANZAHL EVENTS=" . count($resArr));
		$callback = $_REQUEST['callback'];
						//start output
		if ($callback) {
		    header('Content-Type: text/javascript');
		    echo $callback . '(' . json_encode($resArr) . ');';
		} else {
		    header('Content-Type: application/x-json');
		    echo json_encode($resArr);
		}
		break;
}

