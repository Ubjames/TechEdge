<?php
require_once "../../lib/connection.php";
include "../../lib/head.php";
include "../../lib/header.php";
include "../../lib/nav.php";
?>
    <form action="" method="post" id="postForm">
        <h2 style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">Add Topic</h2>
        <div >
            <input type="text" name="topicTitle" id="title" placeholder="Enter title here" class="magicbox" style="animation: fadeInUp 0.5s ease-in 0.1ms forwards; visibility:hidden;">
        </div>
        <div style="animation: fadeInUp 0.5s ease-in 0.2ms forwards; visibility:hidden;">
            <textarea name="topicsDescr" id="content" class="magicbox"> Add a Description </textarea>
        </div>
        <div class="action-button" style="animation: fadeInUp 0.5s ease-in 0.3ms forwards; visibility:hidden;">
            <button type="submit" >Add</button>
        </div>
    </form>