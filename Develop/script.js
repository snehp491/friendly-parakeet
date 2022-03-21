// Assignment code here
function generatePassword() {
  var length = '';
  while( length < 8 || length > 128) {
    length = prompt('Enter the password length (must be between 8 and 128)');
  }

  var includeLowercase = '';
  while(includeLowercase !== 'y' && includeLowercase !== 'Y' &&
        includeLowercase !== 'n' && includeLowercase !== 'N') {
    includeLowercase = prompt('Should the pasword include lowercase characters? (y/n)');
  }

  var includeUppercase = '';
  while(includeUppercase !== 'y' && includeUppercase !== 'Y' &&
  includeUppercase !== 'n' && includeUppercase !== 'N') {
    includeUppercase = prompt('Should the pasword include uppercase characters? (y/n)');
  }

  var includeNumbers = '';
  while(includeNumbers !== 'y' && includeNumbers !== 'Y' &&
  includeNumbers !== 'n' && includeNumbers !== 'N') {
    includeNumbers = prompt('Should the pasword include numbers? (y/n)');
  }

  var includeSpecial = '';
  while(includeSpecial !== 'y' && includeSpecial !== 'Y' &&
  includeSpecial !== 'n' && includeSpecial !== 'N') {
    includeSpecial = prompt('Should the pasword include special characters? (y/n)');
  }

  var eligibleCharacters = '';
  
  if (includeLowercase === 'y' || includeLowercase === 'Y') {
    eligibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeUppercase === 'y' || includeUppercase === 'Y') {
    eligibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeNumbers === 'y' || includeNumbers === 'Y') {
    eligibleCharacters += '0123456789';
  }

  if (includeSpecial === 'y' || includeSpecial === 'Y') {
    eligibleCharacters += ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  }

  return eligibleCharacters;
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
