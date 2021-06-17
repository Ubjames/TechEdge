<div class="update-wraper"></div>

<div class="myprofile">
  <div class="wrapped">
    <div style="width: 100%">
      <div
        class="dp"
        style="animation: fadeIn 1s ease-in 300ms forwards; visibility: hidden"
      >
        <i class="fas fa-user"></i>
        <img src="" />
      </div>
    </div>

    <div class="confields">
      <div
        class="magicbox dp-f2"
        style="
          animation: fadeInUp 0.5s ease-in 0ms forwards;
          visibility: hidden;
        "
      >
        <h5>Role</h5>
        <span id="role">Ad</span>
      </div>
      <div
        class="magicbox dp-f1"
        style="
          animation: fadeInUp 0.5s ease-in 100ms forwards;
          visibility: hidden;
        "
      >
        <h5>Gender</h5>
        <span id="sex">---</span>
      </div>

      <div
        class="magicbox dp-f3"
        style="
          animation: fadeInUp 0.5s ease-in 200ms forwards;
          visibility: hidden;
        "
      >
        <h5>Country</h5>
        <span id="country">---</span>
      </div>
    </div>
  </div>

  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 300ms forwards; visibility: hidden"
  >
    <h5>Bio</h5>
    <span id="bio">--</span>
  </div>
  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 300ms forwards; visibility: hidden"
  >
    <h5>Name</h5>
    <span id="fullname">--</span>
  </div>
  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 400ms forwards; visibility: hidden"
  >
    <h5>User name</h5>
    <span id="username">---</span>
  </div>

  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 500ms forwards; visibility: hidden"
  >
    <h5>Email</h5>
    <span id="email">---</span>
  </div>
  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 500ms forwards; visibility: hidden"
  >
    <h5>Mobile Number</h5>
    <span id="phone">---</span>
  </div>
  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 500ms forwards; visibility: hidden"
  >
    <h5>Address</h5>
    <span id="address">---</span>
  </div>

  <div
    class="magicbox f2"
    style="animation: fadeInUp 0.5s ease-in 600ms forwards; visibility: hidden"
  >
    <h5>Account Created on:</h5>
    <span id="regDate">---</span>
  </div>

  <div
    class="mybtn"
    style="animation: fadeInUp 0.5s ease-in 700ms forwards; visibility: hidden"
  >
    <button class="magicbutton2" onclick="updateProfile(this)">
      <i class="fas fa-edit"></i> Update
    </button>
    <button class="magicbutton2" onclick="loadHomePage()">Ok</button>
  </div>
</div>

<script>
  let checkupdate = setInterval(() => {
    let ajaxCon = document.querySelector(".update-wraper");
    if (ajaxCon.innerHTML !== "") {
      setImageDefault();
    }
  }, 500);
  function setImageDefault() {
    let img = document.getElementById("userDp");
    let imgsrc = img.getAttribute("src");
    if (imgsrc == "" || imgsrc == null) {
      document.querySelector(".darkOption").style.display = "flex";
      document.querySelector(".emptyImgIcon").style.display = "block";
      let el = document.querySelector(".darkOption .img-option");
      el.style.display = "flex";
      el.lastElementChild.style.display = "none";
    } else {
      document.querySelector(".darkOption").style.display = "none";
      document.querySelector(".emptyImgIcon").style.display = "none";
      let el = document.querySelector(".darkOption .img-option");
      el.style.display = "none";
      el.lastElementChild.style.display = "block";
      clearInterval(checkupdate);
    }
  }
</script>

<?php
include "../lib/footer.php";
?>
