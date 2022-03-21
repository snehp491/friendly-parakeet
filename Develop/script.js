// Assignment code here
function generatePassword() {
  var length = '';
  while( length < 8 || length > 128) {
    length = prompt('Enter the password length (must be between 8 and 128)');
  }

  return 'hello';
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
