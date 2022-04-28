
// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
};

//fight function (now with parameter for enemy's name, health and attack values )
var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0) {
        //ask player if theyd like to fight or run

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose");

// If player picks 'skip' confirm and stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
    //Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    
        //subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
            }
        }

    //generate random damage value based on players attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    //Log a resulting message to the console so we know that it worked.
console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
);

//Check enemy's health
if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");

    //award player money for winning
    playerInfo.money = playerInfo.money + 20;
    //leave while() loop since enemy is dead
    break;
} else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
}


//remove player's health by subtracting the amount set in the enemy.attack variable
var damage =randomNumber(enemy.attack - 3, enemy.attack)
playerInfo.health = Math.max(0, playerInfo.health - damage);
console.log(
    enemy.name + ' attacked ' + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
);

//check player's health
if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
    //leave while() if player is dead
    break;
} else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }

    } //end of while loop
}; //end of fight function


//Function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.reset();

//fight each enemy-robot by looping over them and fighting one at a time
for(var i = 0; i < enemyInfo.length; i++) {
    //if player is still alive keep fighting
    if (playerInfo.health > 0) {
        //let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        //pick new enemy to fight based on index of enemy.name arry
        var pickedEnemyObj = enemyInfo[i];

        //reset enemy health before starting new figiht
        pickedEnemyObj.health = randomNumber(40, 60);

        //pass the pickedenemy.name variables value into the fight function, where it will assume the value of the enemy.Name parameter
    fight(pickedEnemyObj);

    // if player is still alive and were not at the last enemy in the array
    if (playerInfo.health > 0 && enemyInfo.length - 1) {
        // ask if player wants to use the store before the next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    // if yes take them to the store () function
    if (storeConfirm){
        shop();
    }


    //if the player isn't alive, break out of the loop and let endGame run
    }else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
}
    // after the loop ends, the player is either out of health or enemies to fight, so run the endGame function
endGame();
};

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // If player is still alive, player wins!
if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
}
else {
    window.alert("You've lost your robot in battle.");
}
// ask player if they would like to play again
var playAgainConfirm = window.confirm("Would you like to play agagin?");

if (playAgainConfirm) {
    //restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};

// go to the shop between rounds
var shop = function() {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
// Use switch to carry out the action
switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
    playerInfo.refillHealth();
    break;

case "upgrade":
case "UPGRADE":
    playerInfo.upgradeAttack();
break;

case "leave":
case "LEAVE":
    window.alert("Leaving the store.");
    // do nothing so function will end
    break;
default:
    window.alert("You did not pick a valid option. Try again.");
    // call shop() again to force player to pick a valid option
    shop();
    break;
}
};

// End game functions

// Game infromation / variables 

// player information
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
 },  // comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }else {
            window.alert("You don't have enough money!");
        }
}, // comma!
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.")
        this.attack += 6;
        this.money -= 7;
    }else {
        window.alert("You dont have enough money!");
    }
 }
};

// enemy information
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

// End game information / variables


// Run game
startGame();