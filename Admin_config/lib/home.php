<div class="home-page-wrapper" style="width: 100%">
  
  <div class="summary">
    <div
      class="magicbox s-data"
      style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility: hidden"
    >
      <div>
        <div class="icon">
          <i class="fas fa-file-invoice"></i>
        </div>
        <h5>Posts</h5>
      </div>
      <h2 id="postCount"></h2>
    </div>
    <div
      class="magicbox s-data"
      style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility: hidden"
    >
      <div>
        <div class="icon">
          <i class="fas fa-users"></i>
        </div>
        <h5>Users</h5>
      </div>
      <h2 id="userCount"></h2>
    </div>
    <div
      class="magicbox s-data"
      style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility: hidden"
    >
      <div>
        <div class="icon">
          <i class="fas fa-th"></i>
        </div>
        <h5>Categories</h5>
      </div>
      <h2 id="catCount"></h2>
    </div>
    <div
      class="magicbox s-data"
      style="animation: fadeInUp 0.5s ease-in 0ms forwards; visibility: hidden"
    >
      <div>
        <div class="icon">
          <i class="fas fa-images"></i>
        </div>
        <h5>Media</h5>
      </div>
      <h2 id="mediaCount"></h2>
    </div>

    <div
      class="magicbox s-data"
      style="
        animation: fadeInUp 0.5s ease-in 200ms forwards;
        visibility: hidden;
      "
    >
      <div>
        <div class="icon">
          <i class="fas fa-comment-alt"></i>
        </div>
        <h5>Comments</h5>
      </div>
      <h2 id="commentCount"></h2>
    </div>

    <div
      class="magicbox s-data"
      style="
        animation: fadeInUp 0.5s ease-in 200ms forwards;
        visibility: hidden;
      "
    >
      <div>
        <div class="icon">
          <i class="fas fa-thumbtack"></i>
        </div>
        <h5>Favourites</h5>
      </div>
      <h2 id="favCount"></h2>
    </div>

    <div
      class="magicbox s-data"
      style="
        animation: fadeInUp 0.5s ease-in 200ms forwards;
        visibility: hidden;
      "
    >
      <div>
        <div class="icon">
          <i class="fas fa-eye"></i>
        </div>
        <h5>Views</h5>
      </div>
      <h2 id="viewersCount"></h2>
    </div>
    <div
      class="magicbox s-data"
      style="
        animation: fadeInUp 0.5s ease-in 200ms forwards;
        visibility: hidden;
      "
    >
      <div>
        <div class="icon">
          <i class="fas fa-inbox"></i>
        </div>
        <h5>Inbox</h5>
      </div>
      <h2 id="msgCount"></h2>
    </div>
  </div>

  
<!-- graphical presentation (charts) and toehr info -->
  <div
    class="bottom-section"
    style="animation: fadeIn 0.5s ease-in 250ms forwards; visibility: hidden"
  >
    <div class="chart-box magicbox"></div>
    <div class="container1 magicbox"></div>
    <div class="container2 magicbox">
      <div onclick="push(this)" class="header">
        <i class="fas fa-angle-up"></i>
      </div>
    </div>
  </div>
</div>
<?php
include "../lib/footer.php";
?>
