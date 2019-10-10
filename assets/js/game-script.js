//variables 



const cards = document.querySelectorAll(".memory-card");

const ranks = ["A", "B", "C", "D"]; // to comit 

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var turn = 0;
var counter = document.getElementById("counter")
var timerInterval = 0;
var numOfMatchedCards = 0;
var rank_score_display = document.getElementById("rank");


window.onload = shuffle();



//main game/reset button //
document.getElementById("reset-btn").addEventListener("click", function() {
    resetGame();
    hideModel();
});

// how to play button 
document.getElementById("how-to-play-modal-reset-btn").addEventListener("click", function() {
    displayHowToPlayModal();
});



/// lose modal reset button //
document.getElementById("lose-modal-reset-btn").addEventListener("click", function() {
    resetGame();
    hideLoseModal();
});

///win  modal reset button //
document.getElementById("win-modal-reset-btn").addEventListener("click", function() {
    resetGame();
   hideWinModel();
});


//had some problems with the close button on the how to play modal so I had to create a seperate  event listener.  .

//click, trigger function and close 


document.getElementById("close-btn1").addEventListener("click",  function() {
       hideWinModel();
    });
document.getElementById("close-btn2").addEventListener("click",  function() {
       hideLoseModal();
    });
document.getElementById("close-btn3").addEventListener("click",  function() {
        hideHowToPlayModal();
    });


//// modal close/display functions 

function displayHowToPlayModal() {
    document.querySelector(".bg-how-to-play-modal").style.display = "flex";
}

function displayLoseModal() {
    document.querySelector(".bg-lose-modal").style.display = "flex";
}


function hideWinModel() {
   
    document.querySelector(".bg-win-modal").style.display = "none";

}

function hideLoseModal() {
      document.querySelector(".bg-lose-modal").style.display = "none";
}
// 
function hideHowToPlayModal() {
console.log("test close");
    document.querySelector(".bg-how-to-play-modal").style.display = "none";
}




/// reset game function


function resetGame() {
    //add event listener 
    cards.forEach(card => card.addEventListener("click", flipcard));
    // reset matched cards
    numOfMatchedCards = 0;

    //remove class 
    $(".memory-card").removeClass('flip'); //had to use JQuery here in order to remove this class and reset the game. 

    //shuffle board

    shuffle();

    //reset moves
    turn = 0;
    counter.innerHTML = "Turn:" + turn;

    //reset timer

    timer.innerHTML = "Time:" + "02" + ";" + "30"
    clearInterval(timerInterval)
    timerInterval = 0;
    timeleft = 180;
    timeCounter = 0;

    // reset rank 
    var rank_score_display = document.getElementById("rank");
    rank_score_display.innerHTML = "Rank:" + ranks[0];

}



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


    turnCounter() // at this point in the code both cards have flipped so thisfunction is then executed 
    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework ===
        secondCard.dataset.framework;

    if (firstCard.dataset.framework ===
        secondCard.dataset.framework) {
        matchedCards()

    }

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


function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
};
cards.forEach(card => card.addEventListener("click", flipcard));


///////////// turn counter //////////////////////


// changes to commit: timer code and turnCounter code.

function turnCounter() {


    turn++;
    counter.innerHTML = "Turns:" + " <span style=\"color:#a90329\">" +  turn + "</span>" ;
   
  

    if (turn == 1) {

        beginTimer();



    }


}



////// Number of matched cards /////



function matchedCards() {
    numOfMatchedCards++;

    if (numOfMatchedCards == 6) {
        clearInterval(timerInterval)
        win()
    }

}

/////////////timer code //////////////////////

var timeleft = 150;

var timer = document.getElementById("timer")

var timeCounter = 0;
//https://www.youtube.com/watch?v=MLtAMg9_Svw

function convertTime(s) {
    var mins = parseInt(s / 60);
    var secs = parseInt(s % 60);


    if (mins + secs == 0) {
        displayLoseModal()
        clearInterval(timerInterval)
        timeleft = 150;
        timeCounter = 0;
        timerInterval = 0;

    }

    var rank_score_display = document.getElementById("rank");

    if (mins == 02 && secs == 30) {
        rank_score_display.innerHTML = "Rank:" + "<span style=\"color:#a90329\">" + ranks[0]  + "</span>" ; 

    }

    if (mins == 01 && secs == 45) {
        rank_score_display.innerHTML = "Rank:" + "<span style=\"color:blue\">" + ranks[1]  + "</span>" ; 

    }

    if (mins == 01 && secs == 00) {
        rank_score_display.innerHTML = "Rank:" + "<span style=\"color:purple\">" + ranks[2]  + "</span>" ; 

    }

    if (mins == 00 && secs == 20) {
        rank_score_display.innerHTML = "Rank:" + "<span style=\"color:green\">" + ranks[3]  + "</span>" ; 

    }



    if (secs < 10) {
        return "0" + mins + ":" + "0" + secs;
    }



    else {
        return "0" + mins + ":" + secs;

    }

    return mins + ":" + secs;
}


function beginTimer() {

    timerInterval = 0;
    var timeleft = 150;

    if (timerInterval == 0) {
        //changes display for timer . 
        timer.innerHTML = "Time" + ":" + "<span style=\"color:#a90329\">" + convertTime(timeleft - timeCounter) + "</span>" ;


        timerInterval = setInterval(function startTimer() {
            timeCounter++;
            timer.innerHTML = "Time" + ":" + "<span style=\"color:#a90329\">" + convertTime(timeleft - timeCounter) + "</span>" ;
        }, 1000);

    }

}


//// win pop up///

function win() {
    document.querySelector(".bg-win-modal").style.display = "flex";

    var finalRank = rank_score_display.innerHTML;
    var finalTime = timer.innerHTML;
    var finalMoves = counter.innerHTML;



    document.getElementById("finalRankScore").innerHTML = finalRank;
    document.getElementById("finalTimeScore").innerHTML = "Time:" + finalTime;
    document.getElementById("finalMovesScore").innerHTML = finalMoves;



}
