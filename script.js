const signUpbtn = document.querySelector("#signup"); //signupbutton
const passwordField = document.querySelector(".key"); //passwordfield
const lastName = document.querySelector("#lastName"); //lastname field
const email = document.querySelector("#email"); //email field
const firstName = document.querySelector(".firstName"); //firstname feild
// const password = document.querySelector("#password"); //password
const confirmed = document.querySelector("#confirm-password"); //password for confirmation
const passwordErorr = document.querySelector(".password-erorr");
const emailErorr = document.querySelector(".email-erorr");

/* signUpbtn.addEventListener("click", (e) => {
  if (
    lastName.value.trim() === "" ||
    email.value.trim() === "" ||
    firstName.value.trim() === ""
  ) {
    lastName.focus();
    e.preventDefault();
  }

  if (password.value.length < 8) {
    // errMsg.style.color = "red";
    password.focus();
    e.preventDefault();
  }else if (confirmed.value.trim() !== password.value) {
    e.preventDefault();
    return false;
  }
}); */

//for toggling password visibity [for confirm password feild]
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const Checker = document.querySelector("#visibility-checker");

function toggleVisibility1() {
  
  if (
    password.getAttribute("type") == "password" &&
    confirmPassword.getAttribute("type") == "password"
  ) {
    Checker.setAttribute("class", "fas fa-eye-slash");
    password.setAttribute("type", "text");
    confirmPassword.setAttribute("type", "text");
  } else {
    Checker.setAttribute("class", "fas fa-eye");
    password.setAttribute("type", "password");
    confirmPassword.setAttribute("type", "password");
  }
}
function toggleVisibility2() {
  if (password.getAttribute("type") == "password") {
    Checker.setAttribute("class", "fas fa-eye-slash");
    password.setAttribute("type", "text");
  } else {
    Checker.setAttribute("class", "fas fa-eye");
    password.setAttribute("type", "password");
  }
}

function showalert() {
  let alertbox = document.querySelector(".alertbox");
  let closealert = document.querySelector(".closealert");
  alertbox.classList.add("showalert");
  closealert.addEventListener("click", () => {
    alertbox.classList.remove("showalert");
  });
}

function showChecker() {
  setInterval(() => {
    Checker.style.visibility = "visible";
  }, 1000);
  password.oninput = (e)=>{
    // console.log(e)
  }
}
