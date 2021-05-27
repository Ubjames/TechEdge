<?php
require_once "../../lib/connection.php";
include "../../lib/head.php";
include "../../lib/header.php";
include "../../lib/nav.php";
?>


<h2>Manage Users</h2>
<div class="grid-container3 ">
  <div class="col-head">S/N</div>
  <div class="col-head">MEMBERS</div>
  <div class="col-head">ROLE</div>
  <div class="col-head">ACTION</div>

  <div style="animation: fadeInUp 0.5s ease-in 0.2ms forwards; visibility:hidden;">1</div>
  <div style="animation: fadeInUp 0.5s ease-in 0.2ms forwards; visibility:hidden;">James Ubong</div>
  <div style="animation: fadeInUp 0.5s ease-in 0.2ms forwards; visibility:hidden;">Admin</div>
  <div class="action-buttons" style="animation: fadeInUp 0.5s ease-in 0.2ms forwards; visibility:hidden;">
    <button type="submit" name="delete" id="delete" onclick="confirmOperation()">
      <i class="fas fa-trash"></i>
    </button>
</div>
  </div>