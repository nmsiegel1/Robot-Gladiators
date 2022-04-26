var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//Create function 
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
    enemyName + ' attacked ' + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

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


//Execute function
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
    //if the player isn't alive, stop the game
    }else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
