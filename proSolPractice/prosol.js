// Write a function that takes an array of numbers and returns the largest (without using Math.max())

function largest(arr){
    let max = arr[0];
    for (i = 1; i < arr.length; i++){
        if (arr[i] > max)
        max = arr[i];
    }

    return max;
}

let arr = [10, 20, 30, 50, 200];
console.log(largest(arr));



// Write a function that takes an array of words and a character and returns each word that has that character present. i.e. lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

// let strings = ["#3", "$$$", "C%4!", "Hey!"]


// strings.forEach(function(string, char){
//     if(strings[i].includes(char)){
//         final.push(strings[i])
//    }
//    return (string)
// })


// // console.log(charFind(strings, "!"))

//     console.log(string("!"))

// const values = ['Belgium', 'Brest', 'Britian']
// const query = 'Be'

// // /.*b.*e.*/
// const re = RegExp(`.*${query.toLowerCase().split('').join('.*')}.*`)

// // [ 'Belgium', 'Brest' ]
// const matches = values.filter(v => v.toLowerCase().match(re))

// console.log(matches)

let strings = ["#3", "$$$", "C%4!", "Hey!"]

function charFind(strings, char){
    const final = [];
    for (i = 0; i < strings.length; i++){
        if(strings[i].includes(char)){
             final.push(strings[i])
        }
    }

    return (final)
}
console.log(charFind(strings, "!"))

// document.write(charFind(char))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function divBy2(num1, num2){
    // if (num1 % num2 === 0){
    //     return "true"
    // }
    return (num1 % num2 === 0)
}

console.log(divBy2(50, 6))
// 