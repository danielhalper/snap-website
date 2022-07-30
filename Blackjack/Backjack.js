
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let playerEl = document.getElementById("player-el")

let player = {
    name: "Per",
    chips: 200
}


// 1. Store the message-el paragraph in a variable called messageEl
document.getElementById("draw").style.visibility = "hidden";

function startGame() {
    player.name=prompt("Please enter you name", "default text");

    document.querySelector("#start").style.display = "none";
    renderGame(cards);
}

function renderGame(cards) {
    playerEl.textContent = player.name + ": $" + player.chips
    document.getElementById("cards").textContent= "Cards: ";
   cards.forEach(card => {
    document.getElementById("cards").textContent+=`${card} `  
    })
   document.getElementById("sum").textContent=`Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        document.getElementById("draw").style.visibility="visible";

    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
        document.getElementById("message-el").innerText = message;
}

function drawCard() {
    if(isAlive===true) {
        let nextCard = getRandomCard();
    cards.push(nextCard);
    sum+=nextCard;
    renderGame(cards);
    }
}

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}