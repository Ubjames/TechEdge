<?php 
include('connection.php');
$firstname = "";
$lastname = "";
$username = "";
$email = "";
$password1 = "";
$password2 = "";

if($_SERVER['REQUEST_METHOD'] === "POST"){
    $firstname = mysqli_real_escape_string($conn, $_POST['firstName']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastName']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password1 = mysqli_real_escape_string($conn, $_POST['password1']);
    $password2 = mysqli_real_escape_string($conn, $_POST['password2']);

    
    # for all errors
    # variables
    // $errors = array();
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
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="signup.css"> 
    <script src="https://kit.fontawesome.com/e3e21a4bac.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="fontawesome-free-5.13.1-web/css/all.css">
   
</head>

    <div class="myForm"> 
   
        <!-- <img src="" alt="BlogAssist logo"> -->
        <div class="wraper">
            
        <form method="POST">
            <h2>Create your BlogAssist Account</h2>
            <div class="block-1">
                <div class="firstName">

                    <input class="firstName" class="short-width first-name" type="text" name="firstName" value="<?=$firstname?>" required id="firstName">
                    <label for="firstName">First name</label>
                </div>

        <!-- last name -->
            <div class="lastName">
                <input class="short-width push"  type="text" value="<?=$lastname?>" required name="lastName" id="lastName">
                <label for="lastName">Last name</label>
            </div>
        </div>
    
        <!-- User name -->
            <input class="long-width username" type="text" value="<?=$username?>" required name="username" id="UserName">
            <label for="UserName"> Username</label>

        <!-- email -->
            <input class="long-width " id="email" type="email" value="<?=$email?>" required name="email">
            <label for="email">Email</label>
            <p class="email-error"></p>
            <?php
            if($_SERVER['REQUEST_METHOD'] === "POST"){
                //  if(count($errors) > 0){
                //      foreach($errors as $err){
                //          if(in_array('please enter a valid email address', $err)){
                //              echo "<p id='valid' style='color:red;'>$err[email_err]</p>";
                //          }
                //         }
                      
                        
                //      }
                if(isset($newerr['email_err']))echo "<p id='valid' style='color:red;'>$newerr[email_err]</p>";
                 } 
                 
             ?>
            
    
        <!-- password-->
        <div class="block-1">
            <div class="password">
                <input class="short-width key" type="password" id="Password" value="<?=$password1?>" required name="password1" onclick="showalert()">
                <label for="Password"> Password</label>
            </div> 
    
            <!-- confirm-password-->
            <div class="confirmPassword">
                 
                <input class="short-width push" type="password" value="<?=$password2?>" required name="password2" id="confirm-Password">
                <label for="confirm-Password">Confirm</label>
                <i class="fas fa-eye" id="visibility-checker" onclick="toggleVisibility1()"></i> 
                <p class="password-error"></p>
            </div>
            </div>
             <?php
             if($_SERVER['REQUEST_METHOD'] === "POST"){
                if(isset($newerr['pwd_mismatch_err']))
                echo "<p id='valid' style='color:red;'>{$newerr['pwd_mismatch_err']}</p>";
                if(isset($newerr['pwd_err']))
                echo "<p id='valid' style='color:red;'>{$newerr['pwd_err']}</p>";
                if(isset($newerr['pwd_strangth_err']))
                echo "<p id='valid' style='color:red;'>{$newerr['pwd_strangth_err']}</p>";
                 
             }
             ?>
        
    
        <!-- button-->
            <div class="inline">
                <p id="instead">
                    <span class="signin"> <a href="login.php">Sign in instead</a></span> 
                </p>
                <!-- <input type="submit" id="signup"> -->
                <input type="submit" id="signup" value="Next">
            </div> 

        </form>
            <div> 
                <img src="Assets/svg.png" width="220" style=" margin-top:120px;">

              <!--   ##TO UPLOAD FILES
                <form action="uploads/upload.php" method="POST" enctype="multipart/form-data">
                        <input type="file" name="fileToUpload" id="fileToUpload">
                        <input type="submit" value="Upload image" name="submit"> -->
                

                
                
            </div>

        </div>
        <div class="alertbox">
            <div>
                <div class="closealert">x</div>
                <img src="assets/warning.png" alt="" width="40" style="margin:10px 20px;">
                <p>password must be at least 6 characters or more</p> 
                   <p> password should contain lowercase, uppercase, number </p>
                
            </div>
        </div>
       </div> 
       <script defer src="mainSignup.js">
       </script>