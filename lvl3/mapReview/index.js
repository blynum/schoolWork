const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squared = nums.map(function (num) {
    return num * num
})

// console.log(squared)

// Challenge 2:
// Given an array of strings, return an array where 
// the first letter of each string is capitalized
// */

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1)

)

// console.log(capitalized)

// Challenge 3:
// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.

// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// */

const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here
const newPokemon = pokemons.map(pokemon => `<p> ${pokemon} </p>`)

// console.log(newPokemon)


const person = {
    name: 'Shuri',
    location: "Wakanda",
    age: 16
}

person.name = "Black Widowundrum"
person.location = "Russia"
person.age = 33


console.log(person)