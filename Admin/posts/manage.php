<?php
require_once "../../lib/connection.php";
include "../../lib/head.php";
include "../../lib/header.php";
include "../../lib/nav.php";
?>
       
           <h2>Manage posts</h2>
           <div class="grid-container ">
           
               <div class="col-head">S/N</div>
               <div class="col-head">TITLE</div>
               <div class="col-head">AUTHOR</div>
               <div class="col-head">ACTION</div>
          
                <div style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">1</div>
                <div style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">How to start a blog in 20 Lorem ipsum dolor sit, amet consectetur adipisicing. mins</div>
                <div style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">Ubong James </div>
                <div class="action-buttons" style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility:hidden;">
                    <button onclick="confirmOperation()" type="submit" name="publish" id="publish">
                        <i class="fas fa-check"></i>
                    </button>
                    <button type="submit" name="edit" id="edit"><i class="fas fa-edit"></i></button>
                    <button onclick="confirmOperation()" type="submit" name="delete" id="delete"><i class="fas fa-trash"></i></button>
                </div>
           
            </div>
    

  <?php
  include "../../lib/footer.php"
  ?>