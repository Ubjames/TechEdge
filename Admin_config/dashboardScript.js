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
/* console.log(custombox) */
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
}
function expandCatOption() {
  let updown = document.querySelector(".catangle");
  let catoption = document.querySelector(".cat-option");

  catoption.classList.toggle("expand-cat-options");
  updown.classList.toggle("rotate");
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
  clearInterval(listener);
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
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
  fetch("posts/create.php")
    .then((response) => {
      return response.text();
    })
    .then((res) => {
      loadCategory(res);
    });
}
function setPageLoader() {
  document.querySelector(".loader-container").classList.add("forSection");
}
function removePageLoader() {
  document.querySelector(".loader-container").classList.remove("forSection");
}

// here
function loadHomePage() {
  setPageLoader();
  fetch("lib/home.php")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      autoCounter(data);
    });
}

function autoCounter(data) {
  let parser = new DOMParser();
  let document = parser.parseFromString(data, "text/html");
  let x = document.querySelector(".home-page-wrapper");
  let num_posts = document.querySelector("#postCount");
  let num_users = document.querySelector("#userCount");
  let num_cats = document.querySelector("#catCount");
  let num_media = document.querySelector("#mediaCount");
  let num_comment = document.querySelector("#commentCount");
  let num_fav = document.querySelector("#favCount");
  let num_msg = document.querySelector("#msgCount");
  let num_viewers = document.querySelector("#viewersCount");
  contentContainer.innerHTML = "";
  removePageLoader();
  let magicboxes = document.querySelectorAll(".magicbox");
  let DOMdivs = [
    document.querySelector(".post"),
    document.querySelector(".grid-container2"),
    document.querySelector(".grid-container3"),
    document.querySelector(".publish"),
    document.querySelector(".category"),
  ];
  localStorage.setItem("magicboxes", magicboxes);
  /* if ((onpageloads = !null && onpageloads == "darkmode")){
    magicboxes.forEach((x)=>{
      x.classList.add("container-bg");
    })
 
  DOMdivs.forEach((div) => {
    if (div != null) {
      div.classList.add("fordark");
    }
  }); 

    
} */

  fetch("lib/autoCounter.php")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      num_posts.innerText = res[0]["Number_Of_Posts"];
      num_users.innerText = res[1]["Number_Of_Users"];
      num_cats.innerText = res[2]["Number_Of_categories"];
      num_media.innerText = res[3]["postCovers"];
    });

  contentContainer.appendChild(x);
}

function managePost() {
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
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
  let post_wraper = document.querySelector(".post-wrapper");

  fetch("lib/fetchPost.php")
    .then((response) => {
      let postData = response.json();
      return postData;
    })
    .then((postData) => {
      let animDuration = 100;
      for (let i = 0; i < postData.length; i++) {
        const element = postData[i];

        let post = document.createElement("div");
        post.setAttribute("class", "post");
        post.setAttribute(
          "style",
          `animation: fadeInUp-bigDivs 0.5s ease-in ${animDuration}ms forwards; visibility: hidden`
        );
        post_wraper.appendChild(post);

        let ID = document.createElement("div");
        ID.setAttribute("id", "postId");
        post.appendChild(ID);
        ID.innerText = element.postId;

        let coverPicContainer = document.createElement("div");
        coverPicContainer.setAttribute("class", "picture");
        post.appendChild(coverPicContainer);

        let coverPic = document.createElement("img");
        coverPic.setAttribute("src", element.coverPicture);
        coverPicContainer.appendChild(coverPic);

        let dateCreated = document.createElement("div");
        dateCreated.setAttribute("class", "date-created");
        post.appendChild(dateCreated);
        dateCreated.innerHTML = element.createdAt;

        let author = document.createElement("div");
        author.setAttribute("class", "author");
        post.appendChild(author);
        author.innerHTML = element.author;

        let title = document.createElement("div");
        title.setAttribute("class", "title");
        post.appendChild(title);
        title.innerHTML = element.title;

        let content = document.createElement("div");
        content.setAttribute("class", "content");
        post.appendChild(content);
        element.content.length > 300
          ? (content.innerHTML = element.content.substring(0, 300) + "...")
          : (content.innerHTML = element.content);

        post.innerHTML +=
          '<div class="control-buttons"><button onclick="approvePost(this)" class="publish"><i class="fas fa-check"></i></button><button onclick="viewPost(this)" class="edit"> <i class="fas fa-eye"></i></button><button onclick="deletePost(this)" class="delete"> <i class="fas fa-trash"></i></button></div><div class="mobile-control-buttons"><button class="publish" onclick="approvePost(this)">Publish</button><button class="edit" onclick="viewPost(this)"> View</button><button class="delete" onclick="deletePost(this)"> Delete</button></div>';
        animDuration += 100;
      }

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(post_wraper);
      }
    });
}

var listener;
function addUser(btn) {
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
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

  xhr.open("GET", "users/create.php", true);
  xhr.send();
}
setInterval(() => {
  if (
    !contentContainer.firstElementChild.className.includes("addusers-wrapper")
  ) {
    clearInterval(listener);
  }
  if (!contentContainer.firstElementChild.className.includes("topicForm")) {
    clearInterval(TopicListener);
  }
}, 500);

/* setInterval(() => {

  if (
    contentContainer.firstElementChild.className.includes("add-content-wrapper")
  ) {
    ClassicEditor
    .create( document.querySelector( '#content' ),{
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
        
    } );
    setTimeout(() => {
        let ck = document.querySelector('.ck-blurred')
        
        ck.style.height="400px";
    }, 1000);
  }
}, 500);
 */

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
        pwdErr.innerText = "";
        closeConfirmBox();
      } else if (data["password_failed"]) {
        pwdErr.innerText = data["password_failed"];
      }

      if (data["invalid_user"]) {
        failedAlert.style.display = "flex";
        failedMassage.innerText = data["invalid_user"];
      } else if (data["success"]) {
        successAlert.style.display = "flex";
        successMassage.innerText = data["success"];
      }
    });
}

function manageUser() {
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
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

function manageCa() {
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
let TopicListener;
function createCat() {
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
  TopicListener = setInterval(() => {
    let Ttitle = document.querySelector("#title").value;
    let Tdescr = document.querySelector(".topicDescr").value;
    let Tbtn = document.querySelector(".topicBtn");

    if (
      Ttitle.trim() != "" &&
      Tdescr.trim() != "" &&
      Tdescr != "Add a description"
    ) {
      Tbtn.classList.remove("inactiveButton");
      Tbtn.removeAttribute("disabled", "disabled");
    } else {
      Tbtn.classList.add("inactiveButton");
      Tbtn.setAttribute("disabled", "disabled");
    }
  }, 500);

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };

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

  xhr.open("GET", "lib/setting.php", true);
  xhr.send();
}

function configProfile() {
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
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

    const url = "lib/upload_profile_photo.php";
    const request = new Request(url, {
      method: "POST",
      body: form,
    });
    fetch(request)
      .then((response) => {
        response.json();
        return response;
      })
      .then((res) => {
        console.log(res);
        if (res["failed"]) {
          failedAlert.style.display = "flex";
          failedMassage.innerHTML = res["failed"];
        }
        if (res["success"]) {
          updateOtherInfo();
        }
      });
  } else {
    updateOtherInfo();
  }
  function updateOtherInfo() {
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

    xhr.send(data);
  }
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

var coverImage_isset = false;
function addMedia() {
  let e = window.event;
  e.preventDefault();
  let coverImage = document.querySelector("#coverImage");
  let mediaScreen = document.querySelector(".media-screen");
  coverImage.click();
  coverImage.onchange = () => {
    if (coverImage.files[0]) {
      coverImage_isset = true;

      let reader = new FileReader();
      reader.readAsDataURL(coverImage.files[0]);
      reader.onload = (e) => {
        mediaScreen.style.display = "flex";
        mediaScreen.lastElementChild.setAttribute("src", e.target.result);
      };
    }
  };
}

function removeCoverImage() {
  let coverImage = (document.querySelector("#coverImage").value = "");
  let mediaScreen = (document.querySelector(".media-screen").style.display =
    "none");
  mediaScreen.lastElementChild.setAttribute("src", "");
}

function getCatId(cat) {
  window.catId = cat.parentElement.firstElementChild.textContent;
}

function publishPost() {
  let unCatbtn = document.querySelector(".cat-list #uncat");
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  let slug = document.getElementById("slug");
  let metatitle = document.getElementById("metatitle");
  let coverImage = document.querySelector("#coverImage");

  const form = new FormData();
  form.append("title", title.value);
  form.append("content", content.value);
  form.append("slug", slug.value);
  form.append("metatitle", metatitle.value);
  if (coverImage_isset) {
    let CI = coverImage.files[0];
    form.append("coverImage", CI);
  }
  if (unCatbtn.checked !== true) {
    form.append("catId", window.catId);
  }

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
      } else if (data["invalidImage"]) {
        document.querySelector(".coverImage-error").innerText =
          data["invalidImage"];
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
            coverImage.value = "";

            document.querySelector(".coverImage-error").innerText = "";
            removeCoverImage();
          });
      }
    });
}

function addTopic() {
  let Ttitle = document.querySelector("#title").value;
  let Tdescr = document.querySelector(".topicDescr").value;

  let form = new FormData();
  form.append("title", Ttitle);
  form.append("descr", Tdescr);

  let url = "lib/addTopic.php";
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
      if (data["success"]) {
        successAlert.style.display = "flex";
        successMassage.innerText = data["success"];
        document
          .querySelector(".closeSuccMsg")
          .addEventListener("click", () => {
            document.querySelector("#title").value = "";
            document.querySelector(".topicDescr").value = "";
          });
      } else if (data["failed"]) {
        failedAlert.style.display = "flex";
        failedMassage.innerText = data["failed"];
      }
    });
}

//............
function manageCat() {
  if (nav.className.includes("showmenu")) {
    nav.classList.remove("showmenu");
  }
  fetch("topics/manage.php")
    .then((response) => {
      let cat = response.text();
      return cat;
    })
    .then((cat) => {
      configCatData(cat);
    });
}

function configCatData(cat) {
  let parser = new DOMParser();
  let document = parser.parseFromString(cat, "text/html");
  let catlist = document.querySelector(".catCon");
  let catGrid = document.querySelector(".grid-container2");

  fetch("lib/fetchTopic.php")
    .then((response) => {
      let catData = response.json();
      return catData;
    })
    .then((catData) => {
      let serialNumber = 0;
      var counter = 0;
      var animDuration = 100;
      for (let i = 0; i < catData.length; i++) {
        serialNumber++;
        animDuration += 100;
        counter++;
        const element = catData[i];
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
        catGrid.appendChild(SN);
        SN.innerHTML = serialNumber;

        let catTitle = document.createElement("div");
        catTitle.setAttribute(
          "style",
          "animation: fadeInUp 0.5s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        catTitle.setAttribute("class", "highlight-row titleAndDescr");
        catGrid.appendChild(catTitle);
        catTitle.innerHTML = element.title;

        let catDescr = document.createElement("i");
        catDescr.setAttribute("class", "descr");
        catTitle.appendChild(catDescr);

        element.descr.length > 100
          ? (catDescr.innerText = element.descr.substring(0, 100) + "...")
          : (catDescr.innerText = element.descr);

        let BTN = document.createElement("div");
        BTN.setAttribute("class", "action-buttons highlight-row");
        BTN.setAttribute(
          "style",
          "animation: fadeInUp 0.5s ease-in" +
            " " +
            animDuration +
            "ms" +
            " " +
            "forwards; visibility:hidden;"
        );
        catGrid.appendChild(BTN);
        BTN.innerHTML =
          '<button onclick="confirmOperation()" type="button" name="publish" id="publish"><i class="fas fa-check"></i></button><button type="button" name="edit" id="edit"><i class="fas fa-edit"></i></button><button onclick="confirmOperation()" type="button" name="delete" id="delete"><i class="fas fa-trash"></i></button>';

        if (counter == 2) {
          SN.classList.remove("highlight-row");
          catTitle.classList.remove("highlight-row");
          BTN.classList.remove("highlight-row");
          counter = 0;
        } else {
          SN.classList.add("highlight-row");
          catTitle.classList.add("highlight-row");
          BTN.classList.add("highlight-row");
        }
      }

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(catlist);
      }
    });
}

function showAllCat(btn) {
  let allCat = document.querySelector(".cat-list");
  let mostUsedCat = document.querySelector(".most-used-cat");
  let mostusedBtn = document.querySelector("#mostused-CatBtn");

  if (mostusedBtn.className.includes("activeBtn")) {
    mostusedBtn.classList.remove("activeBtn");
    mostUsedCat.style.display = "none";
    allCat.style.display = "flex";
    btn.classList.add("activeBtn");
  }

  /* if (allCat.style.display == "none" ) {
    allCat.style.display = "flex";
    mostUsedCat.style.display = "none";
  } */
}

function showMostUsed(btn) {
  let mostUsedCat = document.querySelector(".most-used-cat");
  let allCat = document.querySelector(".cat-list");
  let allCatBtn = document.querySelector("#all-CatBtn");
  // let mostusedBtn = document.querySelector("#mostused-CatBtn");

  if (allCatBtn.className.includes("activeBtn")) {
    allCatBtn.classList.remove("activeBtn");
    allCat.style.display = "none";
    mostUsedCat.style.display = "flex";
    btn.classList.add("activeBtn");
  }
}

function deletePost(btn) {
  let confirmOp = confirm(
    "Are you sure want delete this post, this operation can not be undone."
  );
  if (confirmOp == true) {
    let activePostID =
      btn.parentElement.parentElement.firstElementChild.textContent;

    let url = `lib/deletePost.php?postId=${activePostID}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res["success"]) {
          managePost();
        }
      });
  } else {
    return;
  }
}
function viewPost(btn) {
  let e = window.event;
  let activePostID =
    btn.parentElement.parentElement.firstElementChild.textContent;

  let url = `lib/readPost.php?postId=${activePostID}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      let reader = document.createElement("div");
      reader.setAttribute("class", "readerMode");
      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(reader);
      }
      reader.innerHTML += `<div id="postId">${res["postId"]}</div>`;
      reader.innerHTML += `<div class="ctrlBtn">
      <button onclick="approvePost(this)">Approve</button>
      <button onclick="deletePost(this)">Delete</button>
      <button onclick="closeReaderMode()">Close</button> </div>`;
      reader.innerHTML += `<div class="title">${res["title"]}</div>`;
      reader.innerHTML += `    <div class="author-info">
      <div class="author-img">
          <img src="${res["passport"]}" >
      </div>
      <div>
          <div>${res["author"]}</div>
          <div>${res["createdAt"]}</div>
      </div>
  </div>`;
      reader.innerHTML += `<div class="post-body">${res["content"]}</div>
<div class="bottom-ctrlBtn">
  <button onclick="approvePost(this)">Approve</button>
  <button onclick="deletePost(this)">Delete</button>
</div>`;
    });
}

function closeReaderMode() {
  return managePost();
}

function loadCategory(res) {
  let parser = new DOMParser();
  let document = parser.parseFromString(res, "text/html");
  let contentWrapper = document.querySelector(".all-content-wrapper");
  let catList = document.querySelector(".cat-list");

  let url = "lib/fetchTopic.php";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        catList.innerHTML += `<div  style="cursor:pointer";>
                <div id="catId">${element.catId}</div>
              <input type="radio" onclick="getCatId(this)" name="Category" id="${element.title}">
            <label for="${element.title}">${element.title}</label>
              </div>`;
      }

      if (contentContainer.innerHTML != "") {
        contentContainer.innerHTML = "";
      }
      contentContainer.appendChild(contentWrapper);
    });
}

function uncategorized(btn) {
  let cats = document.querySelectorAll(".cat-list input[type=radio]");
  if (btn.checked) {
    cats.forEach((element) => {
      element.setAttribute("disabled", "disabled");
      element.checked = false;
    });
  } else {
    cats.forEach((element) => {
      element.removeAttribute("disabled", "disabled");
    });
  }
}

// FOR CKEDITOR FUNCATINALITY
setTimeout(() => {
  if (
    contentContainer.firstElementChild.className.includes("all-content-wrapper")
  ) {
    let cont = document.querySelector(".all-content-wrapper");
    let scriptLink = document.createElement("script");
    scriptLink = document.createElement("script");
    scriptLink.setAttribute(
      "src",
      "https://cdn.ckeditor.com/ckeditor5/25.0.0/classic/ckeditor.js"
    );

    let script = document.createElement("script");
    script.setAttribute("defer", "defer");

    cont.appendChild(scriptLink);
    cont.appendChild(script);
    script.innerHTML = `        ClassicEditor
    .create( document.querySelector( '#content' ),{
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
        
    } );
    
    setTimeout(() => {
        let ck = document.querySelector('.ck-blurred')
        
        ck.style.height="400px";
    }, 100); `;
  }
}, 1000);

function getMedia() {
  fetch("lib/fetchMedia")
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      let mediaWrapper = document.createElement('div')
          mediaWrapper.setAttribute('class','media-wrapper')

      let animDuration = 100;
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.CoverPicture)
          animDuration+=100;
          mediaWrapper.innerHTML +=
          `<div class="media" style="animation: fadeInUp-bigDivs 0.5s ease-in ${animDuration}ms forwards; visibility: hidden">
          <a href="${element.CoverPicture}">
          <img src="${element.CoverPicture}">
          </a>
        </div>`
        
      }

      if(contentContainer.innerHTML!=''){
        contentContainer.innerHTML ='';
        contentContainer.appendChild(mediaWrapper);
      }

    });
}
