# Testing
***

I used this site to validate the different part of my app

[W3C markup Validation service](https://validator.w3.org/) Results: "Document checking completed. No errors or warnings to show."

[W3C CSS Validation service](https://jigsaw.w3.org/css-validator/) Results: "Congratulations! No Error Found."

[Esprima](https://esprima.org/demo/validate.html) Results: "Code is syntactically valid."


## **Part-1**  Testing client "user stories"

* As an external user I would like the controls to be easy so I can easily play the game. The controls are simple you literally have to click the face down cards to match them with each other. Any action excuted in this game  is done, more or less with one click . 

* As an external user I would like there to be instructions on how to play the game in order to quickly understand and play the game without having to spend time figuring out the controls and rules. The game has a button which specifies rules. 
* these rules explain to the player how to play and what must happen in order do to win/lose. 

* As an external user I would like to know when I have won the game. When the player wins a modal pop up occurs and displays text that says "You Win" furthermore it displays the players stats e.g rank, time and number of turns. 

* As an external user I would like to be able to restart the game if i make a mistake or lose. The game features a reset button which when clicked unflips the cards and resets the stats on the dashboard e.g Rank, Time and number of turns. 

* As an external user I would like to keep track of my score if this is applicable to the game. The game features a dashboard that displays the players stats. The stats displayed are the players Rank, Time and Number of turns. 





## **Part-2**  Manual testing 
**Game-board/ dashboard values**

1) click one of the cards and see if they flip. 
2) Try and match two cards that arent the same, they should pause for a secound then unflip. 
3) Try and match two cards that are the sane. The cards should remain flipped. 
4) Try and match all the cards on the board a win modal should display on the screen. 
5) click on two cards and see if the timer starts counting down. 
6) click on two cards wait for the timer to run out, check to see if a lose modal is displayed. 
7) click on two cards see if the value of the turn counter increments by one. 
8) click card one to flip then click on card two ( make sure it doesn't match with card one) really fast repeatedly to see if the card unflips. 


**Dashboard buttons**
1) click the "rules" button see if the "how to play modal" displays 
2) click the "reset" button see if the see if the following dashboard values reset: Rank, Turn and time.

**Modals**

1) when win modal is displayed, see if the following values from the final stats, when the game is complete are displayed. 
2) when lose modal is displayed, see if the reset button unflips cards and resets the dashboard stats. 
3) click the close button on the win/lose modals to see if they close. 

**Responsive tests** 
1) check how the game looks on various screen sizes do this through " dev tools " make sure the page only scrolls vertically not horzontally.
2) check Images are visible and aren't stretched. 
3) check that the back to top button stil appears on smaller screen sizes. 
4) check the text displays clearly and doesnt go off the screen. 
5) check that the layout changes on mobile view. 
6) check the modals fit on the page in mobile view.
7) check the text is in the model and doesn't spill out side the modal box when on. 

**Screen sizes** 

* Galaxy 5 | 360x640 
* Pixel 2  | 411 x 731
* Iphone 5/SE | 320 x 568 
* IPhone 6/7/8 | 375 x 667
* IPhone 6/7/8 plus. | 414 x 736
* IPad | 768 x 1024
* IPad pro | 1024 x 1366

**Rsponsive test Results:**

The app passed allthe responsive tests on the various screens sizes except for the 7th one i found on the mobile view when I clicked the rules button to display the the "how to play modal" the text would go off the screen so I adjusted the size of text on that screen size. 



## **Part-3** Third party testing

I asked my friends and sister to test game no bugs were found. 

## **Part-4** browser testing 
I tested this app on several browsers such as :
* Internet explorer | couldnt load unsupported CSS property.
* Google chrome | Everything Good.
* Firefox | Everything Good

I found that 
on internet explorer two properties didn't render on the page with the app. This is because this isn't supported on internet explorer.
```
 -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #fff;

```

 

## **Part-5**   Bugs found 

I found a  bug when developing the game: 

1 ) When trying to find a way to trigger the timer I orginally allocated an event listener to the cards in the gameboard which when clicked would trigger the count down on the timer however the problem with this approuch is that whenever 
I clicked on the cards it would speed up the count down so in order to solve this problem I created an "if" statment which triggered the function "beginTimer" when the turn counter when from 0 to 1. This meant that I could click the cards as many times as I liked and this would not speed up the countdown. 



**Solution:**
```
function turnCounter() {


    turn++;
    counter.innerHTML = "Turns:" + " <span style=\"color:#a90329\">" +  turn + "</span>" ;
   
  

    if (turn == 1) {

        beginTimer();



    }


}



```