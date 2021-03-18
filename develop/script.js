// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Answer variables
var lengthOfPwd;
var lowercaseOption;
var uppercaseOption;
var numberOption;
var specialCharactersOption;

var start = function() {
// Prompt asking to choose password between 8 and 128 characters
// Ok = next prompt
// Number outside range = Invalid response, please try again
// Cancel = end prompt
var pwdGenerator = function () {
var pwdLength = window.prompt ("Choose a password length between 8 and 128 characters.")
if (parseInt(pwdLength) >= 8 && parseInt(pwdLength) <= 128){
lengthOfPwd = pwdLength
} else {
  window.alert("Invalid response - please try again.")
  pwdGenerator()
}
};

// Prompt asking if you would like to have lowercase letters(1)
// Ok = include lowercase
// cancel = don't include
var lowercase = () => {
  var lowercasePrompt = window.confirm("Would you like to include lowercase letters? Ok for Yes, Cancel for No.");
  if (lowercasePrompt == true) {
    lowercaseOption = true;
  } else {
    lowercaseOption = false;
  }
};


// Prompt asking you would like to have upper case letters(2)
// Ok = include upper case letters
// cancel = don't include

// Prompt asking if you would like to have numbers(3)

// Prompt asking if you would like to include symbols(4)
// Ok = include symbols
// cancel = don't include

// If 1, 2, 3, 4 = yes, generate random password with 1, 2, 3, 4

function oneTwoThreeFour(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for ( var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 3, 4 = yes, 2 = no, generate random password with 1, 3, 4

function oneThreeFour(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 2, 4 = yes, 3 = no, generate random password with 1, 2, 4

function oneTwoFour(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 4 = yes, 2, 3 = no, generate random password with 1, 4

function oneFour(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 3 = yes, 2, 4 = no, generate random password with 1, 3

function oneThree(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 2 = yes, 3, 4 = no, generate random password with 1, 2

function oneTwo(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1 = yes, 2, 3, 4 = no, generate random password with 1

function one(pwd) {
  var password = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 3, 4 = no, 2 = yes, generate random password with 2

function two(pwd) {
  var password = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 4 = no, 2, 3 = yes, generate random password with 2, 3

function twoThree(pwd) {
  var password = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 2, 4 = yes, 1, 3 = no, generate random password with 2, 4

function twoFour(pwd) {
  var password = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 2, 3, 4 = yes, 1 = no, generate random password with 2, 3, 4

function twoThreeFour(pwd) {
  var password = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 2, 4 = no, 3 = yes, generate random password with 3

function three(pwd) {
  var password = "";
  var characters = "0123456789";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 3, 4 = yes, 1, 2 = no, generate random password with 3, 4

function threeFour(pwd) {
  var password = "";
  var characters = "0123456789!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 4 = yes, 1, 2, 3 = no, generate random password with 4

function four(pwd) {
  var password = "";
  var characters = "!@#$%^&*()_+{}[],.<>/;:";
  var charactersPwd = characters.length;
  for (var i = 0; i < pwd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersPwd));
  }
  return password;
}

// If 1, 2, 3, 4 = no, invalid response - please start again