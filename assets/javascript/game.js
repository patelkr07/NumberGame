
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

let userScore = "";

let wins = "";

let losses = "";




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