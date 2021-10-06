// Write a loop that prints to the console numbers 0 through 9

for(let i = 1; i < 10; i++) {
    console.log(i)
}

// Write a for loop that prints to the console 9 through 0

for (let i = 9; i > 0; i--){
    console.log(i)
}

// Write a for loop that prints these fruits to the console

const fruit = ["banana", "orange", "apple", "kiwi"]

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// 1. Write a loops that will print out all the name of the people
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// for (var i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)

// }

// 2. write a loop that pushes the names into a names array, and the occupations into an occupations array

const names = [];
const occupations = [];

for (let i = 0; i < peopleArray.length; i++){
    if (peopleArray[i].name){
        names.push(peopleArray[i].name);
    } console.log(names)

    if (peopleArray[i].occupation){
        occupations.push(peopleArray[i].occupation)
    }   console.log(occupations)

    }




// Write a loop that pushes every other name to an array starting with first person - in this case - "Harrison Ford", and every other occupation to another array - in this case - "Singer"