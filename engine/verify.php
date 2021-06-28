<?php
session_start();
require_once "connection.php";
$msg =[];
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $password = mysqli_real_escape_string($conn, $_POST['password']);

        if(!isset($_SESSION['UID'])){
            header("location: ../login.php");
        }

        else if(empty($_POST['password'])){
            $msg = ['failed' => 'Passsword field is required']; 
            echo json_encode($msg);
        } 
        else if(isset($_SESSION['UID'])){
        $UID = $_SESSION['UID'];
        $query = "SELECT * FROM `user` WHERE `userId` = '$UID' LIMIT 1;";
        $runQuery = mysqli_query($conn, $query);

        $result = mysqli_fetch_assoc($runQuery);
        if($result){
            if($result['passwordHash'] == md5($password)){
            $msg = ['success' => 'User verification succesful']; 
            echo json_encode($msg);


            }else{
                $msg = ['failed' => 'Passsword is incorrect']; 
            echo json_encode($msg);
            }

        }
        
    }
}


?>