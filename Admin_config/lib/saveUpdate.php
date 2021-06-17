<?php
session_start();
require_once "../../engine/connection.php";

$msg= [];
if(isset($_POST)){
/*     $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $middlename = mysqli_real_escape_string($conn, $_POST['middlename']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $address = mysqli_real_escape_string($conn, $_POST['address']);
    $bio = mysqli_real_escape_string($conn, $_POST['bio']);
    $sex = mysqli_real_escape_string($conn, $_POST['sex']);
    $country = mysqli_real_escape_string($conn, $_POST['country']);

    $UID = $_SESSION['UID'];
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
            if($user_data['username'] != $username || $user_data['username'] ==""){
                $update4 = "UPDATE `user` SET `username` = '$username' WHERE `id` = '$UID';";
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
        
        

        // $msg = ['success'=> 'Your data was updated successfully'];
        //  echo json_encode($msg);
    }
 */

}

 if(isset($_FILES['image']['name'])){
    echo 'yes';

 }else{
     echo 'not seen';
 }
/* 
 
    $target_dir = 'uploads/';
    $target_file = $target_dir.basename($_FILES['image']['techedge_userIMG']);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION)); 
    echo $target_file;
    if(isset($_POST['image'])){
        $check = getimagesize($_FILES['image']['temp_name']);
        if($check !== false){
            $uploadOk =1;
        }else{
            $msg = ['Failed' => 'Invalid Image format'];
            echo json_encode($msg);
            $uploadOk =0;
            
        }
        
    } */

/*    if(file_exists($target_file)){
        $msg = ['Failed' => 'Sorry, file already exists'];
        echo json_encode($msg);
        $uploadOk =0;

    }else if($uploadOk ==1){
        $msg = ['success'=> 'Your data was updated successfully'];
        echo json_encode($msg);

    } */








?>