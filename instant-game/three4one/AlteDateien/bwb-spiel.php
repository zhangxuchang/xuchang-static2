<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$picPath = "img/";
$lang    = "de";

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
        break;
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
// ****************************************************
$link = mysql_connect('localhost', 'bwbspiel', 'bwbspiel');
if (!$link) {
    die('keine Verbindung möglich: ' . mysql_error());
}
if ( !mysql_select_db("bwbspiel") )
{
    echo "Kann  mydbname nicht auswählen: " . mysql_error();
    exit;
}

$sql = "SELECT COUNT(1) FROM bwb_lemmas";
$result = mysql_query($sql);
if (!$result) {
    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
    exit;
}
$row = mysql_fetch_row($result);

$numRows = $row[0];

$randIndexArr = generateUniqueRandoms ( 1, $numRows, 3 );

$sql = "SELECT * FROM bwb_lemmas WHERE id IN ( " . join(",", $randIndexArr) . ")";
$result = mysql_query($sql);
if (!$result) {
    echo 'Abfrage konnte nicht ausgeführt werden: ' . mysql_error();
    exit;
}
while($row = mysql_fetch_assoc($result)){
  $rowArr[$row['id']] = $row; }

//print("SQL: $sql<PRE>");print_r($rowArr);print("</PRE>");

$output = array('bild' => $picPath . $rowArr[$randIndexArr[0]]['bild'],
					   'oktext' => $rowArr[$randIndexArr[0]]['lemma_' . $lang],
					   'fehltext1' => $rowArr[$randIndexArr[1]]['lemma_' . $lang],
					   'fehltext2' => $rowArr[$randIndexArr[2]]['lemma_' . $lang]
				);

$callback = $_REQUEST['callback'];
				//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . json_encode($output) . ');';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($output);
}				
