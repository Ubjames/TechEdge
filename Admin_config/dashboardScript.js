let contentContainer = document.querySelector(".body-wraper section");
let nav = document.querySelector("nav");
let body = document.querySelector("section");
let control = document.querySelector(".navControl");
let controlbtn = document.querySelector(".navControl > i");
let main = document.querySelector(".main");
let list = document.querySelector(".list");
let list2 = document.querySelector(".list-2");
let list3 = document.querySelector(".list-3");
let main3 = document.querySelector(".main-3");
let main2 = document.querySelector(".main-2");
let conts = document.getElementsByClassName("magicbox");
let switcher = document.querySelector(".modeSwitcher");
let thumb = document.querySelector(".mode-thumb");
let custombox = document.querySelectorAll(".magicbox");
let divs = [
  document.querySelector(".grid-container"),
  document.querySelector(".grid-container2"),
  document.querySelector(".grid-container3"),
  document.querySelector(".publish"),
];
let iconLogo = document.getElementsByClassName("fa");
if (nav.className.includes("reduce-bar")) {
  console.log("closed");
  iconLogo.forEach((e) => {
    e.setAttribute("title", "new");
  });
}
let floatbox = document.querySelector(".floatbox");
let mobileS_icon = document.querySelector(".search-bar myicon");
let floatboxbtn = document.querySelector(".floatbox button");

let screenWidth = window.matchMedia("(max-width:400px)");
let isnot_screenWidth = window.matchMedia("(min-width:400px)");
let si = document.querySelectorAll(".si");

setInterval(() => {
  if (isnot_screenWidth.matches && si[0].className.includes("s-icon")) {
    floatbox.style.display = "none";
    floatbox.style.transform = "translateY(-100%)";

    si.forEach((el) => {
      el.classList.replace("s-icon", "searchIcon");
    });
  }
}, 100);

function processSeacrch() {
  if (screenWidth.matches) {
    let e = window.event;
    e.preventDefault();

    si.forEach((el) => {
      el.classList.replace("searchIcon", "s-icon");
    });

    floatbox.style.display = "block";
    floatbox.style.transform = "translateY(0%)";
  }
}
function closeMobliesearch() {
  if (screenWidth.matches && floatbox.style.display == "block") {
    floatbox.style.transform = "translateY(-100%)";
    floatbox.style.display = "none";

    si.forEach((el) => {
      el.classList.replace("s-icon", "searchIcon");
    });
  }
}

let is_dark;

let onpageload = localStorage.getItem("theme") || "";
if ((onpageload = !null && onpageload == "darkmode")) {
  is_dark = true;
  thumb.classList.add("mode-toggle");
  thumb.firstElementChild.classList.remove("fa-sun");
  thumb.firstElementChild.classList.add("fa-moon");
  body.classList.add("dark-bg");
  custombox.forEach((el) => {
    el.classList.add("container-bg");
  });
  divs.forEach((div) => {
    if (div != null) {
      div.classList.add("fordark");
    }
  });
} else {
  is_dark = false;
  thumb.firstElementChild.classList.add("fa-sun");
  thumb.firstElementChild.classList.remove("fa-moon");
  thumb.classList.remove("mode-toggle");
  body.classList.remove("dark-bg");
  custombox.forEach((el) => {
    el.classList.remove("container-bg");
  });
  divs.forEach((div) => {
    if (div != null) {
      div.classList.remove("fordark");
    }
  });
}

function switchMode() {
  thumb.classList.toggle("mode-toggle");
  thumb.className.includes("mode-toggle")
    ? (is_dark = true)
    : (is_dark = false);
  if (is_dark) {
    localStorage.setItem("theme", "darkmode");
    thumb.firstElementChild.classList.remove("fa-sun");
    thumb.firstElementChild.classList.add("fa-moon");
    body.classList.add("dark-bg");
    custombox.forEach((el) => {
      el.classList.add("container-bg");
    });
    divs.forEach((div) => {
      if (div != null) {
        div.classList.add("fordark");
      }
    });
  } else {
    localStorage.setItem("theme", "");
    thumb.firstElementChild.classList.add("fa-sun");
    thumb.firstElementChild.classList.remove("fa-moon");
    body.classList.remove("dark-bg");
    custombox.forEach((el) => {
      el.classList.remove("container-bg");
    });
    divs.forEach((div) => {
      if (div != null) {
        div.classList.remove("fordark");
      }
    });
  }
}

main.onclick = () => {
  let icon = main.children[2];
  if (icon.classList.contains("fa-angle-up")) {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
    list.style.height = "0px";
  } else {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
    list.style.height = "80px";
  }
};
main2.onclick = () => {
  let icon = main2.children[2];
  if (icon.classList.contains("fa-angle-up")) {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
    list2.style.height = "0px";
  } else {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
    list2.style.height = "80px";
  }
};
main3.onclick = () => {
  let icon = main3.children[2];
  if (icon.classList.contains("fa-angle-up")) {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
    list3.style.height = "0px";
  } else {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
    list3.style.height = "80px";
  }
};

let userdetail = document.querySelector(".user-dropdown-details");
function dropdownUserDetails() {
  if (userdetail.style.display == "flex") {
    userdetail.classList.remove("zoomIn");
    userdetail.style.display = "none";
  } else {
    userdetail.classList.add("zoomIn");
    userdetail.style.display = "flex";
  }
}
document.body.addEventListener("click", (e) => {
  if (e.path.includes("div.user-dropdown-details")) {
    userdetail.style.display = "none";
  }
});

function expandmoreOption() {
  let updown = document.querySelector(".angle");
  let moreoption = document.querySelector(".more-option");
  moreoption.classList.toggle("expand-options");

  updown.classList.toggle("rotate");
  // updown.style.transform = "rotate(-90deg)";
  // updown.style.transformOrigin = "0 0";
}

body.addEventListener("mouseover", (e) => {
  control.classList.remove("active-nav-control");
});
control.addEventListener("mouseover", (e) => {
  control.classList.add("active-nav-control");
});
nav.addEventListener("mouseover", (e) => {
  let X = e.clientX;
  let Y = e.clientY;

  control.classList.add("active-nav-control");
  // control.classList.remove("active-nav-control");
});

let text = document.querySelectorAll(".item");
let ic = document.querySelectorAll(".ic");
control.addEventListener("click", () => {
  text.forEach((v) => {
    v.classList.toggle("hide");
  });
  ic.forEach((v2) => {
    v2.classList.toggle("hide");
  });

  nav.classList.toggle("reduce-bar");

  if (
    nav.className.includes("reduce-bar") &&
    controlbtn.className.includes("fa-angle-left")
  ) {
    controlbtn.classList.remove("fa-angle-left");
    controlbtn.classList.add("fa-angle-right");
  } else {
    controlbtn.classList.remove("fa-angle-right");
    controlbtn.classList.add("fa-angle-left");
  }
  if (
    list.style.height != "0px" ||
    list2.style.height != "0px" ||
    list3.style.height != "0px"
  ) {
    list.style.height = "0px";
    list2.style.height = "0px";
    list3.style.height = "0px";
  }
});

let first3Elements = [
  document.querySelector(".group-1"),
  document.querySelector(".group-2"),
  document.querySelector(".group-3"),
];

first3Elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    nav.classList.remove("reduce-bar");
    text.forEach((v) => {
      v.classList.remove("hide");
    });
    ic.forEach((v2) => {
      v2.classList.remove("hide");
    });
  });
});

function confirmOperation() {
  let confm = confirm(
    "This operation can not be undone. \nAre you sure you want to Proceed?"
  );
  if (confm == true) {
  }
}

let pcd = document.querySelector(".alert-container");
let alert = pcd.firstElementChild;
function ConfirmPassword() {
  pcd.style.display = "flex";
  alert.classList.add("slideIn");
  alert.classList.remove("slideOut");
}

function closeConfirmBox() {
  alert.classList.remove("slideIn");
  alert.classList.add("slideOut");
  setTimeout(() => {
    pcd.style.display = "none";
  }, 150);
}

// let pushbtn = document.querySelector(".container2 > .header");
function push(pushbtn) {
  let contn = document.querySelector(".container2");

  contn.classList.toggle("expand");
  if (contn.className.includes("expand")) {
    pushbtn.firstElementChild.classList.remove("fa-angle-up");
    pushbtn.firstElementChild.classList.add("fa-minus");
  } else {
    pushbtn.firstElementChild.classList.add("fa-angle-up");
    pushbtn.firstElementChild.classList.remove("fa-minus");
  }
}

function floatMenu() {
  nav.classList.toggle("showmenu");
}

function searching() {
  console.log("searching...");
}

function publish(btn) {
  btn.innerHTML =
    '<div class="loader"><span class="fas fa-sync-alt spin"></span></div>';
}

function processUpdate(btn) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.querySelector(".myprofile").style.display = "none";
      document.querySelector(".update-wraper").innerHTML = xhr.responseText;
      // setImageDefault();
    }
  };
  xhr.onprogress = () => {
    btn.innerHTML =
      '<div class="loader"><span class="fas fa-sync-alt spin"></span></div>';
  };

  xhr.open("GET", "updateProfile.php", true);
  xhr.send();
}

function pickImageToUpload(displaybox) {
  let file = document.getElementById("fileUpload");
  let e = window.event;
  if (file.files[0] && e.target.className.includes("fa-eye")) {
    previewImage();
  } else {
    file.click();
    file.onchange = () => {
      let previewImg = document.querySelector(".dp img");
      previewImg.style.display = "block";
      document.querySelector(".emptyImgIcon").style.display = "none";
      let reader = new FileReader();
      reader.readAsDataURL(file.files[0]);
      reader.onload = (e) => {
        previewImg.setAttribute("src", e.target.result);
      };
    };
  }
}

function showMoreoption(param) {
  document.querySelector(".darkOption").style.display = "flex";
  document.querySelector(".img-option").style.display = "flex";
}
function removeoption(param) {
  document.querySelector(".darkOption").style.display = "none";
  document.querySelector(".img-option").style.display = "none";
}

function previewImage() {
  let img = document.getElementById("userDp").getAttribute("src");
  let imgToView = document.getElementById("imgToView");
  imgToView.setAttribute("src", img);
  document.querySelector(".imgBoard").style.display = "flex";
}

function checkImg(element) {
  showMoreoption(this);
  let img = document.getElementById("userDp").getAttribute("src");
  if (img == "" || img == null) {
    document.querySelector(".img-option").lastElementChild.style.display =
      "none";
    console.log("no image to view");
  } else {
    document.querySelector(".img-option").lastElementChild.style.display =
      "block";
  }
}

function closeImg() {
  let e = window.event;
  if (!e.target.className.includes("realImage")) {
    document.querySelector(".imgBoard").style.display = "none";
  }
}

function createPost() {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  //   btn.innerHTML =
  //     '<div class="loader"><span class="fas fa-sync-alt spin"></span></div>';
  // };

  xhr.open("GET", "posts/create.php", true);
  xhr.send();
}

function loadHomePage() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "lib/home.php", true);
  xhr.send();
}

function managePost() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "posts/manage.php", true);
  xhr.send();
}
function addUser() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "users/create.php", true);
  xhr.send();
}
function manageUser() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "users/manage.php", true);
  xhr.send();
}
function manageCat() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "topics/manage.php", true);
  xhr.send();
}
function createCat() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "topics/create.php", true);
  xhr.send();
}
function manageProfile() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.open("GET", "lib/setting.php", true);
  xhr.send();
}
