
var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log(input)
var shift = parseInt(readline.question('How many letters would you like to shift? '))


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = "";

// function to create shift alphabet; look ahead by "n" amount of characters and wrap back around to the beginning 
function shift() {
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
    }
}


// encoding function, take each letter in the message and find its replacment

function encode(message) {
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result
}




