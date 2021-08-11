<?php
session_start();
require_once "../../engine/connection.php";

$msg = [];
header('Content-type: application/json;');

$query1 = "SELECT COUNT(postId) as Number_Of_Posts FROM `post`;";
$run_query1 = mysqli_query($conn, $query1);

if($run_query1){
    $data = mysqli_fetch_assoc($run_query1);
    array_push($msg,$data);
}

$query2 = "SELECT COUNT(userId) as Number_Of_Users FROM `user`;";
$run_query2 = mysqli_query($conn, $query2);

if($run_query2){
    $data2 = mysqli_fetch_assoc($run_query2);
    array_push($msg,$data2);
}

$query3 = "SELECT COUNT(catId) as Number_Of_categories FROM `category`;";
$run_query3 = mysqli_query($conn, $query3);

if($run_query3){
    $data3 = mysqli_fetch_assoc($run_query3);
    array_push($msg,$data3);
}

$query4 = "SELECT COUNT(coverPicture) as postCovers FROM `post` WHERE coverPicture != '';";
$run_query4 = mysqli_query($conn, $query4);

if($run_query4){
    $data4 = mysqli_fetch_assoc($run_query4);
    array_push($msg,$data4);
}
else{
    echo mysqli_error($conn);
}


if(!empty($msg)){
    echo json_encode($msg);
}




?>