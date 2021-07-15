<?php
session_start();
require_once "../../engine/connection.php";

$msg = [];

    if(isset($_FILES['coverImage'])){
        $uploadOk= 0;
        $formatOk = 1;
       $coverPicture_available = 1;
       
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["coverImage"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        if(!file_exists($target_file)) {

        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
            $formatOk = 0;
            $msg = ["invalidImage"=> "Sorry, only JPG, JPEG, PNG & GIF files are allowed."];
            echo json_encode($msg);

        }else if(move_uploaded_file($_FILES["coverImage"]["tmp_name"], $target_file)) {
                $uploadOk= 1;
                
        }
     
    }
    }else{
         $coverPicture_available = 0 ;

    }
   
    


if(isset($_POST) && $coverPicture_available == 1){
   
    $postCheck = 0;
    $catId = $_POST['catId'];
    $title = trim($_POST['title']);
    $content = htmlspecialchars(trim($_POST['content']));
    $slug = trim($_POST['slug']);
    $metatile = trim($_POST['metatitle']);

    if(!empty($content) && !empty($title) && $uploadOk == 1){ 
        $imagePATH = "lib/". htmlspecialchars($target_file);
        $uid = $_SESSION['UID'];
        $defaultSlug = empty($slug) ? $title: $slug;
        $sql_query = "INSERT INTO `post`(`authorId`,`catId`,`title`,`createdAt`,`content`, `slug`, `coverPicture`)
        VALUES('$uid','$catId','$title', now(),'$content', '$defaultSlug', '$imagePATH');";

        if(!mysqli_query($conn, $sql_query)){
            // echo mysqli_error($conn);
            // return;
           $msg = ["failed"=>"Oops! an error while trying to process your request, please try again later"];
           echo json_encode($msg);
           return;
        }

        $msg = ["success" => "Your post as been sent. Awaiting admin approval!"];
        echo json_encode($msg);
    }else if($formatOk !=1){
        $msg = ["failed" => "Try checking your cover image or either Post title or content are empty"];
        echo json_encode($msg);
        
    }
} else{
     $msg = ["invalidImage" => "Please, a cover image is required"];
        echo json_encode($msg);

}




?>