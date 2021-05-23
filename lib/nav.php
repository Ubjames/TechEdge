<body>

    <div class="body-wraper">
      
       <nav>
           <div class="contdiv">
           <div class="group-1">
               <div class="main">
                   <i class="fa fa-edit"></i>
                    <p class="item ">Posts</p>
                    <i class="fas  fa-angle-down ic"></i>
               </div>
                    <div class="list">
                        <a href="../posts/create.php">Add</a>
                        <a href="../posts/manage.php">Manage</a>
                    </div>
           </div>

           <div class="group-2">
               <div class="main-2">
                   <i class="fa fa-users"></i>
                   <p class="item ">Users</p>
                   <i class="fas  fa-angle-down ic"></i>
               </div>
               <div class="list-2">
                    <a href ="../users/create.php">Add</a>
                    <a href ="../users/manage.php">Manage</a>
            </div>
           </div>

           <div class="group-3">
               <div class="main-3">
               <i class="fa fa-poll-h"></i>
                   <p class="item ">Categories</p>
                   <i class="fas  fa-angle-down ic"></i>
               </div>
                <div class="list-3">
                    <a href="../topics/create.php">Add</a>
                    <a href="../topics/manage.php">Manage</a>
                </div>

           </div>
           <div class="group-3">
               <div  class="main-3">
                    <i class="fa fa-tags"></i>
                   <p class="item ">Tags</p>
                  
               </div>

           </div>
           <div class="group-3">
               <div  class="main-3">
               <i class="fa fa-images"></i>
                   <p class="item ">Media</p>
               </div>
           </div>
           <div class="group-3">
               <div  class="main-3">
               <i class="fa fa-thumbtack"></i>
                   <p class="item ">Favourites</p>
               </div>
           </div>
          
           <div class="group-3">
               <div  class="main-3">
               <i class="fa fa-comment-alt"></i>
                   <p class="item ">Comments</p>
                   
               </div>
           </div>

           <div class="group-3">
               <div  class="main-3">
               <i class="fa fa-comment-dots"></i>
                   <p class="item ">Chats</p>
               </div>
           </div>
           <div class="group-3">
               <div  class="main-3">
               <i class="fa fa-trash-alt"></i>
                   <p class="item ">Tash</p>
               </div>
           </div>

           <div class="group-3">
               <div  class="main-3">
               <i class="fa fa-cog"></i>
                   <p class="item ">Settings</p>
               </div>
           </div>
    </div>
           <div class="navControl">
          <i class="fa fa-angle-left"></i>
           </div>
       </nav>
         
        
    <div class="alert-container">
        <div class="alert">
            <h4>For security reasons please enter your password to proceed</h4>
            <form action="">
                    <!-- <p style="color:red; margin-bottom:5px">Incorrect password</p> -->
            <input type="password" name="actionPassword" id="actionPassword" class="magicbox" placeholder="Password">
            
            <div class="confirmButtons">
                <input type="submit" value="Proceed" class="magicbutton" id="proceed" >
                <input type="button" value="Cancel" class="magicbutton" id="cancel" onclick="closeConfirmBox()">
            </div>
            
            </form>
        </div>
    </div>
       
       <section>
          
     