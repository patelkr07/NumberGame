

let ewokRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(ewokRandom);

let leiaRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(leiaRandom);

let speederRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(speederRandom);

let vaderRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(vaderRandom);

let targetRandom = Math.floor(Math.random() * (120 - 20)) + 19;
    console.log(targetRandom);

let userScore = "0";

let wins = "0";

let losses = "0";

//increase win counter if userScore === targetRandom

//increase lose counter if userScore goes over targetRandom

//reset game upon win or lose counter changing

$(document).ready(function() {

    

    $(".ewok").on("click", function() { 
        alert("Ewok click placeholder, random variable is " + ewokRandom);
        //ewokRandom variable is added to userScore upon each click (tried userScore + ewokRandom but could not get it to work for any of the four click events)
    });

    $(".leia").on("click", function() { 
        alert("Leia click placeholder, random variable is " + leiaRandom);
        //leiaRandom variable is added to userScore upon each click
    });

    $(".speeder").on("click", function() { 
        alert("Speeder click placeholder, random variable is " + speederRandom);
        //speederRandom variable is added to userScore upon each click
    });

    $(".vader").on("click", function() { 
        alert("Vader click placeholder, random variable is " + vaderRandom);
        //vaderRandom variable is added to userScore upon each click
    });
});

window.onload = function () {
    document.getElementById("target").innerHTML += targetRandom;
    document.getElementById("score").innerHTML += userScore;
       }


//could not get userScore to increase from 0 after each click event