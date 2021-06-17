<?php
include "head.php";
include "admin_config/lib/message.php";
?>
 
<div class="password-container" id="verify-user">
        <div class="group1">
            <div class="profile-picture">
                <img src="Assets/my-pix.png" width="90" alt="">
            </div>
        </div>
        <form >
            <div>
                <input class="long-width username" type="password" required name="password" id="password" onfocus="showChecker()">
                
                <label for="password">Enter your password</label>
                <i class="fas fa-eye" id="visibility-checker" onclick="toggleVisibility2()"></i> 
            </div>

            <div class="group2">
                <input type="checkbox" name="remember_me" id="remember_me">     
                <label for="remember_me">Keep me logged in</label>
                <input type="submit" value="Login">
            </div>

        </form>

    </div>
    <!-- <script defer src="mainSignup.js"></script> -->
</body>
</html>