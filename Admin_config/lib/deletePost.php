<?php
require_once "../../engine/connection.php";
if(isset($_GET)){
    $postId = $_GET['postId'];
    $query = "DELETE FROM `post` WHERE `postId` = $postId";
    
    If(!mysqli_query($conn,$query)){
        $msg = ["failed" => " Oops!  an error occur while trying to process your request, please contact your super admin"];
        echo json_encode($msg);
    }else{
        $msg = ["success" => "Post deleted successfully"];
        echo json_encode($msg);
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
?>