<div class="header">
        <div class="name-plate">
            <!-- <img src="" alt="logo"> -->
            <!-- <h2>BlogAssist</h2> -->
            <a href="../home/index.php"><i class="fas fa-home"></i></a>
        </div>
        <div class="search-bar">
            <form action="" method="post">
                <input type="search" name="search" id=adminsearch>
                <input type="submit" value="Search" name="submitsearch" id="submitsearch">
            </form>
        </div>
        <div class="user-detail" onclick="dropdownUserDetails()">
            <div class="user-image">
                <i class="fas fa-user"></i>
                <div class="online"></div>
            </div>            
        </div>

<!-- drop down user details -->
    <div class="user-dropdown-details">

        <div class="content">
            <div class="image">
                <i class="fa fa-user fa-4x" style="margin-right:10px;color:#fff;"></i>
            </div>
            <span id="user">Ubong James</span>
            <span id="user-type">Admin</span>
            <button>Manange your BlogAssist Account</button>
        </div>
    </div>

    </div>