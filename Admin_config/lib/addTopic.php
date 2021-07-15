<?php
require_once "../../engine/connection.php";
session_start();
$msg = [];
if(isset($_POST)){
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $descr = mysqli_real_escape_string($conn, $_POST['descr']);
    if(empty($title) || empty($descr)){
        
        $msg = ["failed" => "One or more fields are empty"];
        echo json_encode($msg);
        return $msg;
    }

    if(isset($_SESSION['UID'])){
        $UID = $_SESSION['UID'];
        $sql = "SELECT `role` FROM `user` WHERE `userId`=".$_SESSION['UID'];
        $run_sql = mysqli_query($conn,$sql);
        $data = mysqli_fetch_assoc($run_sql);
        if($data['role'] == 1){

        $query = "INSERT INTO category(`title`,`descr`,`suggestedBy`,`approved`)VALUES('$title','$descr','$UID',1)";
        $run_query = mysqli_query($conn,$query);
            if($run_query){
                $msg = ["success" => "New category successfully added"];
                echo json_encode($msg);

            }else{
                $msg = ["failed"=>"there was problem while trying to add category, pls try again later"];
            }

        }else if($data['role'] == 0){
            $query = "INSERT INTO category(`title`,`descr`,`suggestedBy`)VALUES('$title','$descr','$UID')";
            $run_query = mysqli_query($conn,$query);
                if($run_query){
                    $msg = ["success" => "New category successfully added"];
                    echo json_encode($msg);

                }else{
                    $msg = ["failed"=>"there was problem while trying to add category, pls try again later"];
                }
        }


         
    }

    




}


?>