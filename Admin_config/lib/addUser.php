<?php
session_start();
include "../../engine/connection.php";
$msg = [];
$verifed = 0;
if(isset($_SESSION['UID']) && isset($_POST['password'])){
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $Uusername = mysqli_real_escape_string($conn, $_POST['Uusername']);
    $Uemail = mysqli_real_escape_string($conn, $_POST['Uemail']);
    $role = $_POST['role'];

    $UID = $_SESSION['UID'];
    $query = "SELECT `passwordHash`, `role` FROM `user` WHERE `userId`='$UID';";
    $run_query = mysqli_query($conn,$query);
    if($run_query){
        $user_data = mysqli_fetch_assoc($run_query);

        if($user_data['passwordHash'] == md5($password) && $user_data['role'] == 1 ){
            $verifed = 1;
            
        }else{
            $msg = ["password_failed" => "Incorrect password"];
            echo json_encode($msg);
        }
    }else{
        $msg = ["invalid_user" => "sorry and error occurred while trying to add new user, pls try again later or contact your super admin"];
            echo json_encode($msg);
    }

    if($verifed == 1){
        $query2 = "SELECT `userName`,`email`,`role` FROM `user` WHERE `userName`='$Uusername';";
        $run_query2 = mysqli_query($conn,$query2);

        if($run_query2){
            $user_data2 = mysqli_fetch_assoc($run_query2);

            if($user_data2['userName'] != $Uusername && $user_data2['email'] != $Uemail){
                $msg = ['invalid_user' =>'User\'s email or username is incorrect'];
                echo json_encode($msg);
                return $msg;
            }



            if($role == "Admin" && $user_data2['role'] == 0 ){
                $update1 = "UPDATE user SET `role` = 1 WHERE `userName` ='$Uusername' ";
                $run_update1 = mysqli_query($conn,$update1);
                $msg = ['success' => 'Successfully added'.' '.$Uusername.' '.'as admin'];
                echo json_encode($msg);


            }else if($role =='Author' && $user_data2['role']==0){
                $msg = ["invalid_user"=> $Uusername. ' '. "is already an Author"];
                echo json_encode($msg);
                return $msg;
            }
            
            if($role == "Author" && $user_data2['role'] ==1 ){
                $update2 = "UPDATE user SET `role` = 0 WHERE `userName` ='$Uusername' ";
                $run_update2 = mysqli_query($conn,$update2);

                $msg = ['success' => 'Successfully removed'.' '.$Uusername.' '.'as admin to an author'];
                echo json_encode($msg);

            }else if($role == "Admin" && $user_data2['role']==1){
                $msg = ["invalid_user"=> $Uusername. ' '. "is already an Admin"];
                echo json_encode($msg);
                return $msg;
            }

        }else{echo mysqli_error($conn);}

    }
}

?>