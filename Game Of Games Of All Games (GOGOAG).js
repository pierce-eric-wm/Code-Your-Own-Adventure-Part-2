
    alert ("Press (OK) when you are ready to play the game.");
    alert ("(Story) It felt like a normal day for you but something was a little off. You left your wife and kids for an important buissness trip in England." +
        "You got on the plane and after 10 min. of waiting the plane finaly took off. 1 and a half hours in the plane got hit by lightning and the plane is coming down fast." +
        "in a blink of an eye the plane hit the water knocking you out cold... You awoke after 5 hours. You are on a island some where in the altntic ocean. There is no body in sight " +
        "and you start to panic. After you calm down you make the decison to do something. You need to survive for as long as you can.");

    var start = prompt ("You need to get ready for the night. Do you build a shelter, look for food, or do you get some water.");
    if (start === "shelter");// this is the first choice that the player makes (1) ---◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊---
    {
        alert("You get up and start to grap some branches off a fallen palm tree. After an hour you have a shelter built and will protect you from the rain.");
        var choice2 = prompt("Now that you have a shelter what do you do for the rest of the day? Do you get water or look for food? (You see some dark clouds in the distance)");
        if (choice2 === "water")
            {
            alert("You look for a container to hold the water and a fliter to filter the water. Luckily there is a suit case that has a water bottle and a filter for water" +
                "you spend the rest of the day getting water.");
            alert("night time");
            }
        else if (choice2 === "food") {
            alert("You look around and find a bag. The bag has some food for you to eat. You spend the rest of the day getting food. You also find a container.");
            alert("night time")
            }
        else if (start === "water")
            { //this is the 2nd chioic the player can make (2) ---◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊---
            alert("You look for a container to hold the water and a fliter to filter the water. Luckily there is a suit case that has a water bottle and a filter for water");
            var choice3 = prompt("Now that you have water you need to do something quick before night falls. Do you look for food or build a shelter?");
            if (choice3 === "food")
            {
                alert("You look around and find a bag. The bag has some food for you to eat. You spend the rest of the day getting food. You also find a container.");
                alert("night time");
            }
            else if (choise3 === "shelter")
            {
                alert("You get up and start to grap some branches off a fallen palm tree. After an hour you have a shelter built and will protect you from the rain.");
                alert("night time");
            }
            }
    }



