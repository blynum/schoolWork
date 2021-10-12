// Starting Line
const user = {
    alive: true,
    inventory: [ ],
    hp: 100

}

// At a random time enemies will appear and attack
function enemyAttack (){
    const enemies = [Charizard, Lucario, Jigglypuff]
    return enemies[Math.floor(Math.random() * enemies.length)];
}

// const readline = require("readline-sync")
// Wait for user's response
const readlineSync = require('readline-sync');
 
// Wait for user's response.
const userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName + ' to the greatest adventure of your life');
while(user.alive){
    
    readlineSync.keyIn('Please press W to walk...', {limit: "w"})
    if(enemyAttack < 2) {
        function userOptions(attack, run){
            
        }
        

    } else {
        console.log('you keep walking')
    }
    user.alive = false
}
// if
    // "w" key was pressed
    console.log('walking'); 


// User Presses "w" and get console.log "walking"
// document.addEventListener('keydown', logKey);
// function logKey(e) {
// console.log(e.key);
// if(e.key=="w")console.log("gotcha!");
// }


// while(user presses "w" walking will continue to show)

// while(stillWalk === pressing the "w"){
    // const stillWalk = console.log('still walking')
// }

// function getRandomNum(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomNum(3));






// user will be given the option to attack or run
    // const userAction = [attack, run]
// if(){

// }
// if(){

// }

// }


// If player kills the enemy give player some HP and special item. *Should use a while loop


// If player dies,



// If player presses "p" or print,