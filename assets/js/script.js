var generateBtn = document.querySelector("#generate");

function generatePassword(optionsObj) {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
        "+", "=", "[", "]", "{", "}", "|", "\\", ";", ":", "'", ".", "<", ">", "/", "?"];

    var characters = [];

    if (optionsObj.lowerCase) {
        characters = characters.concat(lowerCase);
    }

    if (optionsObj.upperCase) {
        characters = characters.concat(upperCase);
    }

    if (optionsObj.numbers) {
        characters = characters.concat(numbers);
    }

    if (optionsObj.specialCharacters) {
        characters = characters.concat(specialCharacters);
    }

    var generatedPassword = ""

    for (var i = 0; i < optionsObj.numberOfCharacters; i++) {
        var randomSelection = characters[Math.floor(Math.random() * characters.length)];
        generatedPassword += randomSelection;
    }

    return generatedPassword

}

function writePassword() {
    var passwordText = document.querySelector("#password");
    var wantsUpperCase = confirm("Would you like to use uppercase letters in your password?");
    var wantsLowerCase = confirm("Would you like to use lowercase letters in your password?");
    var wantsNumbers = confirm("Would you like to use numbers in your password?");
    var wantsSpecialCharacters = confirm("Would you like to use special characters in your password?");

    var characterNumber = prompt("How long would you like your password to be? Options: 8-128");
    var numberOfCharacters = parseInt(characterNumber);

    var options = {
        lowerCase: wantsLowerCase,
        upperCase: wantsUpperCase,
        numbers: wantsNumbers,
        specialCharacters: wantsSpecialCharacters,
        numberOfCharacters: numberOfCharacters
    };

    var password = generatePassword(options)

    passwordText.value = password 

}

generateBtn.addEventListener("click", writePassword);