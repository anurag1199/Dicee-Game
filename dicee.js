var player1name = prompt("Enter Player 1 Name : ");
var player2name = prompt("Enter Player 2 Name : ");

document.querySelectorAll("p")[0].innerHTML = player1name;
document.querySelectorAll("p")[1].innerHTML = player2name;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩"+player1name+" Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = ""+player2name+" Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
