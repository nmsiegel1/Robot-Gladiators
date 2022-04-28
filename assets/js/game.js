var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        //ask player if theyd like to fight or run

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose");

// If player picks 'skip' confirm and stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
    //Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    
        //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10
            console.log("playerMoney", playerMoney);
            break;
            }
        }

    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//Check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    //award player money for winning
    playerMoney = playerMoney + 20;
    //leave while() loop since enemy is dead
    break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}


//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + ' attacked ' + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    //leave while() if player is dead
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    } //end of while loop
}; //end of fight function


//Function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

//fight each enemy-robot by looping over them and fighting one at a time
for(var i = 0; i < enemyNames.length; i++) {
    //if player is still alive keep fighting
    if (playerHealth > 0) {
        //let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        //pick new enemy to fight based on index of enemyName arry
        var pickedEnemyName = enemyNames[i];

        //reset enemy health before starting new figiht
        enemyHealth = 50;

        //pass the pickedEnemyName variables value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    // if player is still alive and were not at the last enemy in the array
    if (playerHealth > 0 && enemyNames.length - 1) {
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
if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
    if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

// increase health and decrease money
playerHealth = playerHealth +20;
playerMoney = playerMoney - 7;
    } else  {
        window.alert("You dont have enough money!");
    }
break;


case "upgrade":
case "UPGRADE":
    if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
// increase attack and decrease money
playerAttack = playerAttack + 6;
playerMoney = playerMoney - 7;
    } else {
        window.alert("You dont have enough money!");
    }
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
// start first game when page loads
startGame();