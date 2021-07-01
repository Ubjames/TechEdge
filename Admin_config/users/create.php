<div class="addusers-wrapper">
            <form action="" method="post" id="postForm">
                <h2>Add User</h2>

                    <div class="usersform">
                    <div style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">
                        <input type="text" name="Uusername" id="Uusername" placeholder="Username " class="magicbox">
                    </div>
                    <div style="animation: fadeInUp 0.5s ease-in 0.1s forwards; visibility:hidden;">
                        <input type="email" name="Uemail" id="Uemail" placeholder="User Email" class="magicbox">
                    </div>
                    
                    <div>
                        <select name="role" id="role" class="magicbox" style="animation: fadeInUp 0.5s ease-in 0.2s forwards; visibility:hidden;">
                            <option style="color:grey;" value="default">Select role</option>
                            <option value="Author">Author</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    
                    <div class="action-button" style="animation: fadeInUp 0.5s ease-in 0.3s forwards; visibility:hidden;">
                        <button class="adduser inactiveButton" type="button" onclick="ConfirmPassword()" id="addUser" disabled>Add User</button>
                        
                    </div>
                </div>
            </form>
        </div>



<?php
  include "../lib/footer.php"
  ?>