
if (window.performance.navigation.type === 1) {
  // if the page has been refreshed, call the rollDice() function.
 rollDice();
}

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var diceImage1 = document.getElementById("first");
  diceImage1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  var diceImage2 = document.getElementById("second");
  diceImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}