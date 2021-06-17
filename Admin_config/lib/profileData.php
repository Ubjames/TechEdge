<?php
session_start();
require_once "../../engine/connection.php";

if(isset($_SESSION['UID'])){
    $UID = $_SESSION['UID'];
    $query = "SELECT * FROM user WHERE id ='$UID' LIMIT 1;";
    $run_query = mysqli_query($conn, $query);
    $user_data = mysqli_fetch_assoc($run_query);
    
        if($user_data){
            echo json_encode($user_data);
        }
    }


?>