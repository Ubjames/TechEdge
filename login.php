<?php
include "head.php";
include "admin_config/lib/message.php";
?>

    <div class="wraper slideInRight" id="login-user">
        
        <form>
        <div class="title">
            <h2>TechEdge</h2>
            <p>Sign In</p>
        </div>
            <div class="username feild">
                <input type="text" required id="UserName">
                <label for="UserName"> Enter your Username</label>
            </div>

            <div class="block">
                <a href="signup.php" id="create-account">Create account</a>    
                <button class="magicbutton2" onclick="ProcessLogin()" type="button">Next</button>
            </div>

        </form>

    </div>






    <!-- password -->

    <div class="wraper slideInRight" id="verify-user">
     <form>
         <div class="userInfo">
            <div class="profile-picture">
                <img id="verifiedPhoto" src="" alt="user's profile picture">
            </div>
            <p>Welcome <span>__</span></p>
        </div>
            <div class="password feild" >
                <input type="password" required name="password" id="password" onfocus="showChecker()">
                
                <label for="password">Enter your password</label>
                <i class="fas fa-eye" id="visibility-checker" onclick="toggleVisibility2()"></i> 
            </div>

            <div class="block Conbtn">
                <div class="RM">
                    <input type="checkbox" id="remember_me">     
                    <span style="margin-left: -10px;">Remember me</span>
                </div>
                <button class="magicbutton2" onclick="verifyUser()" type="button">Login</button>
            </div>
        </form>


    </div> 
    






</body>
</html>