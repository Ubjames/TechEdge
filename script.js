const signUpbtn = document.querySelector("#signup"); //signupbutton
const passwordField = document.querySelector(".key"); //passwordfield
const lastName = document.querySelector("#lastName"); //lastname field
const email = document.querySelector("#email"); //email field
const firstName = document.querySelector(".firstName"); //firstname feild
// const password = document.querySelector("#password"); //password
const confirmed = document.querySelector("#confirm-password"); //password for confirmation
const passwordErorr = document.querySelector(".password-erorr");
const emailErorr = document.querySelector(".email-erorr");

let failedAlert = document.querySelector(".failed");
let failedMassage = document.querySelector(".failed p");
let successAlert = document.querySelector(".success");
let successMassage = document.querySelector(".success p");

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
  password.oninput = (e) => {
    // console.log(e)
  };
}

function processFormData() {
  let xhr = new XMLHttpRequest();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let userName = document.getElementById("UserName").value;
  let email = document.getElementById("email").value;
  let Password = document.getElementById("Password").value;
  let confirmPassword = document.getElementById("confirm-Password").value;

  xhr.open("POST", "engine/process_signup.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data = `firstName=${firstName}&lastName=${lastName}&username=${userName}&email=${email}&password1=${Password}&password2=${confirmPassword}`;

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
            // document.querySelector("#login-user");
            window.location = "login.php";
          });
      }
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.send(data);
}

function ProcessLogin() {
  let xhr = new XMLHttpRequest();
  let userName = document.getElementById("UserName").value;

  xhr.open("POST", "engine/signin.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data = `username=${userName}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);

      if (response["failed"]) {
        failedAlert.style.display = "flex";
        failedMassage.innerHTML = response["failed"];
      } else if (response[1] !== null) {
        successAlert.style.display = "flex";
        successMassage.innerHTML = response[0].success;
        let verifiedPhoto = document.querySelector("#verifiedPhoto");
        let verifiedNAME = document.querySelector(".userInfo p > span");
        if (response[1].passport =="" || response[1].passport == null) {
          
          verifiedPhoto.removeAttribute('src');
          verifiedPhoto.setAttribute(
            "src",
            "admin_config/Assets/placeholder_image.jpg"
          );
        } else {
          verifiedPhoto.setAttribute(
            "src",
            "admin_config/" + response[1].passport
          );
        }
        verifiedNAME.innerHTML =
          response[1].firstName + " " + response[1].lastName;

        document
          .querySelector(".closeSuccMsg")
          .addEventListener("click", () => {
            let usernameScreen = document.querySelector("#login-user");
            let passwordScreen = document.querySelector("#verify-user");

            passwordScreen.classList.add("slideInRight");
            passwordScreen.style.display = "flex";
            usernameScreen.classList.add("slideOutLeft");
            setTimeout(() => {
              usernameScreen.style.display = "none";
            }, 250);
          });
      }
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.send(data);
}

function verifyUser() {
  let xhr = new XMLHttpRequest();
  let password = document.getElementById("password").value;

  xhr.open("POST", "engine/verify.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data = `password=${password}`;

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
            let passwordScreen = document.querySelector("#verify-user");
            passwordScreen.style.display = "none";
            window.location = "admin_config";
          });
      }
    }
  };
  // xhr.onprogress = () => {
  // };

  xhr.send(data);
}
