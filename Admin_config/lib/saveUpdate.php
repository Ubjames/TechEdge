<?php
session_start();
require_once "../../engine/connection.php";

$msg= [];
$UID = $_SESSION['UID'];
header('Content-type: application/json;');
// charset=utf-8
if(isset($_FILES)){

    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 0;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    // Check if file already exists
    if(!file_exists($target_file)) {
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
            $msg = ["failed"=> "Sorry, only JPG, JPEG, PNG & GIF files are allowed."];
            echo json_encode($msg);
     }else if(move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
         $imgagePATH = 'lib/'. htmlspecialchars($target_file);
         $updatePhoto = "UPDATE `user` SET `passport` = '$imgagePATH' WHERE `id` = '$UID';";
         $uploadOk = 1;
         mysqli_query($conn, $updatePhoto);
        $smg = ["success" => "Your photo has been uploaded Successfully"];
        echo json_encode($msg); 
    }
     
    }
 
}

if(isset($_POST)){
    $required = ['firstname','middlename','lastname','username','email','phone','address','bio',
    'sex',
    'country'];
    $fields_are_set = false;
    foreach ($required as $fileds) {
        if(isset($_POST[$fileds])){
            $fields_are_set = true;
        }
    }

    if($fields_are_set){

    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $middlename = mysqli_real_escape_string($conn, $_POST['middlename']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $address = mysqli_real_escape_string($conn, $_POST['address']);
    $bio = mysqli_real_escape_string($conn, $_POST['bio']);
    $sex = mysqli_real_escape_string($conn, $_POST['sex']);
    $country = mysqli_real_escape_string($conn, $_POST['country']);
    
    
    $query = "SELECT * FROM user WHERE id ='$UID' LIMIT 1;";
    $run_query = mysqli_query($conn, $query);
    
    if(mysqli_num_rows($run_query) > 0){
        $user_data = mysqli_fetch_assoc($run_query);
        if(isset($firstname)){
            
            if($user_data['firstName'] != $firstname || $user_data['firstName'] ==""){
                $update1 = "UPDATE user SET `firstName` = '$firstname' WHERE `id` = '$UID';";
                mysqli_query($conn, $update1);
                
            }
        }
        
        if(isset($lastname)){
            if($user_data['lastName'] !=$lastname || $user_data['lastName'] ==""){
                $update2 = "UPDATE `user` SET `lastName` = '$lastname' WHERE `id` = '$UID';";
                mysqli_query($conn, $update2);
            }
        }
        if(isset($middlename)){
            if($user_data['middleName'] != $middlename || $user_data['middleName']=="" ){
                $update3 = "UPDATE `user` SET `middleName` = '$middlename' WHERE `id` = '$UID';";
                mysqli_query($conn, $update3);
                
            }
        }
        if(isset($username)){
            if($user_data['userName'] != $username || $user_data['userName'] ==""){
                $update4 = "UPDATE `user` SET `userName` = '$username' WHERE `id` = '$UID';";
                mysqli_query($conn, $update4);
                
            }
        }
        if(isset($email)){
            if($user_data['email']!=$email || $user_data['email'] ==""){
                $update5 = "UPDATE `user` SET `email` = '$email' WHERE `id` = '$UID';";
                 mysqli_query($conn, $update5);
                 
            }
        }
        if(isset($phone)){
            if($user_data['mobile']!= $phone || $user_data['mobile'] ==""){
                $update6 = "UPDATE `user` SET `mobile` = '$phone' WHERE `id` = '$UID';";
                mysqli_query($conn, $update6);
                 
            }
        }
        
        if(isset($address)){
            
            if($user_data['address']!=$address  || $user_data['address'] ==""){
                $update7 = "UPDATE `user` SET `address` = '$address' WHERE `id` = '$UID';";
                 mysqli_query($conn, $update7);
                 
            }
        }
        if(isset($sex)){
            
            if($user_data['sex']!=$sex || $user_data['sex'] =""){
                $update8 = "UPDATE `user` SET `sex` = '$sex' WHERE `id` = '$UID';";
                mysqli_query($conn, $update8);
                
            }
        }
        if(isset($country)){
            if($user_data['country']!=$country || $user_data['country'] ==""){
                $update9 = "UPDATE `user` SET `country` = '$country' WHERE `id` = '$UID';";
                mysqli_query($conn, $update9);
                
            }
        }
        if(isset($bio)){
            if($user_data['profile']!=$bio || $user_data['profile'] ==""){
                $update10 = "UPDATE `user` SET `profile` = '$bio' WHERE `id` = '$UID';";
                mysqli_query($conn, $update10);
                
            }
        }
        
        
        if($uploadOk ==1){
            $msg = ['success'=> 'Your data was updated successfully'];
            echo json_encode($msg);
        }
        else{
            $msg = ["failed" => "Sorry, there was an error updating some of your data"];
            echo json_encode($msg);
        }
        
    }
    
    }
    
}


?>