var form = document.getElementById("myForm")
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userpass");

form.addEventListener("input", function (e) {
    switch (e.target.id) {
        case "userName":
            console.log(e.target.value)
            nameValidation(e.target)
            break;
        case "userEmail":
            emailValidation(e.target)

            break;
        case "userpass":
            passwordValidation(e.target)
            break;
            
            case "usermessage":
                mesageValidation(e.target)
                break;
    }
})
form.addEventListener("submit", function (e) {
  e.preventDefault();
  chechinputs();
});

function chechinputs() {
  var userNameVale = userName.value.trim();
  var userEmailVale = userEmail.value.trim();
  var userPassVale = userPass.value.trim();
  if (userNameVale === "") setErrorFor(userName, "The field is required.");
  else removeErrorIsEmty(userName);
  if (userEmailVale === "") setErrorFor(userEmail,"The field is required.");
  else removeErrorIsEmty(userEmail);
  if (userPassVale === "") setErrorFor(userPass,"The field is required.");
  else removeErrorIsEmty(userPass);
}

function setErrorFor(input, message) {
  var parent = userSubmit.parentElement;
  parent.style.border = "2px solid yellow";
  parent.style.padding="2% 0";
  var formControl = input.parentElement;
  var small = formControl.querySelector("small");
  small.innerText = message;
  small.classList.remove("d-none");
  small.classList.add("text-danger");
}

function removeErrorIsEmty(input) {
  var parent = userSubmit.parentElement;
  parent.style.border = "0px";
  var formControl = input.parentElement;
  var small = formControl.querySelector("small");
  small.classList.add("d-none");
}

function nameValidation(input) {
    var inputValue = input.value.trim()
    if (inputValue.length < 3) showError(input, "Enter at least 3 character")
    else removeError(input)
}

function emailValidation(input) {

    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    console.log(regExp.test(input.value))
    if (regExp.test(input.value) == false) showError(input, "The e-mail address entered is invalid.")
    else removeError(input)

}

function passwordValidation(input) {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(input.value))
    if (strongRegex.test(input.value)) removeError(input)
    else showError(input, "Enter at least 1 uppercase letter , 1 lowercase letter , 1 number , 1 special charater and be 8 character")

}
function mesageValidation(input) {
    var inputValue = input.value.trim()
    if (inputValue.length < 25) showError(input, "Enter at least 25 character")
    else removeError(input)
}


function showError(inputElement, msg) {
    var error = inputElement.nextElementSibling
    error.innerText = msg
    error.classList.remove("d-none")
    error.classList.add("text-danger")
    error.style.fontSize = "14px"
}

function removeError(inputElement) {
    var error = inputElement.nextElementSibling
    error.classList.add("d-none")
}