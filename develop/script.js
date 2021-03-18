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

// Prompt asking to choose password between 8 and 128 characters
// Ok = next prompt
// Number outside range = Invalid response, please try again
// Cancel = end prompt

// Prompt asking if you would like to have lowercase letters(1)
// Ok = include lowercase
// cancel = don't include

// Prompt asking you would like to have upper case letters(2)
// Ok = include upper case letters
// cancel = don't include

// Prompt asking if you would like to have numbers(3)

// Prompt asking if you would like to include symbols(4)
// Ok = include symbols
// cancel = don't include

// If 1, 2, 3, 4 = yes, generate random password with 1, 2, 3, 4

// If 1, 3, 4 = yes, 2 = no, generate random password with 1, 3, 4

// If 1, 2, 4 = yes, 3 = no, generate random password with 1, 2, 4

// If 1, 4 = yes, 2, 3 = no, generate random password with 1, 4

// If 1, 3 = yes, 2, 4 = no, generate random password with 1, 3

// If 1, 2 = yes, 3, 4 = no, generate random password with 1, 2

// If 1 = yes, 2, 3, 4 = no, generate random password with 1

// If 1, 3, 4 = no, 2 = yes, generate random password with 2

// If 1, 4 = no, 2, 3 = yes, generate random password with 2, 3

// If 2, 4 = yes, 1, 3 = no, generate random password with 2, 4

// If 2, 3, 4 = yes, 1 = no, generate random password with 2, 3, 4

// If 1, 2, 4 = no, 3 = yes, generate random password with 3

// If 3, 4 = yes, 1, 2 = no, generate random password with 3, 4

// If 4 = yes, 1, 2, 3 = no, generate random password with 4

// If 1, 2, 3, 4 = no, invalid response - please start again