// Solved
var computer = Math.floor(Math.random()*100);
console.log(computer);

function game() {
    var user = document.querySelector(".guess").value;
    console.log(user);
    
    if (user > computer) {
        document.getElementById("guessResponse").innerHTML = "<br> You're too high";
    } else if (computer > user){
        document.getElementById("guessResponse").innerHTML = "<br> You're too low";
    } else if (computer == user) {
        document.getElementById("guessResponse").innerHTML = "<br> You're correct!";
    } else {
        document.getElementById("guessResponse").innerHTML = "<br> Pick a number";
    }
}

//Try 2
// var computer = Math.floor(Math.random()*100);
// var user = document.getElementById("guessResponse");
// console.log(computer);
// console.log(user);

// function game(user, computer) {
//     if (computer < user) {
//         document.getElementById("donut").innerHTML = "<br> You're too high";
//     } else if (computer > user){
//         document.getElementById("donut").innerHTML = "<br> You're too low";
//     } else if (computer == user) {
//         document.getElementById("donut").innerHTML = "<br> You're correct!";
//     } else {
//         document.getElementById("donut").innerHTML = "<br> Pick a number";
//     }
// }

// Try 1
// var max = 100;
// var min = 1;

// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }

// var computer = math.floor(math.random()*100);
// var user = document.getElementById("userInput");

// var guessResponse;
// if (guessResponse > getRandom) {
//     document.write("<br>You're too high.");
// } else if (guessResponse < getRandom) {
//     document.write("<br>You're too low.");
// } else if (guessResponse === getRandom) {
//     document.write("<br>You're correct!");
// } else {
//     document.write("<br>Pick a number.");
// }

 
