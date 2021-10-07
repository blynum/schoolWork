// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// let welcome = "hello"
// console.log(welcome)

function capLow (greet){
    return greet.toUpperCase().concat(greet.toLowerCase())
}
console.log(capLow("heLLo"))

// function foo (str) {
//     console.log(str.toUppercase() + "" + str.toLowerCase())
// }

// foo("hello","hello")