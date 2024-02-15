document.querySelector("#rollDice").addEventListener("click", function(){

    var randomNumber1 = Math.floor((Math.random()* 6) + 1);
    var randomNumber2 = Math.floor((Math.random()* 6) + 1);

    var diceImage1 = document.querySelector(".img1");
    diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    diceImage1.setAttribute("alt", "Dice" + randomNumber1);

    var diceImage2 = document.querySelector(".img2");
    diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
    diceImage2.setAttribute("alt", "Dice" + randomNumber2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("h1").textContent = "Draw!!!";
    }
    
});