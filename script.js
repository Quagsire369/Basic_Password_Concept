// Jacob Cole Robertson Assignment 3: password generation
var generateBtn = document.querySelector("#generate");

var passwordLength;
var includeLowerCase;
var includeUpperCase;
var includeNumbers;
var includeSpecialChars;
var userChoices;

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = [];
var convertToLowercase = function (letter) {
  return letter.toUpperCase();
};
var uppercaseLetters = lowercaseLetters.map(convertToLowercase);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
async function writePassword() {
  var password = await generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to display custom modal with Yes/No buttons (Proud of this part)
function showModal(message) {
  var modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <p>${message}</p>
      <div class="modal-buttons">
        <button class="modal-button yes">Yes</button>
        <button class="modal-button no">No</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  return new Promise(function(resolve) {
    function closeModal() {
      document.body.removeChild(modal);
    }

    modal.querySelector(".yes").addEventListener("click", function() {
      closeModal();
      resolve(true);
    });

    modal.querySelector(".no").addEventListener("click", function() {
      closeModal();
      resolve(false);
    });
  });
}

// Start Function to generate the user password
async function generatePassword() {
  // Ask for user input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");
    return '';
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  }

  includeLowerCase = await showModal("Will this contain lowercase letters?");
  console.log("Include lowercase letters: " + includeLowerCase);
  includeUpperCase = await showModal("Will this contain uppercase letters?");
  console.log("Include uppercase letters: " + includeUpperCase);
  includeNumbers = await showModal("Will this contain numbers?");
  console.log("Include numbers: " + includeNumbers);
  includeSpecialChars = await showModal("Will this contain special characters?");
  console.log("Include special characters: " + includeSpecialChars);

  // No answer
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars) {
    alert("You must choose at least one criteria.");
    return '';
  }

  // Generate userChoices based on selected criteria
  userChoices = [];
  if (includeLowerCase) {
    userChoices = userChoices.concat(lowercaseLetters);
  }
  if (includeUpperCase) {
    userChoices = userChoices.concat(uppercaseLetters);
  }
  if (includeNumbers) {
    userChoices = userChoices.concat(numbers);
  }
  if (includeSpecialChars) {
    userChoices = userChoices.concat(specialChars);
  }
  console.log(userChoices);

  // Empty variable for the password length
  var passwordBlank = [];

  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var randomChoice = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(randomChoice);
    console.log(randomChoice);
  }

  // Join and return the password
  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
}