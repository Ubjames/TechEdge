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
    <a href="../home/index.php"><i class="fas fa-home"></i></a>
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
        <i class="fas fa-user"></i>
        <div class="online"></div>
      </div>
    </div>
  </div>

  <!-- drop down user details -->
  <div class="user-dropdown-details">
    <div class="content">
      <div class="image">
        <i class="fa fa-user fa-4x" style="margin-right: 10px; color: #fff"></i>
      </div>
      <span id="user">Ubong James</span>
      <span id="user-type">Admin</span>
      <button onclick="window.location='../setting.php'">
        Manange your Account
      </button>
    </div>
  </div>
</div>
