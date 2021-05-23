<?php
require_once "../../lib/connection.php";
include "../../lib/head.php";
include "../../lib/header.php";
include "../../lib/nav.php";
?>

            <form action="" method="post" id="postForm">
                <h2>Add User</h2>
                <div class="usersform">
                    <div style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">
                        <input type="text" name="Uusername" id="Uusername" placeholder="User Name " class="magicbox">
                    </div>
                    <div style="animation: fadeInUp 0.5s ease-in 0.1s forwards; visibility:hidden;">
                        <input type="email" name="Uemail" id="Uemail" placeholder="User Email" class="magicbox">
                    </div>
                
                    <div>
                        <select name="role" id="role" class="magicbox" style="animation: fadeInUp 0.5s ease-in 0.2s forwards; visibility:hidden;">
                            <option style="color:grey;" value="Autor">Select Role</option>
                            <option value="Autor">Author</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    
                    <div class="action-button" style="animation: fadeInUp 0.5s ease-in 0.3s forwards; visibility:hidden;">
                        <button type="button" onclick="ConfirmPassword()" id="addUser">Add User</button>
                
                    </div>
                </div>
            </form>


           