
let ewokRandom = "";

let leiaRandom = "";

let speederRandom = "";

let vaderRandom = "";

let targetRandom = Math.floor(Math.random() * 100 + 20);

let userScore = "";

let wins = "";

let losses = "";


console.log(targetRandom);

window.onload = function () {document.getElementById("target").innerHTML += targetRandom;



$(document).ready(function() {

    

    $(".ewok").on("click", function() { 
        alert("Ewok been clicked");
    });

    $(".leia").on("click", function() { 
        alert("Leia been clicked");
    });

    $(".speeder").on("click", function() { 
        alert("Speeder been clicked");
    });

    $(".vader").on("click", function() { 
        alert("Vader been clicked");
    });
});

}