<?php
session_start();
require_once "../../engine/connection.php";

$msg= [];
$UID = $_SESSION['UID'];
header('Content-type: application/json;');

if(isset($_FILES["file"])){

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);
$uploadOk = 0;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if file already exists
if(!file_exists($target_file)) {
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"){
        $msg = ["failed"=> "Sorry, only JPG, JPEG, PNG & GIF files are allowed."];
        echo json_encode($msg);
}else if(move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)){
     $imgagePATH = 'lib/'. htmlspecialchars($target_file);
     $updatePhoto = "UPDATE `user` SET `passport` = '$imgagePATH' WHERE `userId` = '$UID';";
     $uploadOk = 1;
     mysqli_query($conn, $updatePhoto);
    $msg = ["success" => "Your photo has been uploaded Successfully"];
    echo json_encode($msg); 
}
 
}

}
