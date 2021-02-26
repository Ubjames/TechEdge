<?php
include('../connection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlogAssisit - Admin</title>
    <link rel="stylesheet" href="dashboard.css">
    <link rel="stylesheet" href="../fontawesome-free-5.13.1-web/css/all.css">
    
</head>
<body>

    <div class="header">
        <div class="name-plate">
            <!-- <img src="" alt="logo"> -->
            <h2>BlogAssist</h2>
        </div>
        <div class="user-detail">
            <div class="user-image"></div>
            <span id="user">Ubong James</span>
            <i class="fa fa-angle-down"></i>
        </div>
    </div>

    <div class="body-wraper">
       <nav>
           <div class="group-1">
               <div class="main">
                    <p class="item ">Manage Posts</p>
                    <i class="fa fa-angle-down"></i>
               </div>
                    <div class="list">
                        <div>Manage</div>
                        <div>Add</div>
                    </div>
           </div>
           <p class="item ">Manage Users</p>
           <p class="item ">Manage Topics</p>
       </nav>
       <section>
           <div class="control-buttons">
                <button id="add-post">Add Post</button>
                <button id="manage-post">Manage Post</button>
            </div>
            <div><input type="text" name="" id=""></div>
       </section>
    </div>

    <!-- <form method="POST">
        <div>
            <input type="text" id="title" name="title">
        </div>
        <div>
            <textarea id="content" name="content"></textarea>
        </div>
        <div class="proceed">
            <input type="submit" value=" Draft">
            <input type="submit" value="Publish">
        </div>
    </form> -->
    <script defer>
        // let item = document.querySelectorAll('.item');
        // item.onclick = () => {
        // //    item.classList.remove("active");
        //     console.log(item)
        // };

    </script>
</body>
</html>
