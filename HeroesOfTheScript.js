//main function,the game, when button pressed.
function HeroesOfTheScript() {
    alert("Welcome to Heroes Of The Script!");
    var nameHero = prompt("Please name your Hero!");
    var flag3 = true; //boolean value to control the loop
    //error handling force user to give Hero a valid name(string)
    do {
        if (typeof nameHero == 'undefined') {
            nameHero = prompt("Please name your Hero to continue...");
        } else if (nameHero == "") {
            nameHero = prompt("Please name your Hero to continue...");
        } else if (nameHero == null) {
            nameHero = prompt("Please name your Hero to continue...");
        } else {
            flag3 = false;
        }
    }
    while (flag3 == true);

    alert("Hello " + nameHero + "!");
    var help = prompt("For Game Instructions write H");
    var flag1 = true;
    //error handling forces user to read instructions
    while (flag1 == true) {
        if (help == 'H' || help == 'h') {
            alert("R U L E S:\n - W to Move Forward\n - I to see your inventory\n - R to Run away from enemy Or...\n - A to Attack!\n - E to Exit game.");
            flag1 = false;
        } else if (help != 'H' || help != 'h') {
            help = prompt("Please write H to see instructions and continue...");
        }
    }
    //array with random enemies
    var enemy = new Array(3);
    enemy[0] = "Blood Elf";
    enemy[1] = "DemonHunter";
    enemy[2] = "Gnome";

    alert("Watch out as you move forward for the Enemies...\n\n" + enemy[0] + "s\n" + "\n" + enemy[1] + "s\n" + "\n" + enemy[2] + "s");

    //player's bag , empty array at START
    var myBag = [];
    // world items that drop every time player kills an enemy
    var worldItems = ["Strange Card", "Magic Stick", "Magic Wand", "Magic Helmet", "Strange Crystal", "Burned Hat", "Jewel of Victory", "Chaos Orb", "Ancient Healing potion", "Scroll of Wisdom"];

    var score = 0; //player's score
    var tDD = 0; //players total damage done
    var tDR = 0; // player's total damage receive
    var EnL = 200; //enemy's life at level 1
    var pL = 400; //player's life at level 1
    var xp = 0; //player's experience at level 1
    var lvl = 1; //variable for player’s level
    var flag2 = true; // boolean value to control the loop 
    while (flag2 == true) {
        var move = prompt("Make your move...");
        var dD = 0;
        var temp1dD = 0;
        var temp2dD = 0;
        var dR = 0;
        var temp1dR = 0;
        var temp2dR = 0;
        //if players hit W key ,error handling
        if (move == 'W' || move == 'w') {
            var chanceToFight = Math.floor(Math.random() * 100); //creates a random number from 0 to 100
            if (chanceToFight > 60) // if number > 60% nothing happens
            {
                alert("You are walking...in peace!");
            } else if (chanceToFight <= 60) // else is number < or equal to 60% players finds an enemy.
            {
                var a = Math.floor(Math.random() * 3); //a random number from 0 to 2 chooses an enemy from enemy array
                alert("Enemy is coming...");
                move = prompt("Watch out...a might \n" + enemy[a] + "\n is comming to fight you...\n - A to attack \n - R to run away...");
                var flag5 = true; //boolean value to control the loop
                while (flag5 == true) {
                    if (move == 'A' || move == 'a') //when players finds an enemy if pressed A we have a fight.
                    {
                        flag5 = false;
                        var flag4 = true; //boolean value to control the loop
                        while (flag4 == true) {
                            var d = Math.floor(100 + Math.random() * 100); // users damage from Minimum 100 and Maximum 200
                            var e = Math.floor(20 + Math.random() * 20); // enemy(computer) damage from Minimum 20 and Maximum 40
                            EnL = EnL - d; //calculates enymy's life after each hit
                            pL = pL - e; //calculates user's life after each hit
                            alert(nameHero + "'s" + " level= " + lvl + "\n" + nameHero + "'" + " experience: " + xp + "\nyou hit enemy " + d + " damage\n" + "Enemy hit you" + e + " damage\n" + "Your Life is : " + pL + "\nEnemy Life is: " + EnL);
                            if (pL > 0) //check’s after fight is over
                            {
                                if (EnL <= 0) //if enemy is dead
                                {
                                    flag4 = false; //boolean value to control the inner loop
                                    xp = xp + 2; //gives user +2 experience
                                    var num = Math.floor(Math.random() * 10); //creates a random number from 0 to 10
                                    myBag.push(worldItems[num]); // adds this random item from worldItems[] array to user's myBag[] array.

                                    /*
                                     *	as long as user kills enemies the algorithm checks the status of users experience and promotes levels and upgrades enemy's and player's life points.
                                     */
                                    if (lvl == 1) {
                                        EnL = 200;
                                        alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                    } else if (lvl == 2) {
                                        EnL = 300;
                                        alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                    } else if (lvl == 3) {
                                        EnL = 400;
                                        alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                    } else if (lvl == 4) {
                                        EnL = 500;
                                        alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                    } else if (lvl == 5) {
                                        EnL = 600;
                                        alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                    }

                                    if (xp >= 10) {
                                        xp = 0;
                                        lvl = lvl + 1;
                                        if (lvl == 2) {
                                            pL = 600;
                                            EnL = 300;
                                            alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                        } else if (lvl == 3) {
                                            pL = 800;
                                            EnL = 400;
                                            alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                        } else if (lvl == 4) {
                                            pL = 1000;
                                            EnL = 500;
                                            alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                        } else if (lvl == 5) {
                                            pL = 1200;
                                            EnL = 600;
                                            alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                        } else if (lvl > 5) //when user completes level 5 the game is over
                                        {
                                            alert("Congratulations! " + nameHero + "\n" + "\n" + "E N D  OF  G A M E!!!\n" + "\n" + "Items you collected while playing are :\n" + myBag.join("><") + "\n" + "\nTotal Damage Done: " + tDD + "\nTotal Damage Received: " + tDR + "\nGame Score: " + score);
                                            tDD = 0; //resets players total damage done
                                            tDR = 0; // resets player's total damage receive
                                            score = 0; //resets players score
                                            x = confirm("P L A Y  A G A I N ?"); // program asks users to play again new game.
                                            if (x == false) // if user cancels then goodbye’s user
                                            {
                                                flag4 = false;
                                                flag2 = false;
                                                alert("Thank you for playing Heroes of The Script! Bye.");
                                                window.close();
                                            } else if (x == true) //else plays again from start with initial level , experience and life values.
                                            {
                                                alert("Welcome back " + nameHero + "!");
                                                flag4 = false;
                                                flag2 = true;
                                                EnL = 200;
                                                pL = 400;
                                                var myBag = [];
                                                xp = 0;
                                                lvl = 1;
                                            }
                                        }
                                    }
                                }
                            } //end of while (flag4==true)
                            else if (pL <= 0) // checks if player lost’s all life points
                            {
                                alert("OOops, Game Over!");
                                dD = 0;
                                dR = 0;
                                score = 0;
                                var x = confirm("P L A Y  A G A I N ?");
                                if (x == false) {
                                    flag4 = false;
                                    flag2 = false;
                                    alert("Items you collected while playing are :\n" + ">" + myBag.join("><"));
                                    alert("Thank you for playing Heroes of The Script! Bye.");
                                    window.close(); //close the window browser
                                } else if (x == true) {
                                    alert("Welcome back " + nameHero + "!");
                                    flag4 = false;
                                    flag2 = true;
                                    EnL = 200;
                                    pL = 400;
                                    var myBag = [];
                                    xp = 0;
                                    lvl = 1;
                                }
                            }
                            dD = dD + d; //increments players damage done at every fight
                            dR = dR + e; //increments players damage receive at every fight
                        }
                    } else if (move == 'R' || move == 'r') //when players finds an enemy if pressed R there is a 50% chance to have a fight or run away and don’t fight.
                    {
                        flag5 = false;
                        var chanceToRun = Math.floor(Math.random() * 2); // random number 50% chance (0 or 1)
                        if (chanceToRun == 0) // if random number is 0 we have a fight
                        { // fight method is not 100% the same when user hits A or R so we don't have a function for fight because this will cause errors
                            alert("you can't get away...FIGHT!");
                            flag4 = true;
                            while (flag4 == true) {
                                var d = Math.floor(100 + Math.random() * 100);
                                var e = Math.floor(20 + Math.random() * 20);
                                EnL = EnL - d;
                                pL = pL - e;
                                alert(nameHero + "'s" + " level= " + lvl + "\n" + nameHero + "'" + " experience: " + xp + "\nyou hit enemy " + d + " damage\n" + "Enemy hit you" + e + " damage\n" + "Your Life is : " + pL + "\nEnemy Life is: " + EnL);
                                if (pL > 0) {
                                    if (EnL <= 0) {
                                        flag4 = false;
                                        xp = xp + 2;
                                        var num = Math.floor(Math.random() * 10);
                                        myBag.push(worldItems[num]);

                                        if (lvl == 1) {
                                            EnL = 200;
                                            alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                        } else if (lvl == 2) {
                                            EnL = 300;
                                            alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                        } else if (lvl == 3) {
                                            EnL = 400;
                                            alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                        } else if (lvl == 4) {
                                            EnL = 500;
                                            alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                        } else if (lvl == 5) {
                                            EnL = 600;
                                            alert("You win!!!\nYou earned:" + xp + "/10 Experience" + "\n New loot from enemy: " + "\n>" + worldItems[num] + "<");
                                        }

                                        if (xp >= 10) {
                                            xp = 0;
                                            lvl = lvl + 1;
                                            if (lvl == 2) {
                                                pL = 600;
                                                EnL = 300;
                                                alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                            } else if (lvl == 3) {
                                                pL = 800;
                                                EnL = 400;
                                                alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                            } else if (lvl == 4) {
                                                pL = 1000;
                                                EnL = 500;
                                                alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                            } else if (lvl == 5) {
                                                pL = 1200;
                                                EnL = 600;
                                                alert("Congratulations! You level Up!\n" + nameHero + " Level: " + lvl + "\n" + nameHero + " LifePoints: " + pL);
                                            } else if (lvl > 5) {
                                                alert("Congratulations! " + nameHero + "\n" + "\n" + "E N D  OF  G A M E!!!\n" + "\n" + "Items you collected while playing are :\n" + myBag.join("><") + "\n" + "\nTotal Damage Done: " + tDD + "\nTotal Damage Received: " + tDR + "\nGame Score: " + score);
                                                tDD = 0;
                                                tDR = 0;
                                                score = 0;
                                                x = confirm("P L A Y  A G A I N ?");
                                                if (x == false) {
                                                    flag4 = false;
                                                    flag2 = false;
                                                    alert("Thank you for playing Heroes of The Script! Bye.");
                                                    window.close();
                                                } else if (x == true) {
                                                    alert("Welcome back " + nameHero + "!");
                                                    flag4 = false;
                                                    flag2 = true;
                                                    EnL = 200;
                                                    pL = 400;
                                                    var myBag = [];
                                                    xp = 0;
                                                    lvl = 1;
                                                }
                                            }
                                        }
                                    }
                                } else if (pL <= 0) {
                                    alert("OOops, Game Over!");
                                    dD = 0;
                                    dR = 0;
                                    score = 0;
                                    var x = confirm("P L A Y  A G A I N ?");
                                    if (x == false) {
                                        flag4 = false;
                                        flag2 = false;
                                        alert("Items you collected while playing are :\n" + myBag.join("><"));
                                        alert("Thank you for playing Heroes of The Script! Bye.");
                                        window.close();
                                    } else if (x == true) {
                                        alert("Welcome back " + nameHero + "!");
                                        flag4 = false;
                                        flag2 = true;
                                        EnL = 200;
                                        pL = 400;
                                        var myBag = [];
                                        xp = 0;
                                        lvl = 1;
                                    }
                                }
                                dD = dD + d;
                                dR = dR + e;
                            } //end of while (flag4==true)
                        } else if (chanceToRun == 1) //if random number is 1 we don't have a fight and player also gets 10 life points
                        {
                            flag5 = false;
                            pL = pL + 10; //player gets 10 life points
                            alert("Ouf you run away safe this time...\n" + "+10 LifePoints added!");
                        }
                    } else if (move !== 'A' || move != 'a' || move != 'R' || move != 'r' || move == 'undefined') //error handling forces user to choose only between A or R keys when enemy appears.
                    {
                        move = prompt("Please write A to attack \n or R to try to run away..");
                    }
                }
                temp1dD = temp1dD + dD;
                temp1dR = temp1dR + dR;
            }
            temp2dD = temp2dD + temp1dD;
            temp2dR = temp2dR + temp1dR;
        } else if (move == 'H' || move == 'h') {
            window.alert("R U L E S:\n - W to Move Forward\n - I to see your inventory\n - R to Run away from enemy Or...\n - A to Attack!\n - E to Exit game.");
        } else if (move == 'I' || move == 'i') {
            if (myBag.length == 0) {
                alert("You haven't loot any items so far...sorry!");
            } else if (myBag.length != 0) {
                alert("Your bag at the moment has :\n" + myBag.join("><")); //arry.join() simillar to.String() function but can change the separation between strings returned
            }
        } else if (move == 'E' || move == 'e') {
            flag2 = false; // if user press e then the loop stops and the application is terminated			
            {
                if (myBag.length != 0) {
                    alert("Items you collected while playing are :\n" + myBag.join("><"));
                }
            }
            window.alert("Thank you for playing Heroes of The Script! Bye.");
            window.close();
        } else if (move !== 'W' || move !== 'w' || move !== 'H' || move !== 'h' || move !== 'I' || move !== 'i' || move !== 'E' || move !== 'e') {
            window.alert("Not a valid move\nPress H for help");
        }
        tDD = tDD + temp2dD; //calculate the overall player's damage done
        tDR = tDR + temp2dR; //calculate the overall player's damage receive
        score = tDD - tDR; // calculates a score for user according to damages.
    } //end of while(flag2 == true) 	
} //end function HeroesOfTheScript()