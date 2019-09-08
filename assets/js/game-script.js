$(document).ready(function() {




});








//variables 



const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var p = document.querySelector("p");
var total_seconds = 0.3 * 10;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var loseModal = document.getElementById("lose-model")
var myVar = -1;

$("#reset").on("click", function() {
   console.log("test");
   resetGame();
});


$(".memory-card").on("click", function() {
   checkTime();
});


//////////game board code ///////////////////

function flipcard() { // flipcard is the function name. 

    if (lockBoard) return;
    if (this === firstCard) return; // when you double click theres still a bug  

    this.classList.add("flip");

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;

    }

    //second click
    /* hasFlippedCard = false; */ // once resetBoard() is created <-- you no longer need this syntax 
    secondCard = this;

    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework ===
        secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards(); // <- This is a ternery operator which allow you to write an if else statement in one line.

}

function disableCards() {
    firstCard.removeEventListener("click", flipcard);
    secondCard.removeEventListener("click", flipcard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => { // setTime delays the execution of the else code
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")

        resetBoard();
    }, 1500);



}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener("click", flipcard));



/////////////timer code //////////////////////



function checkTime() {
    document.getElementById("timer").innerHTML = 'Time Left:' + c_minutes + "minutes" + c_seconds + "seconds"
    if (total_seconds <= 0) {
        setTimeout(displayModal(), 1);
       
        


    }
    else {
        total_seconds = total_seconds - 1;
        c_minutes = parseInt(total_seconds / 60);
        c_seconds = parseInt(total_seconds % 60);
        myVar = setTimeout("checkTime()", 1000);
    }
}


function displayModal() {
    $('#lose-model').modal('show');
}

function hideModel() {
    $('#lose-model').modal('hide');
}

function resetCards() {
    $(".memory-card").removeClass('flip');

}




function resetGame() {
    hideModel();
    clearTimeout(myVar);
     resetCards();
    total_seconds = 12 * 10;
    checkTime();
  


}

