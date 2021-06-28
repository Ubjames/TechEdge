<body onload="loadHomePage()">

    <div class="body-wraper">
      
       <nav class="floatmenu">
           <div class="contdiv">
           <div class="group-1">
               <div class="main">
                   <i class="fa fa-edit"></i>
                    <p class="item ">Posts</p>
                    <i class="fas  fa-angle-down ic"></i>
               </div>
                    <div class="list">
                        <a onclick="createPost()" href="javascript:void(0)">Add</a>
                        <a onclick="managePost()" href="javascript:void(0)">Manage</a>
                    </div>
           </div>

           <div class="group-2">
               <div class="main-2">
                   <i class="fa fa-users"></i>
                   <p class="item ">Users</p>
                   <i class="fas  fa-angle-down ic"></i>
               </div>
               <div class="list-2">
                    <a onclick="addUser(this)" href ="javascript:void(0)">Add</a>
                    <a onclick="manageUser()" href ="javascript:void(0)">Manage</a>
            </div>
           </div>

           <div class="group-3">
               <div class="main-3">
               <i class="fa fa-poll-h"></i>
                   <p class="item ">Categories</p>
                   <i class="fas  fa-angle-down ic"></i>
               </div>
                <div class="list-3">
                    <a onclick="createCat()" href="javascript:void(0)">Add</a>
                    <a onclick="manageCat()" href="javascript:void(0)">Manage</a>
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

           <div class="group-3" onclick="configProfile()">
               <div  class="main-3">
               <i class="fa fa-cog"></i>
                   <p class="item ">Profile</p>
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
            <form>
                    
            <input type="password" name="password" id="actionPassword" class="magicbox" placeholder="Password">
            <p style="color:red; margin-top:-1em; margin-bottom:5px;" class="passwordErr"></p>
            <div class="confirmButtons">
                <input type="button" value="Proceed" class="magicbutton" id="proceed" onclick="addNewUser()">
                <input type="button" value="Cancel" class="magicbutton" id="cancel" onclick="closeConfirmBox()">
            </div>
            
            </form>
        </div>
    </div> 
       <section>
  