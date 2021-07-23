let index = 0;
let images = [
  `<img class="fadeIn2 bg-img" src="Admin_config/Assets/images (18).jpeg" alt="">`,
  `<img class="fadeIn2 bg-img" src="Admin_config/Assets/images (17).jpeg" alt="">`,
  `<img class="fadeIn2 bg-img" src="Admin_config/Assets/images (19).jpeg" alt="">`,
  `<img class="fadeIn2 bg-img" src="Admin_config/Assets/images (13).jpeg" alt="">`,
  `<img class="fadeIn2 bg-img" src="Admin_config/Assets/images (12).jpeg" alt="">`,
];
let imageElement = document.querySelector(".bg-images");

function changeImages() {
  let dots = document.querySelector(".dots");
  imageElement.innerHTML = images[index];
  index == images.length - 1 ? (index = 0) : index++;

  switch (index) {
    case 0:
      dots.innerHTML = `<div class="active" id="0" onclick="setImage(this)"></div>
          <div id="1" onclick="setImage(this)"></div>
          <div id="2" onclick="setImage(this)"></div>
          <div id="3" onclick="setImage(this)"></div>
          <div id="4" onclick="setImage(this)"></div>`;
      break;
    case 1:
      dots.innerHTML = `
        <div id="0" onclick="setImage(this)"></div>
          <div class="active"id="1" onclick="setImage(this)"></div>
          <div id="2" onclick="setImage(this)"></div>
          <div id="3" onclick="setImage(this)"></div>
          <div id="4" onclick="setImage(this)"></div>`;
      break;

    case 2:
      dots.innerHTML = `<div id="0" onclick="setImage(this)"></div>
          <div id="1" onclick="setImage(this)"></div>
          <div class="active" id="2" onclick="setImage(this)"></div>
          <div id="3" onclick="setImage(this)"></div>
          <div id="4" onclick="setImage(this)"></div>`;
      break;

    case 3:
      dots.innerHTML = `<div id="0" onclick="setImage(this)"></div>
          <div id="1" onclick="setImage(this)"></div>
          <div id="2" onclick="setImage(this)"></div>
          <div class="active" id="3" onclick="setImage(this)"></div>
          <div id="4" onclick="setImage(this)"></div>`;
      break;
    case 4:
      dots.innerHTML = `<div id="0" onclick="setImage(this)"></div>
          <div id="1" onclick="setImage(this)"></div>
          <div id="2" onclick="setImage(this)"></div>
          <div id="3" onclick="setImage(this)"></div>
          <div class="active" id="4" onclick="setImage(this)"></div>`;
      break;
  }
}
function setImage(btn) {
  let id = btn.getAttribute("id");
  imageElement.innerHTML = images[id];
  index = id;
  let alldots = document.querySelectorAll(".dots div");
  alldots.forEach((d) => {
    if (d.className.includes("active")) {
      d.classList.remove("active");
    }
  });
  btn.classList.add("active");
}

setInterval(changeImages, 10000);
let dropdownWrapper = document.querySelector("nav .dropdown-wrapper");

function showTutorials(btn) {
  let tutCon = document.querySelector(".tutorial-dropdown");
  tutCon.classList.toggle("show1");
  dropdownWrapper.style.display = "block";

  dropdownWrapper.addEventListener("click", (e) => {
    if (e.target == dropdownWrapper) {
      tutCon.classList.remove("show1");
      dropdownWrapper.style.display = "none";
    }
  });
}

function showServices() {
  let serCon = document.querySelector(".service-dropdown");
  serCon.classList.toggle("show2");
  dropdownWrapper.style.display = "block";

  dropdownWrapper.addEventListener("click", (e) => {
    if (e.target == dropdownWrapper) {
      serCon.classList.remove("show2");
      dropdownWrapper.style.display = "none";
    }
  });
}
function m_showTutorials() {
  let serCon = document.querySelector(".m-tutorial-dropdown");
  serCon.classList.toggle("m-show1");
}

function m_showServices() {
  let serCon = document.querySelector(".m-service-dropdown");
  serCon.classList.toggle("m-show2");
}

function showMobileNav() {
  let mobileNav = document.querySelector(".mobile-nav");
  mobileNav.style.display = "flex";
}
function closeMobileNav() {
  let mobileNav = document.querySelector(".mobile-nav");
  mobileNav.style.display = "none";
}

let toTop = document.querySelector("#totop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
/* window.onload = function () {
  document.querySelector(".mobile-menu-btn img").parentElement.parentElement.style.width = '40px';
  document.querySelector("nav img").parentElement.parentElement.style.width = '40px'; 

 };*/

function scrollFunction() {
  let navbar = document.querySelector("nav");
  let m_navbar = document.querySelector(".mobile-menu-btn");
  let screenWidth = window.matchMedia("(max-width:450px)");
  let bigScreenWidth = window.matchMedia("(max-width:750px)");
  let imgElement = document.querySelector("nav img")
  let m_imgElement = document.querySelector(".mobile-menu-btn img")
  if (
    (document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300) &&
    screenWidth.matches
  ) {
    m_imgElement.src = "Admin_config/Assets/techedge-logo_longColor.png";
    toTop.style.display = "block";
    m_imgElement.parentElement.parentElement.style.width = '180px'
  } else {
    m_imgElement.src = "Admin_config/Assets/techedge-logo_short.png";
    m_imgElement.parentElement.parentElement.style.width = '40px'
    toTop.style.display = "none";
  }

  //FOR NAV BAR CONTROLL ON SCROLL
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    navbar.classList.add("slideDown");
    navbar.classList.add("nav-scroll");
    document.querySelector(".service-dropdown").style.boxShadow =
      "0px 5px 7px lightgrey";
    document.querySelector(".tutorial-dropdown").style.boxShadow =
      "0px 5px 7px lightgrey";
      imgElement.src = "Admin_config/Assets/techedge-logo_longColor.png";
      if(bigScreenWidth.matches){
        imgElement.src = "Admin_config/Assets/techedge-logo_short.png";
        imgElement.parentElement.parentElement.style.width = '40px'
      }else{
        imgElement.src = "Admin_config/Assets/techedge-logo_longColor.png";
        imgElement.parentElement.parentElement.style.width = '180px'
      }
  } else {
    document.querySelector("nav img").src = "Admin_config/Assets/techedge-logo_short.png";
    document.querySelector("nav img").parentElement.parentElement.style.width = '40px'
    document.querySelector(".service-dropdown").style.boxShadow = "none";
    document.querySelector(".tutorial-dropdown").style.boxShadow = "none";
    navbar.classList.remove("slideDown");
    navbar.classList.remove("nav-scroll");
  }

  if (
    screenWidth.matches &&
    (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
  ) {
    navbar.classList.remove("slideDown");
    navbar.classList.remove("nav-scroll");
    m_navbar.classList.add("slideDown");
    m_navbar.classList.add("nav-scroll");
  } else {
    m_navbar.classList.remove("slideDown");
    m_navbar.classList.remove("nav-scroll");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function nextRecentPost() {
  let posts = document.querySelectorAll(".post");
}
