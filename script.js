// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeLowercase = document.querySelector("#includeLowercase");
var includeUppercase = document.querySelector("#includeUppercase");
var includeNumbers = document.querySelector("#includeNumbers");
var includeSpecial = document.querySelector("#includeSpecial");
var charset = "";
var retVal;

// Write password to the #password output box 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Determine character set based on user inputs 
function generateCharset() {
  //ensure that qualifying information is provided by checking some of the requirement boxes are filled out 
  if (includeLowercase.checked === true || includeUppercase.checked === true ||
    includeNumbers.checked === true || includeSpecial.checked === true) {

      //adds elements to the charset depending on which checkmarks are selected 
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

  //alerts user if sufficient information was not provided 
  else {
    alert("Looks like you didn't give us enough information. What type of characters do you need in your password?");
  }
}

//Generate the password using the charset determined above 
function generatePassword() {
  var retVal = "";
  var length = document.querySelector(".selectNum").value;
  if (length < 8 || length > 128) {
    // generates alert to prompt the user to go back and select an appropriate character length
    alert("Oops! We only generate password between 8 and 128 characters long. Try again!");
  }
  //generates the character set of the correct/requested length 
  else {
    generateCharset();
    for (var i = 0; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  }
  //returns the value to the output box 
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
