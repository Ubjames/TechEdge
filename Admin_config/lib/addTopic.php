<?php
require_once "../../engine/connection.php";
$msg = [];
if(isset($_POST)){
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $descr = mysqli_real_escape_string($conn, $_POST['descr']);
    if(empty($title) || empty($descr)){
        
        $msg = ["failed" => "One or more fields are empty"];
        echo json_encode($msg);
        return $msg;
    }
    $query = "INSERT INTO category(`title`,`descr`)VALUES('$title','$descr')";
    $run_query = mysqli_query($conn,$query);
    if($run_query){
        $msg = ["success" => "New category successfully added"];
        echo json_encode($msg);

    }else{
        $msg = ["failed"=>"there was problem while trying to add category, pls try again later"];
    }




}


?>