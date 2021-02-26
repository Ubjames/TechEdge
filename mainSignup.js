const signUpbtn = document.querySelector("#signup"); //signupbutton
const passwordField = document.querySelector(".key"); //passwordfield
const errMsg = document.querySelector("#valid"); //the <p>text to be highlighted red if false
const lastName = document.querySelector("#last-name"); //lastname field
const email = document.querySelector(".email"); //email field
const firstName = document.querySelector(".firstName"); //firstname feild
const confirmed = document.querySelector("#confirm2"); //2nd password eild for confirmation
const errAlert = document.querySelector(".err");
//  let msgToDisplay = errAlert.innerHTML = "one or more fields are empty";

signUpbtn.addEventListener("submit", (e) => {
  // e.preventDefault()
  errMsg.style.color = "";
  if (lastName.value === "" || email.value === "" || firstName.value === "") {
    //   msgToDisplay;
    // msgToDisplay.style.color="red";
  }

  if (passwordField.value.trim() === "" || passwordField.value.length < 8) {
    errMsg.style.color = "red";
    passwordField.focus();
  }
  if (
    confirmed.value.trim() === passwordField.value &&
    confirmed.value !== ""
  ) {
    return true;
  } else {
    return false;
  }
});

//for toggling password visibity [for confirm password feild]
const password = document.querySelector("#password");
const password2 = document.querySelector("#confirm2");
const Checker2 = document.querySelector("#visibility-checker2");

Checker2.addEventListener("click", confirmPassword);

function confirmPassword() {
  if (
    password2.getAttribute("type") == "password" &&
    password.getAttribute("type") == "password"
  ) {
    Checker2.removeAttribute("class");
    Checker2.setAttribute("class", "fas fa-eye");
    password.removeAttribute("type");
    password.setAttribute("type", "text");
    password2.removeAttribute("type");
    password2.setAttribute("type", "text");
  } else {
    password2.removeAttribute("type");
    password2.setAttribute("type", "password");
    password.removeAttribute("type");
    password.setAttribute("type", "password");
    Checker2.removeAttribute("class");
    Checker2.setAttribute("class", "fas fa-eye-slash");
  }
}

