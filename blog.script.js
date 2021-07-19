let index = 0;
let images = [
  `<img class="fadeIn bg-img" src="Admin_config/Assets/images (18).jpeg" alt="">`,
  `<img class="fadeIn bg-img" src="Admin_config/Assets/images (17).jpeg" alt="">`,
  `<img class="fadeIn bg-img" src="Admin_config/Assets/images (19).jpeg" alt="">`,
  `<img class="fadeIn bg-img" src="Admin_config/Assets/images (13).jpeg" alt="">`,
  `<img class="fadeIn bg-img" src="Admin_config/Assets/images (12).jpeg" alt="">`,
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
let dropdownWrapper = document.querySelector(".dropdown-wrapper");
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

function showMobileNav(){
  let mobileNav = document.querySelector('.mobile-nav')
  mobileNav.style.display = 'flex'
}
function closeMobileNav(){
  let mobileNav = document.querySelector('.mobile-nav')
  mobileNav.style.display = 'none'
}

let toTop = document.querySelector("#totop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
