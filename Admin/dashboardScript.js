let main = document.querySelector(".main");
let list = document.querySelector(".list");
let list2 = document.querySelector(".list-2");
let list3 = document.querySelector(".list-3");
let main3 = document.querySelector(".main-3");
let main2 = document.querySelector(".main-2");

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

function dropdownUserDetails() {
  let userdetail = document.querySelector(".user-dropdown-details");

  if(userdetail.style.display == "flex"){
    userdetail.classList.remove("zoomIn");
    userdetail.style.display = "none";
  }
  else{
    userdetail.classList.add("zoomIn");
  userdetail.style.display = "flex";
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

let nav = document.querySelector("nav");
let body = document.querySelector("section");
let control = document.querySelector(".navControl");
let controlbtn = document.querySelector(".navControl > i");

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

control.addEventListener("click", () => {
  let text = document.querySelectorAll(".item");
  let ic = document.querySelectorAll(".ic");

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
});

let first3Elements = [
  document.querySelector(".group-1"),
  document.querySelector(".group-2"),
  document.querySelector(".group-3"),
];

first3Elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    nav.classList.remove("reduce-bar");
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
