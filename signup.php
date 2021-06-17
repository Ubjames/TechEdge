<?php
include_once "head.php";
include "admin_config/lib/message.php";
?>

        <div class="wraper">
        <form>
            <h2 style="color:grey; margin:-10px 0 10px 0">Sign up for <span style="color:2669fc">TechEdge</span></h2>

            <div class="block">
                <!-- first name -->
                <div class="firstName feild" >
                    <input type="text" required id="firstName" >
                    <label for="firstName">First name</label>
                </div>
                
                <!-- last name -->
                <div class="lastName feild">
                    <input type="text" required id="lastName" >
                    <label for="lastName">Last name</label>
                </div>
            </div>
    
        <!-- User name -->
        <div class="username feild">
            <input type="text" required id="UserName">
            <label for="UserName"> Username</label>
        </div>

        <div class="email feild">
            <!-- email -->
            <input id="email" type="email" required>
            <label for="email">Email</label>
            <p class="email-error"></p>
        </div>
            
    
            <div class="block">
            <!-- password-->
                <div class="password feild">
                    <input type="password" id="Password" required>
                    <label for="Password"> Password</label>
                </div> 
    
            <!-- confirm-password-->
                <div class="confirmPassword feild">
                    
                    <input type="password" value="" required  id="confirm-Password">
                    <label for="confirm-Password">Confirm</label>
                    <i class="fas fa-eye" id="visibility-checker" onclick="toggleVisibility1()"></i> 
                    <p class="password-error"></p>
                </div>
            </div>
    
        <!-- button-->
            <div class="block btnz">
                <a href="login.php">Sign in instead</a>
                
                <button class="magicbutton2" onclick="processFormData()" type="button" id="signup">Next</button>
            </div> 

        </form>
    </div>
            <!-- <div> 
                <img src="admin_config/Assets/svg.png" width="220" style=" margin-top:120px;">

                ##TO UPLOAD FILES
                <form action="uploads/upload.php" method="POST" enctype="multipart/form-data">
                        <input type="file" name="fileToUpload" id="fileToUpload">
                        <input type="submit" value="Upload image" name="submit"> 
                

                
                
             -->

       </body>
</html>