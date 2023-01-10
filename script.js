// Function to generate password with user input //
function generatePassword() {

// variables for prompts //
var passwordLength = prompt("Please enter your length of the password,from 10 characters to 64 characters.");
// Validate password length
while (passwordLength < 10 || passwordLength > 64) {
  passwordLength = prompt("Invalid length! Enter a number between 10 and 64:");
}

var upperCase = confirm("Click OK to confirm including uppercase charecters");
var lowerCase = confirm("Click OK to confirm including lowercase charecters");
var numbers  = confirm("Click OK to confirm including numeric characters");
var specialCh = confirm("Click OK to confirm including special characters");
// Validate character types
while (!lowerCase && !upperCase && !numbers && !specialCh) {
  alert("You must select at least one character type!");
  lowerCase = confirm("Include lowercase characters in the password?");
  upperCase = confirm("Include uppercase characters in the password?");
  numbers = confirm("Include numeric characters in the password?");
  specialCh = confirm("Include special characters in the password?");
}

// Array of possible characters to be included in password //
var password = "";

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var allCharacters = [];

// if statements to combine arrays //
if (upperCase === true) {
  allCharacters.push.apply (allCharacters, upperCasedCharacters);
}

if (lowerCase === true) {
  allCharacters.push.apply(allCharacters, lowerCasedCharacters);
}

if (numbers = true) {
  allCharacters.push.apply(allCharacters, numericCharacters);
}

if (specialCh === true) {
  allCharacters.push.apply(allCharacters, specialCharacters);
}


// makes password random and the exact length selected by the user //
for (var i=0; i<passwordLength; i++) {
  var random = Math.floor(Math.random() * allCharacters.length);
  password = password + allCharacters[random];
}


// console.log(generated Password)
return password;
}


//alredy working code 
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


