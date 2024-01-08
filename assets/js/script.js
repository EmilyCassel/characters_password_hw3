var generateBtn = document.querySelector("#generate");


function generatePassword(optionsObj){
    var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
    var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
    var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
    var SpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
    "+", "=", "[", "]", "{", "}", "|", "\\", ";", ":", "'", ".", "<", ">", "/", "?"]
  
    var characters=[];

    if (optionsObj.LowerCase){
        characters = characters.concat(LowerCase);
    }

    if (optionsObj.UpperCase){
        characters = characters.concat(UpperCase);
    }

    if (optionsObj.Numbers){
        characters = characters.concat(Numbers);
    }

    if (optionsObj.SpecialCharacters){
        characters = characters.concat(SpecialCharacters);
    }

    for (var i = 0; i < optionsObj.numberOfCharacters; i++){
        var randomSelection = characters[Math.floor(Math.random() * characters.legnth)]

        characters.push(randomSelection)
    }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var wantsUpperCase = confirm("Would you like to use uppercase letters in your password?")
  var wantsLowerCase = confirm("Would you like to use lowercase letters in your password?")
  var wantsNumbers = confirm("Would you like to use numbers in your password?")
  
  var wantsSpecialCharacters = confirm("Would you like to use special characters in your password?")
  var characterNumber = prompt("How long would you like your password to be? Options: 8-128")
  var numberOfCharacters = someInt(numberOfCharacters);

  var options ={
    lowerCase: wantsLowerCase,
    upperCase: wantsUpperCase,
    numbers: wantsNumbers,
    specialCharacters: wantsSpecialCharacters,
    number: numberOfCharacters
  }

  generatePassword(options);

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
