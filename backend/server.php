<?php

$string = file_get_contents("./data/dischi.json");
$disk_list = json_decode($string, true);

if
(isset ($_GET[ 'index'])) { 

  $disk_index = $_GET['index'];
  $disk = $disk_list[$disk_index];
  $result = $disk;
}else{
  $result = $disk_list;
}

header ( 'Content-Type: application/json');
echo json_encode ($result);

header('Content-Type: application/json');
echo json_encode($dischi);

?>