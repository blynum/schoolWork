// Wait for user's response
const readlineSync = require('readline-sync');

// Wait for user's response.
userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName + '! . You training will now start');

// Starting Line
const user = {
    name: " ",
    alive: true,
    items: [ ],
    hp: 100
}

var enemy = null;
const chanceOfNewEnemy = 0.10;

const char = {
    name: "Charizard",
    loot: "fire-stick",
    ap: 40
}

const luc = {
    name: "Lucario",
    loot:  "metal coat", 
    ap: 30
}

const jig = {
    name: "test",
    loot: "mic",
    ap: 50
}

// At a random time enemies will appear and attack
function meetEnemy (){
    // console.log(user.hp)
    const enemies = [char, luc, jig];
    const newEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    
}

function walk() {
    const odds = Math.random();
    if (odds > .5) {
        console.log('You live to fight another day!');
    } else {
        meetEnemy()
    }
}

function inventory (items){
    if(enemyAttack == char){
        return items.push(char.loot)
    }
    if (enemyAttack == luc){
        return items.push(luc.loot)
    }
    if (enemyAttack == jig){
        return items.push(jig.loot)
    }
}



function hitPoints(hp){
// write a function where user.hp is decreased by enemyAttack
console.log(hp)
}

while(user.alive){
    const userSelect = readlineSync.keyIn('[w],[i],[q],[u]', {limit: "wiqu"})
    if (userSelect == "w"){
        walk()     
    }else if (userSelect == "q"){
        console.log("You're a punk")
        process.end
        break;
    }else if (userSelect == "u"){
        console.log("Get a pokeball")
    }else if (userSelect == "i"){
        console.log("inventory")
        inventory()
    }
    if(meetEnemy === null && Math.random() < chanceOfNewEnemy) {
        enemy = newEnemy()
        console.log(meetEnemy, "attacked")
   }
   if(user.hp < 10){



   }
}



// function userAttack(){}

// user.hp = 

// if
// "w" key was pressed
// console.log('walking'); 


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



