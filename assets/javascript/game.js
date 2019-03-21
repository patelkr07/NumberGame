
let ewokRandom = "";

let leiaRandom = "";

let speederRandom = "";

let vaderRandom = "";

let targetRandom = "";

let userScore = "";

let wins = "";

let losses = "";

$(document).ready(function() {

    targetRandom = Math.floor(Math.random() * 100 + 20);

    console.log(targetRandom);

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






