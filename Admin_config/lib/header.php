<?php
include "message.php";
?>

<div class="imgBoard" onclick="closeImg(this)">
  <div class="close">
    <i class="fas fa-times"></i>
  </div>
  <div class="image springZoomIn">
    <img class="realImage" id="imgToView" src="" alt="" />
  </div>
</div>

<div class="floatbox">
  <i class="fas fa-times-circle" onclick="closeMobliesearch()"></i>
  <form action="" method="post">
    <input type="search" name="search" id="mobile-adminsearch" />

    <button class="searchIcon si" type="submit">
      <i class="fas fa-search"></i>
    </button>
  </form>
</div>

<div class="header1">
  <div class="name-plate">
    <a href="javascript:void(0)" onclick="floatMenu()"
      ><i class="fas fa-list"></i
    ></a>
    <a onclick="loadHomePage()" href="javascript:void(0)"><i class="fas fa-home" title="Home"></i></a>
  </div>
  <div class="search-bar">
    <form action="" method="post">
      <input type="search" name="search" id="adminsearch" />
      <input
        type="submit"
        value="Search"
        name="submitsearch"
        id="submitsearch"
      />
      <!-- <div class="loader">
        <span class="fas fa-sync-alt spin"></span>
      </div> -->
      <button class="searchIcon si" type="submit">
        <i class="fas fa-search myicon" onclick="processSeacrch()"></i>
      </button>
    </form>
  </div>

  <div class="H-leftElement">
    <div class="modeSwitcher">
      <div class="mode-thumb" onclick="switchMode()">
        <i class="fas fa-sun"></i>
      </div>
    </div>

    <div class="user-detail" onclick="dropdownUserDetails()">
      <div class="user-image">
        <img id="userPhoto40px" src="">
      </div>
      <div class="online"></div>
    </div>
  </div>

  <!-- drop down user details -->
  <div class="user-dropdown-details">
    <div class="content">
      <div class="image">
       <img id="userPhoto100px" src="">
      </div>
      <span id="user-name"></span>
      <span id="user-role"></span>
      <div class="ctrlBtn">
      <button id="manage_acct" onclick="configProfile()">
        Manage your Account
      </button>
      <button onclick="window.location = '../logout.php'">
      <span>Log out</span>  <i style="color: #b7b7b7" class="fas fa-sign-out-alt"></i> 
      </button>
      </div>
      
    </div>
  </div>
</div>
