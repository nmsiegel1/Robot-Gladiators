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
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
