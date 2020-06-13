// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeLowercase = document.querySelector("#includeLowercase");
var includeUppercase = document.querySelector("#includeUppercase");
var includeNumbers = document.querySelector("#includeNumbers");
var includeSpecial = document.querySelector("#includeSpecial");
var charset = "";
var retVal;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Determine character set based on user inputs 


function generateCharset() {
  //some qualifying information is required 
  if (includeLowercase.checked === true || includeUppercase.checked === true ||
    includeNumbers.checked === true || includeSpecial.checked === true) {

    if (includeLowercase.checked) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeUppercase.checked) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers.checked) {
      charset += "0123456789";
    }
    if (includeSpecial.checked) {
      charset += "!@#$%^&*()+=<>?/";
    }

  }

  //alerts user that sufficient information was not provided 
  else {
    alert("please provide some qualifying information for your password");
  }
}

//Generate the password using the charset determined above 
function generatePassword() {
  var retVal = "";
  var length = document.querySelector(".selectNum").value;
  if (length < 8 || length > 128) {
    // return("Please select a password length between 8 and 128");
    alert("Please select a password length between 8 and 128");
  }
  else {
    generateCharset();
    for (var i = 0; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
