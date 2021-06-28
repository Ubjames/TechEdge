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
let failedAlert = document.querySelector(".failed");
let failedMassage = document.querySelector(".failed p");
let successAlert = document.querySelector(".success");
let successMassage = document.querySelector(".success p");
let divs = [
  document.querySelector(".grid-container"),
  document.querySelector(".grid-container2"),
  document.querySelector(".grid-container3"),
  document.querySelector(".publish"),
];
let iconLogo = document.getElementsByClassName("fa");
if (nav.className.includes("reduce-bar")) {
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
  userdetail.classList.add("zoomIn");
  userdetail.classList.toggle("show-userdetail");

  if (userdetail.className.includes("show-userdetail")) {
    document.body.addEventListener("click", (e) => {
      let ma = document.querySelector("#manage_acct");
      if (e.target == ma) {
        userdetail.classList.remove("show-userdetail");
      }
    });
  }
}

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
  clearInterval(listerner);
  let Uusername = document.querySelector("#Uusername").value;
  let Uemail = document.querySelector("#Uemail").value;
  let role = document.querySelector("#role").value;

  if (Uusername.trim() != "" && Uemail.trim() != "" && role != "default") {
    pcd.style.display = "flex";
    alert.classList.add("slideIn");
    alert.classList.remove("slideOut");
  }
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

  /* document.body.addEventListener('click', (e)=>{
    if(nav.className.includes("showmenu")){
      if(e.target != nav.firstElementChild){
        // nav.classList.toggle("showmenu");
        // console.log(e)
        
      }
    }
  }) */
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
  setPageLoader();
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      removePageLoader();
      contentContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "posts/create.php", true);
  xhr.send();
}
function setPageLoader() {
  document.querySelector(".loader-container").classList.add("forSection");
}
function removePageLoader() {
  document.querySelector(".loader-container").classList.remove("forSection");
}

function loadHomePage() {
  setPageLoader();
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      removePageLoader();
      contentContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "lib/home.php", true);
  xhr.send();
}

/* function managePost() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(document.querySelector("#id"));
      contentContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "posts/manage.php", true);
  xhr.send();
} */

function managePost() {
  let url = "posts/manage.php";
  fetch(url)
    .then((response) => {
      let data = response.text();
      return data;
    })
    .then((data) => {
      updatePosts(data);
    });
}
function updatePosts(data) {
  const parser = new DOMParser();
  const document = parser.parseFromString(data, "text/html");
  let mp_wraper = document.querySelector(".manage_post");
  let grid_container = document.querySelector(".grid-container");
  /* let serialNo = document.querySelector("#sn").innerHTML;
  let postTitle = document.querySelector("#post-title").innerHTML;
  let dateCreated = document.querySelector("#date-created").innerHTML;
  let author = document.querySelector("#author").innerHTML; 
  let actionBtns = document.querySelector(".action-buttons");*/

  fetch("lib/fetchPost.php")
    .then((response) => {
      let postData = response.json();
      return postData;
    })
    .then((postData) => {
      let serialNumber = 0;
      var counter = 0;
      var animDuration = 100;
      for (let i = 0; i < postData.length; i++) {
        serialNumber++;
        counter++;
        animDuration += 100;
        const element = postData[i];
        let SN = document.createElement("div");
        SN.setAttribute("class", "highlight-row");
        SN.setAttribute(
          "style",
          "animation: fadeInUp 0.4s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        grid_container.appendChild(SN);
        SN.innerHTML = serialNumber;

        let PT = document.createElement("div");
        PT.setAttribute("class", "highlight-row");
        PT.setAttribute(
          "style",
          "animation: fadeInUp 0.4s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            " forwards; visibility:hidden;"
        );
        grid_container.appendChild(PT);
        PT.innerHTML = element.title;

        let DC = document.createElement("div");
        DC.setAttribute("class", "highlight-row");
        DC.setAttribute(
          "style",
          "animation: fadeInUp 0.4s ease-in " +
            " " +
            animDuration +
            "ms" +
            " " +
            " forwards; visibility:hidden;"
        );
        grid_container.appendChild(DC);
        DC.innerHTML = element.createdAt;

        let AR = document.createElement("div");
        AR.setAttribute("class", "highlight-row");
        AR.setAttribute(
          "style",
          "animation: fadeInUp 0.4s ease-in " +
            " " +
            animDuration +
            "ms" +
            " " +
            " forwards; visibility:hidden;"
        );
        grid_container.appendChild(AR);
        AR.innerHTML = element.author;

        let BTN = document.createElement("div");
        BTN.setAttribute("class", "action-buttons highlight-row");
        BTN.setAttribute(
          "style",
          "animation: fadeInUp 0.4s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        grid_container.appendChild(BTN);
        BTN.innerHTML =
          '<button onclick="confirmOperation()" type="button" id="publish"><i class="fas fa-check"> </i></button> <button type="button" id="edit"><i class="fas fa-edit"></i></button> <button onclick="confirmOperation()" type="submit" name="delete" id="delete"><i class="fas fa-trash"></i></button>';

        if (counter == 2) {
          SN.classList.remove("highlight-row");
          AR.classList.remove("highlight-row");
          DC.classList.remove("highlight-row");
          BTN.classList.remove("highlight-row");
          PT.classList.remove("highlight-row");
          counter = 0;
        } else {
          SN.classList.add("highlight-row");
          AR.classList.add("highlight-row");
          DC.classList.add("highlight-row");
          BTN.classList.add("highlight-row");
          PT.classList.add("highlight-row");
        }
      }

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(mp_wraper);
      }
    });
}
  var listener;
function addUser(btn) {
     listener = setInterval(() => {
    let Uusername = document.querySelector("#Uusername").value;
    let Uemail = document.querySelector("#Uemail").value;
    let role = document.querySelector("#role").value;
    let addUserBtn = document.querySelector(".adduser");

    if (Uusername.trim() != "" && Uemail.trim() != "" && role != "default") {
      addUserBtn.classList.remove("inactiveButton");
      addUserBtn.removeAttribute("disabled", "disabled");
    } else {
      addUserBtn.classList.add("inactiveButton");
      addUserBtn.setAttribute("disabled", "disabled");
    }
  }, 500);

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };

 xhr.open("GET", "users/create.php", true)
  xhr.send();
  
}
setInterval(()=>{
  if(!contentContainer.firstElementChild.className.includes("addusers-wrapper")){
    clearInterval(listener);
  }
},400)


function addNewUser() {
  let pwd = document.querySelector("#actionPassword").value;
  let Uusername = document.querySelector("#Uusername").value;
  let Uemail = document.querySelector("#Uemail").value;
  let role = document.querySelector("#role").value;

  let pwdErr = document.querySelector(".alert-container > .alert p");
  let form = new FormData();
  form.append("password", pwd);
  form.append("Uusername", Uusername);
  form.append("Uemail", Uemail);
  form.append("role", role);

  let url = "lib/addUser.php";
  let request = new Request(url, {
    method: "POST",
    body: form,
  });
  fetch(request)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      if (!data["password_failed"]) {
        pwdErr.innerText ="";
        closeConfirmBox();
      } else if(data["password_failed"]){
        pwdErr.innerText = data["password_failed"]
      }

      if (data["invalid_user"]) {
        failedAlert.style.display = "flex";
        failedMassage.innerText = data["invalid_user"];
      } else if(data["success"]){
        successAlert.style.display = "flex";
        successMassage.innerText = data["success"];
      }
    });
}

function manageUser() {
  let url = "users/manage.php";
  fetch(url)
    .then((response) => {
      let data = response.text();
      return data;
    })
    .then((data) => {
      configData(data);
    });
}
function configData(data) {
  let parser = new DOMParser();
  let document = parser.parseFromString(data, "text/html");
  let userlist = document.querySelector(".userlist");
  let userGrid = document.querySelector(".grid-container3");

  fetch("lib/fetchUser.php")
    .then((response) => {
      let user = response.json();
      return user;
    })
    .then((user) => {
      let serialNumber = 0;
      var counter = 0;
      var animDuration = 100;
      for (let i = 0; i < user.length; i++) {
        serialNumber++;
        animDuration += 100;
        counter++;
        const element = user[i];
        let SN = document.createElement("div");
        SN.setAttribute(
          "style",
          "animation: fadeInUp 0.5s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        SN.setAttribute("class", "highlight-row");
        userGrid.appendChild(SN);
        SN.innerHTML = serialNumber;

        let UN = document.createElement("div");
        UN.setAttribute(
          "style",
          "animation: fadeInUp 0.5s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        UN.setAttribute("class", "highlight-row");
        userGrid.appendChild(UN);
        UN.innerHTML = element.userName;

        let AD = document.createElement("div");
        AD.setAttribute(
          "style",
          "animation: fadeInUp 0.5s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        AD.setAttribute("class", "highlight-row highlight-row");
        userGrid.appendChild(AD);
        element.role > 0 ? (AD.innerHTML = "Admin") : (AD.innerHTML = "Author");

        let BTN = document.createElement("div");
        BTN.setAttribute("class", "action-buttons");
        BTN.setAttribute(
          "style",
          "animation: fadeInUp 0.5s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        userGrid.appendChild(BTN);
        BTN.innerHTML =
          '<button type="button" id="delete" onclick="confirmOperation()"><i class="fas fa-trash"></i></button>';

        if (counter == 2) {
          SN.classList.remove("highlight-row");
          UN.classList.remove("highlight-row");
          AD.classList.remove("highlight-row");
          BTN.classList.remove("highlight-row");
          counter = 0;
        } else {
          SN.classList.add("highlight-row");
          UN.classList.add("highlight-row");
          AD.classList.add("highlight-row");
          BTN.classList.add("highlight-row");
        }
      }

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(userlist);
      }
    });
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

function configProfile() {
  let url = "lib/setting.php";
  fetch(url)
    .then((response) => {
      let data = response.text();
      return data;
    })
    .then((data) => {
      configProfileData(data);
    });
}

function configProfileData(data) {
  let url = "lib/profileData.php";
  let parser = new DOMParser();
  let document = parser.parseFromString(data, "text/html");

  let myprofile = document.querySelector(".myprofile");
  let userPhoto = document.getElementById("userPhoto");
  let role = document.getElementById("role");
  let sex = document.getElementById("sex");
  let country = document.getElementById("country");
  let bio = document.getElementById("bio");
  let fullname = document.getElementById("fullname");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let regDate = document.getElementById("regDate");

  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      if (
        data["passport"] == "" ||
        data["passport"] == null ||
        data["passport"] == undefined ||
        !data
      ) {
        userPhoto.setAttribute("src", "Assets/placeholder_image.jpg");
      } else {
        userPhoto.setAttribute("src", data["passport"]);
      }

      sex.innerHTML = data["sex"];
      country.innerHTML = data["country"];
      bio.innerHTML = data["profile"];
      email.innerHTML = data["email"];
      phone.innerHTML = data["mobile"];
      address.innerHTML = data["address"];
      username.innerHTML = data["userName"];
      regDate.innerHTML = data["registeredAt"];
      fullname.innerHTML =
        data["lastName"] + " " + data["firstName"] + " " + data["middleName"];
      data["role"] > 0
        ? (role.innerHTML = "Admin")
        : (role.innerHTML = "Author");

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(myprofile);
      }
    });
}

function updateProfile() {
  let url = "lib/updateProfile.php";
  fetch(url)
    .then((response) => {
      let data = response.text();
      return data;
    })
    .then((data) => {
      configUserData(data);
    });
}

function configUserData(data) {
  let url = "lib/profileData.php";
  let parser = new DOMParser();
  let document = parser.parseFromString(data, "text/html");

  let updateWraper = document.querySelector(".update-wraper");
  let userDp = document.getElementById("userDp");
  let sex = document.getElementById("sex");
  let country = document.getElementById("country");
  let bio = document.getElementById("bio");
  let firstName = document.getElementById("firstName");
  let lastname = document.getElementById("lastname");
  let Othernames = document.getElementById("Othernames");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");

  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      userDp.setAttribute("src", data["passport"]);
      sex.value = data["sex"];
      country.value = data["country"];
      bio.value = data["profile"];
      email.value = data["email"];
      phone.value = data["mobile"];
      address.value = data["address"];
      username.value = data["userName"];
      lastname.value = data["lastName"];
      firstName.value = data["firstName"];
      Othernames.value = data["middleName"];

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(updateWraper);
      }
    });
}
window.imageisset = false;
function pickImageToUpload(displaybox) {
  let eyeIcon = document.querySelector(".img-option .fa-eye");
  let file = document.getElementById("fileUpload");
  file.onchange = () => {
    if (file.files[0]) {
      window.imageisset = true;
      // saveUpdate(imageisset);
    }
  };
  let e = window.event;
  if (eyeIcon == e.target) return;
  file.click();
}

//UPDATE USER DATA TO DATABASE
function saveUpdate() {
  let file = document.getElementById("fileUpload");
  if (window.imageisset == true) {
    const form = new FormData();
    const data = file.files[0];
    form.append("file", data);

    const url = "lib/saveUpdate.php";
    const request = new Request(url, {
      method: "POST",
      body: form,
    });
    fetch(request)
      .then((response) => {
        response.json();
        return response;
      })
      .then((response) => {
        // console.log(response);
      });
  }

  let xhr = new XMLHttpRequest();
  let sex = document.getElementById("sex").value;
  let country = document.getElementById("country").value;
  let bio = document.getElementById("bio").value;
  let firstName = document.getElementById("firstName").value;
  let lastname = document.getElementById("lastname").value;
  let Othernames = document.getElementById("Othernames").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  xhr.open("POST", "lib/saveUpdate.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data = `firstname=${firstName}&lastname=${lastname}&username=${username}&email=${email}&phone=${phone}&address=${address}&bio=${bio}&country=${country}&sex=${sex}&middlename=${Othernames}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);

      if (response["failed"]) {
        failedAlert.style.display = "flex";
        failedMassage.innerHTML = response["failed"];
      } else if (response["success"]) {
        successAlert.style.display = "flex";
        successMassage.innerHTML = response["success"];
        document
          .querySelector(".closeSuccMsg")
          .addEventListener("click", () => {
            configProfile();
          });
      }
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.send(data);
}

document.addEventListener("DOMContentLoaded", () => {
  let url = "lib/profileData.php";
  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      loadDataToAppropratePlaces(data);
    });
});

function loadDataToAppropratePlaces(data) {
  let img40px = document.querySelector("#userPhoto40px");
  let img100px = document.querySelector("#userPhoto100px");
  let userNAME = document.querySelector("#user-name");
  let userROLE = document.querySelector("#user-role");

  if (
    data["passport"] == "" ||
    data["passport"] == null ||
    data["passport"] == undefined ||
    !data
  ) {
    img40px.setAttribute("src", "Assets/placeholder_image.jpg");
    img100px.setAttribute("src", "Assets/placeholder_image.jpg");
  } else {
    img100px.setAttribute("src", data["passport"]);
    img40px.setAttribute("src", data["passport"]);
  }
  userNAME.innerHTML = data["firstName"] + " " + data["lastName"];
  data["role"] > 0
    ? (userROLE.innerHTML = "Admin")
    : (userROLE.innerHTML = "Author");
}

function publishPost() {
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  let slug = document.getElementById("slug");
  let metatitle = document.getElementById("metatitle");

  const form = new FormData();
  form.append("title", title.value);
  form.append("content", content.value);
  form.append("slug", slug.value);
  form.append("metatitle", metatitle.value);

  const url = "lib/process_post.php";
  const request = new Request(url, {
    method: "POST",
    body: form,
  });
  fetch(request)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      if (data["failed"]) {
        failedAlert.style.display = "flex";
        failedMassage.innerHTML = data["failed"];
      } else if (data["success"]) {
        successAlert.style.display = "flex";
        successMassage.innerHTML = data["success"];
        document
          .querySelector(".closeSuccMsg")
          .addEventListener("click", () => {
            title.value = "";
            content.value = "";
            slug.value = "";
            metatitle.value = "";
          });
      }
    });
}
