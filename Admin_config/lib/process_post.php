<?php
session_start();
require_once "../../engine/connection.php";

if(isset($_POST)){
    $msg = [];
    $postCheck = 0;
    $title = trim($_POST['title']);
    $content = trim($_POST['content']);
    $slug = trim($_POST['slug']);
    $metatile = trim($_POST['metatitle']);
  
if(!empty($content) && !empty($title)){ 
   $uid = $_SESSION['UID'];
   $defaultSlug = empty($slug) ? $title: $slug;
    $sql_query = "INSERT INTO `post`(`authorId`,`title`,`createdAt`,`content`, `slug`)
    VALUES('$uid','$title', now(),'$content', '$defaultSlug');";

    if(!mysqli_query($conn, $sql_query)){
        echo mysqli_error($conn);
    };

    $msg = ["success" => "Your post as been sent. Awaiting admin approval!"];
    echo json_encode($msg);
}else{
    $msg = ["failed" => "Post title or content can not be blank"];
    echo json_encode($msg);
    
}

}


?>