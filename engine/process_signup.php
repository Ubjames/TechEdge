<?php 


function formData(){
    require_once "connection.php";
    $msg =[];
    $matches;
    $required = ['firstName','lastName','username','email','password1','password2'];
    $is_error;
    if(isset($_POST)){
        foreach($required as $fields) {
            !empty($_POST[$fields]) ?$is_error = false :$is_error = true; 
           
    }

    if(!$is_error){
        $firstname = mysqli_real_escape_string($conn, $_POST['firstName']);
        $lastname =  mysqli_real_escape_string($conn, $_POST['lastName']);
        $username = mysqli_real_escape_string ($conn,$_POST['username']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password1 = mysqli_real_escape_string($conn, $_POST['password1']);
        $password2 = mysqli_real_escape_string($conn, $_POST['password2']);

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $msg = ['failed' => 'enter a valid email address'];
            // echo $msg['failed'];
            echo json_encode($msg);
         }
         else if($password2 != $_POST['password1'] ){
             $msg = ['failed'=> 'password did not match'];
             echo json_encode($msg);
        //    echo $msg['failed'];
        }else{
            if(strlen($password1) < 6){
                $msg = ['failed' => 'password must not be less than six characters'];
                // echo $msg['failed'];
                echo json_encode($msg);
            }else{
                $passwordHash = md5($password2);    
                $sql = "INSERT INTO user(`firstName`, `lastName`, `userName`, `email`, `passwordHash`,`registeredAt`) VALUES('$firstname', '$lastname', '$username', '$email', '$passwordHash',now());";
                $runQuery = mysqli_query($conn, $sql);
                
                $msg = ['success' => 'Registration successful']; 
                echo json_encode($msg);
                // echo $msg['success']; 
            }

        }
    }
    else{
        $msg = ['failed' => 'one or more fields are empty'];
    // echo $msg['failed'];
    echo json_encode($msg);
    }
    
    }


}

formData();
?>
    
  <?php
  /* 
    $newerr = [];
    $matches = false;

    #check if both passwords are the same 
    if($password1 === $password2){
        $matches = true;
    }else{
        $newerr['pwd_mismatch_err'] = "password didn't match"; 
       // array_push($errors, array('pwd_mismatch_err' => "password didn't match")); 
    }
    
    #check for password length
    if($matches ===true && strlen($password1) < 6 ){
       // array_push($errors, array('pwd_err' => "password must be at least 8 character or more"));
        $newerr['pwd_err'] = "password must be at least 6 character or more"; 
    }

    #check if password contains numbers, lower/upperCase
    $uppercase = preg_match('@[A-Z]@', $password1);
    $lowercase = preg_match('@[a-z]@', $password1);
    $numbers = preg_match('@[0-9]@', $password1);


    if($matches===true && !$username || !$lowercase || !$numbers){
      //  array_push($errors, array('pwd_strangth_err' => "password should contain lowercase, uppercase, number and symbol")); 
      $newerr['pwd_strangth_err'] = "password should contain lowercase, uppercase, number"; 
        
    }
    
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
       // array_push($errors,  array("email_err" => "please enter a valid email address"));
       $newerr['email_err'] = "please enter a valid email address";
    }
    
    if(count($newerr) == 0){ 
        $password = md5($password2);    
        $sql = "INSERT INTO users(`firstname`, `lastname`, `username`, `email`, `password`) VALUES('$firstname', '$lastname', '$username', '$email', '$password');";
        $runQuery = mysqli_query($conn, $sql);
        header("location: login.php");
        // die()

        
    }
} */

/* 
      
            if($_SERVER['REQUEST_METHOD'] === "POST"){
                //  if(count($errors) > 0){
                //      foreach($errors as $err){
                //          if(in_array('please enter a valid email address', $err)){
                //              echo "<p id='valid' style='color:red;'>$err[email_err]</p>";
                //          }
                //         }
                      
                        
                //      }
                if(isset($newerr['email_err']))echo "<p id='valid' style='color:red;'>$newerr[email_err]</p>";
                 } }
                 
             

              if($_SERVER['REQUEST_METHOD'] === "POST"){
                if(isset($newerr['pwd_mismatch_err']))
                echo "<p id='valid' style='color:red;'>{$newerr['pwd_mismatch_err']}</p>";
                if(isset($newerr['pwd_err']))
                echo "<p id='valid' style='color:red;'>{$newerr['pwd_err']}</p>";
                if(isset($newerr['pwd_strangth_err']))
                echo "<p id='valid' style='color:red;'>{$newerr['pwd_strangth_err']}</p>";
                 
             } 

?> */