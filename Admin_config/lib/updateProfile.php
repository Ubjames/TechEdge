<div class="update-wraper">
<div style="width: 100%" class="profile-picture">

<form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="file" id="fileUpload" style="display:none" >
    <input type="button" name="submit"  id="submit" value="" style="display:none" onclick="uploadPhoto()">
</form>

  <div
    class="dp"
    style="animation: fadeIn 1s ease-in 300ms forwards; visibility: hidden"
    ;
    onclick="pickImageToUpload(this)"
    onmouseover="checkImg(this)"
    onmouseout="removeoption(this)"
  >
    <i class="fas fa-user emptyImgIcon" style="display: none"></i>

    <img id="userDp" src="" alt="" />

    <div
      class="darkOption"
      style="animation: fadeIn 300ms ease-in forwards; visibility: hidden"
    >
      <div class="img-option">
        <i class="fas fa-camera"></i>
        <i class="fas fa-eye" onclick="previewImage()"></i>
      </div>
    </div>
  </div>
</div>

<div class="inputfields">
  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 0ms forwards; visibility: hidden"
  >
    <input type="text" id="firstName" class="input1 inputs magicbox" required />
    <label for="firstName"> First name</label>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 100ms forwards; visibility: hidden"
  >
    <input type="text" id="lastname" class="input1 inputs magicbox" required />
    <label for="lastname"> Last name</label>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 200ms forwards; visibility: hidden"
  >
    <input
      type="text"
      id="Othernames"
      class="input1 inputs magicbox"
      required
    />
    <label for="Othernames"> Other names</label>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 300ms forwards; visibility: hidden"
  >
    <input type="text" id="email" class="input1 inputs magicbox" required />
    <label for="email"> Email</label>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 400ms forwards; visibility: hidden"
  >
    <input type="text" id="username" class="input1 inputs magicbox" required />
    <label for="username"> Username</label>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 500ms forwards; visibility: hidden"
  >
    <select id="country" class="magicbox">
      <option value="default">Country</option>
      <option value="Nigeria">Nigeria</option>
      <option value="USA">USA</option>
      <option value="India">India</option>
      <option value="China">China</option>
    </select>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 600ms forwards; visibility: hidden"
  >
    <input type="text" id="phone" class="input1 inputs magicbox" required />
    <label for="phone"> Phone Number</label>
  </div>

  <div class="magicInputLabel" style="animation: fadeInUp 0.3s ease-in 700ms forwards; visibility: hidden">
    <input type="text" id="address" class="input1 inputs magicbox" required />
    <label for="address"> Address</label>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 800ms forwards; visibility: hidden"
  >
    <select id="sex" class="magicbox">
      <option value="default">Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>

  <div
    class="magicInputLabel"
    style="animation: fadeInUp 0.3s ease-in 900ms forwards; visibility: hidden"
  >
    <p style="color: grey; font-size: 16px; margin-bottom: 5px">
      Tell people more about yourself, keep it simple
    </p>
    <textarea id="bio" class="magicbox" maxlength="100"></textarea>
  </div>
</div>

<div
  class="btn"
  style="animation: fadeInUp 0.3s ease-in 1000ms forwards; visibility: hidden"
>
  <button class="magicbutton2" onclick="saveUpdate(this)"><i class="fas fa-save"></i> <span>Save</span></button>
</div>
</div>


<?php
include "footer.php";
?>