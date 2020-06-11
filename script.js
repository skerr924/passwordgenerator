// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("password");
var statisticsElem = document.getElementById("statistics");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  
  passwordText.value = retVal;

}

function generatePassword() {
  var length = document.getElementById("selectNum").input
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
