let main = document.querySelector(".main");
let list = document.querySelector(".list");
let list2 = document.querySelector(".list-2");
let list3 = document.querySelector(".list-3");
let main3 = document.querySelector(".main-3");
let main2 = document.querySelector(".main-2");
main.onclick = () => {
  let icon = main.childNodes[3];
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
  let icon = main2.childNodes[3];
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
  let icon = main3.childNodes[3];
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
  userdetail.classList.toggle("dropdown");
}
function expandmoreOption() {
  let updown = document.querySelector(".fa-play");
  let moreoption = document.querySelector(".more-option");
  moreoption.classList.toggle("expand-options");
  if (moreoption.className.includes("expand-options")) {
    updown.style.transform = "rotate(-90deg)";
    updown.style.transformOrigin = "0 0";
  } else {
    updown.style.transform = "rotate(90deg)";
    updown.style.transformOrigin = "0 0";
  }
  //
}
