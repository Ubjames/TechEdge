<?php
session_start();
include("connection.php");
if($_SERVER['REQUEST_METHOD'] === "POST"){
$username = mysqli_real_escape_string($conn, $_POST['username']);
if(!empty($username)){
    $query = "SELECT * FROM users WHERE username='$username' LIMIT 1;";
    $run_query = mysqli_query($conn, $query);
    $user_data = mysqli_fetch_assoc($run_query);
    if($user_data){
        $_SESSION['UID'] = $user_data['user_id'];
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
    <div class="container">
        <div class="group1">
            <h3>BlogAssist</h3>
            <p>sign in</p>
        </div>
        <form action="" method="post">
            <div>
                <input class="long-width username" type="text" required name="username" id="UserName">

                <label for="UserName">Enter your username</label>
                <?php
                if(isset($username) && !$user_data){
                    echo "<p id='username_err'>Incorrect username </p>";
                }
                ?>
            </div>
            <div class="group2">
                <p id="create-account">Create account</p>    
                <input type="submit" value="Next">
            </div>

        </form>

    </div>
    
</body>
</html>