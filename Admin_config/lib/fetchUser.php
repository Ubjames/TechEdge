<?php
session_start();
require_once "../../engine/connection.php";

if(isset($_SESSION['UID'])){
    $UID = $_SESSION['UID'];
    $query = "SELECT `userName`, `role` FROM `user` ORDER BY `role` DESC";
    $run_query = mysqli_query($conn, $query);
    
        $arr = [];
        while ($row = mysqli_fetch_assoc($run_query)) {
            array_push($arr,$row);
            // echo mysqli_num_rows($run_query);
        } 
        echo json_encode($arr);
    }

?>