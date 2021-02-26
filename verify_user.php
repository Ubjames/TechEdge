<?php
session_start();
include('connection.php');
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    if(isset($_SESSION['UID'])){
         $UID = $_SESSION['UID'];
        $query = "SELECT * FROM users WHERE user_id = '$UID' LIMIT 1;";
        $runQuery = mysqli_query($conn, $query);
        $result = mysqli_fetch_assoc($runQuery);
   
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
<div class="container">
        <div class="group1">
            <div class="profile-picture">
                <img src="Assets/my-pix.png" width="90" alt="">
            </div>
        </div>
        <form action="" method="post">
            <div>
                <input class="long-width username" type="password" required name="password" id="password">

                <label for="password">Enter your password</label>
                 <?php
                if($_SERVER['REQUEST_METHOD']==='POST'){
                    

                        if($result['password'] == md5($password)){
                            header("location: dashboard.php");
                        }
                        else{
                            echo "<p id='username_err'>Incorrect password</p>";
                        }
                        
                    
                }
                ?>
            </div>
            <div class="group2">
            <input type="checkbox" name="remember_me" id="remember_me">     
            <label for="remember_me">Keep me logged in</label>
                <input type="submit" value="Login
                ">
            </div>

        </form>

    </div>
    
</body>
</html>