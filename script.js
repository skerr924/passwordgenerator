// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeLowercase = document.querySelector(".includeLowercase").value;
var includeUppercase = document.querySelector(".includeUppercase").value;
var includeNumbers = document.querySelector(".includeNumbers").value;
var includeSpecial = dcument.querySelector(".includeSpecial").value;
var charset = [ ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Determine character set based on user inputs 


function generateCharset () {
  //some qualifying information is required 
  if(document.getElementById('includeLowercase').checked | document.getElementById('includeUppercase').checked | 
  document.getElementById('includeNumbers').checked | document.getElementById('includeSpecial').checked {


    if (includeLowercase) {
      charset.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (includeUppercase) {
      charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (includeNumbers) {
      charset.push("0123456789");
    }
    if (includeSpecial) {
      charset.push("!@#$%^&*()+=<>?/");
    }
    
    append (charset);
  
}

//alerts user that sufficient information was not provided 
}else {
  alert ("please provide some qualifying information for your password");
}




//Generate the password using the charset determined above 
function generatePassword() {
  var length = document.querySelector("#selectNum").input;
      charset = generateCharSet ();
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
