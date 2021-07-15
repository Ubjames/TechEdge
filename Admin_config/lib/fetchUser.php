<?php
session_start();
require_once "../../engine/connection.php";

if(isset($_SESSION['UID'])){
    $UID = $_SESSION['UID'];
    $query = "SELECT `userName`, `role` FROM `user` ORDER BY `role` DESC";
    $run_query = mysqli_query($conn, $query);
    
    while ($row = mysqli_fetch_assoc($run_query)) {
            $arr[] =  $row;
            // array_push($arr,$row);


        } 
        echo json_encode($arr);
    }

?>