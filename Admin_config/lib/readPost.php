<?php
require_once "../../engine/connection.php";
if(isset($_GET)){
    $postId = $_GET['postId'];
    $query = "SELECT
    p.title,
    u.passport,
    p.createdAt,
    p.postId,
    p.content,
    CONCAT(u.firstName, ' ', u.lastName) AS author
FROM
    post p
INNER JOIN USER u ON
    p.authorId = u.userId
    WHERE p.postId = $postId";

    $run_query = mysqli_query($conn,$query);

    If(!$run_query){
        $msg = ["failed" => " Oops!  an error occur while trying to process your request, please contact your super admin"];
        echo json_encode($msg); 
    }else{
        $post = mysqli_fetch_assoc($run_query);
        echo json_encode( $post);
        
        // $msg = ["success" => "Post availalble"];
        // echo json_encode($msg);
    }
}
    
 
    
?>