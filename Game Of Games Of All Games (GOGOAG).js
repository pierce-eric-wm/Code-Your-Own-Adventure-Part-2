
    alert ("Press (OK) when you are ready to play the game.");
    alert ("(Story) It felt like a normal day for you but something was a little off. You left your wife and kids for an important buissness trip in England." +
        "You got on the plane and after 10 min. of waiting the plane finaly took off. 1 and a half hours in the plane got hit by lightning and the plane is coming down fast." +
        "in a blink of an eye the plane hit the water knocking you out cold... You awoke after 5 hours. You are on a island some where in the altntic ocean. There is no body in sight " +
        "and you start to panic. After you calm down you make the decison to do something. You need to survive for as long as you can.");

    var start = prompt ("You need to get ready for the night. Do you build a shelter, look for food, or do you get some water. (shelter/food/water)");
    if (start === "shelter") // this is the first choice that the player makes (1) ---◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊--- shelter > ?
    {
        alert("You get up and start to grap some branches off a fallen palm tree. After an hour you have a shelter built and will protect you from the rain.");
        var choice2 = prompt("Now that you have a shelter what do you do for the rest of the day? Do you get water or look for food? (You see some dark clouds in the distance)  (water/food)");
        if (choice2 === "water") // shelter > water
        {
            alert("You look for a container to hold the water and a fliter to filter the water. Luckily there is a suit case that has a water bottle and a filter for water" +
                "you spend the rest of the day getting water.");
            alert("night time");
        }
        var nightShelterWater = prompt("The clouds rolled over and it started to rain. Since you already have water you can't get anymore. You hear a something in the bush do you check it out or stay put? (check/stay)")
        if (nightShelterWater === "check") {
            alert('You you go and check it out. What ever it was big and fast. You get scared and go back to your shelter.')
        }
        else if (nightShelterWater === "stay") {
            alert('You made the good choice and stay in the shelter but you do become curious of what it was.')
        }
        else if (choice2 === "food") // shelter > food
        {
            alert("You look around and find a bag. The bag has some food for you to eat. You spend the rest of the day getting food. You also find a container.");
            alert("night time")
            var nightShelterFood = prompt("The clouds roll over and starts to rain. You get your container and fill it up. You then hear a noise in the bushes. Do you check it out or stay put? (check/stay)")
            if (nightShelterFood === 'check')
                alert('You you go and check it out. What ever it was big and fast. You get scared and go back to your shelter.')
        }
    }
        else if (start === "water") // water > ?
            { //this is the 2nd chioic the player can make (2) ---◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊---
            alert("You look for a container to hold the water and a fliter to filter the water. Luckily there is a suit case that has a water bottle and a filter for water");
            var choice3 = prompt("Now that you have water you need to do something quick before night falls. Do you look for food or build a shelter? (food/shelter)" );
            if (choice3 === "food") // water > food
            {
                alert("You look around and find a bag. The bag has some food for you to eat. You spend the rest of the day getting food. You also find a container.");
                alert("night time");
            }
            else if (choice3 === "shelter") // water > shelter
            {
                alert("You get up and start to grap some branches off a fallen palm tree. After an hour you have a shelter built and will protect you from the rain.");
                alert("night time");
                var nightWaterShelter = prompt  ("It started to rain now and since you already have water you can't get any more in the container. You built a shelter so you don't get cold and wet" +
                    " You hear a noise do you check it out or do you" +
                    "stay put. (check/stay)");
                if (nightWaterShelter === 'check') {
                    alert('You you go and check it out. What ever it was big and fast. You get scared and go back to your shelter.');
                }
                else if (nightWaterShelter === 'stay') {
                    alert('You made the right choice and you stay but you do become curious');
                }
            }
            }// end of the 2nd choice (maybe) i might need to make this one and the others go on because of the choice they make. or find a way to get them to link to each other.
     // this is the end of the if start and var start.
    else if (start = "food") { // food > ?
        alert ("You look around and find a bag. The bag has some food for you to eat. You spend half of the day getting food.You also find a container.");
        var choice4 = prompt ("You still have half of the day left. Do you build a shelter or do you get water. (shelter/water)");
        if (choice4 === "shelter") // food > shelter
         {
            alert("You get up and start to grap some branches off a fallen palm tree. After an hour you have a shelter built and will protect you from the rain.");
            alert("night time");
             var nightFoodShelter = prompt ("The clouds roll over your shelter and it starts to rain. You get your container and it fills up. You " +
                 "didn't need a filter because it is rain water. You hear a noise do you check it out or do you stay put? (check/stay)");
             if (nightFoodShelter=== 'check') {
                 alert('You you go and check it out. What ever it was big and fast. You get scared and go back to your shelter.')
             }
                 else if (nightFoodShelter === 'stay') {
                     alert('You made the right choice and stayed')
                 }

             }

        else if (choice4 === "water")// food > water
        {
            alert("You have a container for the water so now you look for a filter. You find a filter in a bag that just washed up. The gods must be watching you.");
            alert("night time");
                            var nightFoodWater = prompt ("It started to rain now and since you already have water you can't get any more in the container. You are soaked because " +
                "you didn't build a shelter. This makes you really cold over the night and you get sick. You hear a noise do you check it out or do you" +
                "stay put. (check/stay)");
            if (nightFoodWater === "check") {
                alert("You go and check out what the noise is and as you approch you see something dart across your view. It was fast. You go scared and " +
                    "ran back to the hut because you have no weapon to defend yourself.")
            }
                else if (nightFoodWater === 'stay') {
                alert ('You made the best decision to stay and wait out the night. You were a little curious but you decided to stay.")

            }
        }
    }
    alert ('A bear comes out and attacks you! during the night time.')

    var fight = prompt ("How do you want to fight the bear? (hints: stick,fists, run, pie...")

    switch(fight){
        case 'stick':
            console.log("You try to fight the bear off with the stick but you lose. GAME OVER.");
            break;
        case 'fists':
            console.log("You tried to fight the bear with your hands but its claws worked better. GAME OVER");
            break;
        case 'run':
            console.log("You try to outrun the bear but the bear is part of a evil experiment gone wrong causeing it to run as fast as a cheeta, the bear catches up. GAME OVER.");
            break;
        case 'pie':
            console.log("You some how make a pie and you give the pie to the bear and the bear gives you a plane and you fly out of the island... YOU WIN!");
            break;
        default:
            console.log("You sit and wonder how to beat the bear but you though for too long the bear eats you. YOU LOSE! GAME OVER!");
    }
