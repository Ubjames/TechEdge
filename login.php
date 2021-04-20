<?php
session_start();
include("connection.php");
if($_SERVER['REQUEST_METHOD'] === 'POST'){
$isUser = false;
$username = mysqli_real_escape_string($conn, $_POST['username']);
if(!empty($username)){
    $query = "SELECT * FROM users WHERE username='$username' LIMIT 1;";
    $run_query = mysqli_query($conn, $query);
    $user_data = mysqli_fetch_assoc($run_query);
    if($user_data){
        $_SESSION['UID'] = $user_data['user_id'];
        $isUser = true;
        echo "<script defer> 
            let usernameScreen = document.querySelector('#login-user');
            usernameScreen.classList.add('login-user');
            console.log(usernameScreen);
            </script>";
        header("location: verify_user.php");
            
    }
}
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
</head>
<body>
    <div class="username-container" id="login-user">
        <div class="group1">
            <img src="Assets/blogassist3.png" alt="" width="150">
            <!-- <h3>BlogAssist</h3> -->
            <p>sign in</p>
        </div>
        <form action="" method="post">
            <div>
                <input class="long-width username" type="text" required name="username" id="UserName">

                <label for="UserName">Enter your username</label>
                <?php
                
                if(isset($_POST['submitUsername'])){

                    if(isset($username) && !$user_data){
                    echo "<p id='username_err'>Incorrect username </p>";
                    echo "<script>
                    document.querySelector('#UserName').focus();
                    </script>";
                } 
            }
            ?>
            </div>
            <div class="group2">
                <a href="users_form.php" id="create-account">Create account</a>    
                <input type="submit" value="Next" name="submitUsername">
            </div>

        </form>

    </div>
    
</body>
</html>