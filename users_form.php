<?php 
include('connection.php');
if($_SERVER['REQUEST_METHOD'] === "POST"){
    $firstname = mysqli_real_escape_string($conn, $_POST['firstName']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastName']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password1 = mysqli_real_escape_string($conn, $_POST['password1']);
    $password2 = mysqli_real_escape_string($conn, $_POST['password2']);

    # for all errors
    # variables
    $errors = array();
    $matches = false;

    #check if both passwords are the same 
    if($password1 === $password2){
        $matches = true;
    }else{
        array_push($errors, array('pwd_mismatch_err' => "password didn't match")); 
    }
    
    #check for password length
    if($matches ===true && strlen($password1) < 7 ){
        array_push($errors, array('pwd_err' => "password must be at least 8 character or more")); 
    }

    #check if password contains numbers, specialCHAR, lower/upperCase
    $uppercase = preg_match('@[A-Z]@', $password1);
    $lowercase = preg_match('@[a-z]@', $password1);
    $numbers = preg_match('@[0-9]@', $password1);
    $specialChar = preg_match('@[^\w]@', $password1);

    if($matches===true && !$username || !$lowercase || !$numbers || !$specialChar){
        array_push($errors, array('pwd_strangth_err' => "password should contain lowercase, uppercase, number and symbol")); 
    }
    
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        array_push($errors,  array("email_err" => "please enter a valid email address"));
        
    }
    
    if(count($errors) == 0){ 
        $password = md5($password2);    
        $sql = "INSERT INTO users(`firstname`, `lastname`, `username`, `email`, `password`) VALUES('$firstname', '$lastname', '$username', '$email', '$password');";
        $runQuery = mysqli_query($conn, $sql);
        header("location: signin.php");
        // die()

        
    }
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="signup.css"> 
    <!-- <script src="https://kit.fontawesome.com/e3e21a4bac.js" crossorigin="anonymous"></script> -->
   <script defer src="mainSignup.js"></script>
</head>

    <div class="myForm"> 
   
        <!-- <img src="" alt="BlogAssist logo"> -->
        <div class="wraper">
            
        <form method="POST">
            <h2>Create your BlogAssist Account</h2>
            <br>
                <div class="firstName">

                    <input class="firstName" class="short-width first-name" type="text" name="firstName" required id="firstName">
                    <label for="firstName">First name</label>
                    </div>

                        <!-- last name -->
            <div class="lastName">
                <input class="short-width push"  type="text" required name="lastName" id="lastName">
                <label for="lastName">Last name</label>
            </div>
    
        <!-- User name -->
            <input class="long-width username" type="text" required name="username" id="UserName">
            <label for="UserName"> Username</label>

        <!-- email -->
            <input class="long-width " id="email" type="email" required name="email">
            <label for="email">Email</label>
            <?php
            if($_SERVER['REQUEST_METHOD'] === "POST"){
                 if(count($errors) > 0){
                     foreach($errors as $err){
                         if(in_array('please enter a valid email address', $err)){
                             echo "<p id='valid' style='color:red;'>$err[email_err]</p>";
                         }
                        }
                      
                        
                     }
                 } 
                 
             ?>
            <!-- <p class="email-error"></p> -->
    
        <!-- password-->
            <div class="password">
                <input class="short-width key" type="password" id="Password" required name="password1">
                <label for="Password"> Password</label>
            </div> 
    
            <!-- confirm-password-->
            <div class="confirmPassword">
                <i class="fas fa-eye-slash" id="visibility-checker2"></i>  
                <input class="short-width push" type="password" required name="password2" id="confirm-Password">
                <label for="confirm-Password">Confirm</label>
            </div>
             <?php
             if($_SERVER['REQUEST_METHOD'] === "POST"){
                 if(count($errors) > 0){
                    foreach($errors as $err){
                        if($matches===false && in_array("password didn't match", $err)){
                            echo "<p id='valid' style='color:red;'>$err[pwd_mismatch_err]</p>";
                         }

                        if($matches && in_array("password must be at least 8 character or more", $err)){
                            echo "<p id='valid' style='color:red;'>$err[pwd_err]</p>";
                        }

                        if($matches && in_array('password should contain lowercase, uppercase, number and symbol', $err)){ 
                            echo "<p id='valid' style='color:red;'>$err[pwd_strangth_err]</p>";
                        }
                    }
                 }
             }
             ?>
        
    
        <!-- button-->
            <div class="inline">
                <p id="instead">
                    <span class="signin"> <a href="#">Sign in instead</a></span> 
                </p>
                <!-- <input type="submit" id="signup"> -->
                <input type="submit" id="signup" value="Next">
            </div> 

        </form>
            <div> 

              <!--   ##TO UPLOAD FILES
                <form action="uploads/upload.php" method="POST" enctype="multipart/form-data">
                        <input type="file" name="fileToUpload" id="fileToUpload">
                        <input type="submit" value="Upload image" name="submit"> -->
                 </form>

                
                
            </div>

        </div>
       </div> 