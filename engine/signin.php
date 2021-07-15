<?php
session_start();
require_once "connection.php";
$msg = [];
if(isset($_POST)){
    $username = mysqli_real_escape_string($conn, $_POST['username']);

    if(!empty($username)){
        $query = "SELECT * FROM user WHERE username='$username' LIMIT 1;";
        $run_query = mysqli_query($conn, $query);
        $user_data = mysqli_fetch_assoc($run_query);
        if($user_data){
            $_SESSION['temp_id'] = $user_data['userId'];
            $msg = ['success' => 'User authentication succesful']; 
            $newArray = [$msg,$user_data];
            echo json_encode($newArray) ;
                
                
        } else{
        $msg = ['failed' => 'Username is Incorrect']; 
                echo json_encode($msg);
    }
    }
    else{
        $msg = ['failed' => 'Username field is required']; 
                echo json_encode($msg);
    }
}

?>