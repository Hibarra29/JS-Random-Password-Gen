function generatePassword() {

// Array of special characters to be used in password
var specialCharacters = ['!','@','#','$','%','^','&','*','"','(',')','+',',','-','.','/',':',';','<','=','>','?','[',']','^','_','{','}'];

console.log(specialCharacters)

//Array of numeric characters to be included in password
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

console.log(numbers)

//Array of lower case characters to be included in password
var lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

console.log(lowerCased)

//Array of upper case characters to be included in password 
var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

console.log(upperCased)

var possibleCharacters = [];

var characterTypes = function() {

  passwordCriteria.numbers = window.prompt("Would you like to include numbers in password?")

  passwordCriteria.numbers = passwordCriteria.numbers.toNumbers();
  
  if (passwordCriteria.numbers === true) {
    pass
  }
}
  var length = parseInt(prompt("How many characters would you like the password to include?"));
  console.log(length)
  if (length < 8){
    console.log('length is less then 8')
    alert('password must be greater then 8')
    return
  }
  if (length > 128) {
    alert('password must be less then 128')
    return
  }
  if (isNaN(length)) {
    alert("Please put a number")
    return
  }

  var number = confirm("Would you like to include numbers in password?")
  console.log(numbers)

  var lowerCase = confirm('Would you like to inclue lowercase characters?')
  console.log(lowerCased)

  var upperCase = confirm('Would you like to inclue uppercase characters?')
  console.log(upperCased)

  var specialCharacter = confirm('Would you like to inclue special characters')
  console.log(specialCharacters)
  
  if (number === false && lowerCased === false && upperCased === false && specialCharacters === false) {
    return alert("Please select at least one character type.");
  };
  
  
    // Selected group 
  if (lowerCase) {
      possibleCharacters = possibleCharacters.concat(lowerCased);
  }
  if (upperCase) {
      possibleCharacters = possibleCharacters.concat(upperCased);
  }
  if (number) {
      possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (specialCharacter) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
   }
  


let finalPassword = ""
for (var i = 0; i <= length; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  
  finalPassword = finalPassword + possibleCharacters[rng];

return finalPassword;
}

};




// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn) 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);