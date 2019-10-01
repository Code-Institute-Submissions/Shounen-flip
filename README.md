# Memory-Game : Shounen Flip.  
**Overview** – The game features a one page html document with css and javascript used to style and animate HTML elements on the page.


### UX Design
***
##### Developer goals
 
* To make a fun game myself and other can enjoy. 
* To gain experience putting JS into practise. 

##### External User Goals/stories 
* As an external user I would like the controls to be easy so I can easily play the game. 
* As an external user I would like there to be instructions on how to play the game in order to quickly understand and play the game without having to spend time figuring out the controls and rules.
* As an external user I would like to know when I have won the game. 
* As an external user I would like to be able to restart the game if i make a mistake or lose. 
* As an external user I would like to keep track of my score if this is applicable to the game. 




##### Wireframes 
*  [Gamepage]([https://github.com/xxkaminaxx/Second-milestone--memory-game/blob/master/assets/image/gamepage.jpg) This image portrays how the gamepage will look. 
*  [Modal-On-Screen]([https://github.com/xxkaminaxx/Second-milestone--memory-game/blob/master/assets/image/modal-on-screen.jpg) This image portrays how the modals will display on screen. These modals are triggered when certain conditions are met. 
* [Win-lose-Modals](https://github.com/xxkaminaxx/Second-milestone--memory-game/blob/master/assets/image/win-lose-modal.jpg) This image portrays how the modal pop ups themselves will look. The win pop up will display the players rank, time and turn.  




#### Existing features
***
* The page features responsive traits. Its structure changes based on the screen size. 
* Rank - The dashboard features a ranking system based on the time the player takes to complete the game. 
* Turn - The dashboard features a turn counter which counts the amount of turns the player take each time two cards are flipped. 
* Timer - The dashboard features a timer which counts down from 2:30 this is triggered when the player clicks on two cards.
* Gameboard - This features 12 cards that flip when you click them. Javascript and css is used to manipulate the cards, this includes rotating, matching the cards click events, and keeping the cards open when a match is complete. 
* Buttons/Close -There are several buttons on the game. There are reset buttons which resets the gameboard, timer, rank and and turn counter. There are also several close buttons that hide the modals when they are deployed. 
* Modals - There are 3 modals in the game. A win modal, lose modal and how to play modal. These modals are triggered through different events such as winning the game, losing the game or simply just clicking a button. 
The win modal displays the Rank, Time and number of turns the player takes. The win and lose modal features a reset button each. 

#### Features left to implement :
***
* Adding audio + a mute button.this will be sound affects for when you match a card ect.
* changing the difficulty. So maybe creating multiple levels and decreasing the time as the levels get harder 
* adding a points system, as well as just a rank system thats based on the time the user takes to complete the game. Adding bonus points. so if you get two cards in a row then + extra points on the score board. 
* Adding local storage. so the user being able to save continue or reset their playthrough on the game. 
* leaderboard.

####  Technologies Used
***

*	Cloud - I used Cloud9 as the IDE while developing the website. 
*	This project uses HTML and CSS for the structuring and styling. 
*	BootstrapCDN - The project uses Bootstrap4  for easy structuring and to make the project responsive . 
*	Google Fonts - The project uses Google fonts to style the website fonts.
*	Javascript - The project uses Javascript to manipulate the game cards and create the game mechanics.


#### Testing 
***

Click [here]() to get to testing page. 

#### Deployment
***

**To deploy this site locally follow these steps:**

 Log onto GitHub.
* on the left side of the screen, select the repository with the name xxkaminaxx/xxkaminaxx.github.io 
*Then from the menu items, select Settings.
* Keep scrolling down till you get to the GitHub Pages section.
* within that section, click the button under source labelled None and select Master Branch
* when you select the master branch the page will be freshed and the website would then be deployed.  deployed.
* Scroll back down again to the GitHub Pages section and click the link to the deployed website.

**To deploy this site locally follow these steps:**
* Click this link to the repository https://github.com/xxkaminaxx/xxkaminaxx.github.io
* Then click the "clone or download" button on the right side of the screen. 
* Copy the link given then open up the IDE you wish to clone the repository in
* Within the terminal in the repository, type in  "git clone " then paste the link next to git clone and press enter 
* You should have the folder in your IDE. 


 **From the development stage to deployment stage.**
 
* I made some changes to the structure I initially designed in the wireframe during the development process. These changes were because i ran out of time and it would have taken too long to implement some features as i was unaware of how to use javascript at the time. So i focused on what little I knew and what i could learn quickly.  These features being adding "local storage" which i talk about in my "features left to implement" section.  
* Another change I made to the structure was relocating the position of the turn counter. I did this so that visually it would be easier for the player to see there stats, so displaying Rank, Timer, and Turn counter stacked over each other in one place rather than having theses stats dispersed over the screen. 

#### Credits -
***

###### Content -
* The font style for the text used for this site was taken from google fonts library 

###### Media -
* The images used  are not mine they were taken from google images. 

###### Code - 
I used [https://www.youtube.com/watch?v=ZniVgo8U7ek]() 
     this youtube video to build the basic gameboard for this game. I added to the code where necessary to implement further features I wanted for my game.  

###### Acknowledgements

* I took inspiration from japanese anime I love to watch. 
* i took inspiration from this game "fruit flip" [https://www.brain-games.co.uk/game/Fruit+Flip]()

*Disclaimer*
* The content for this Website is for educational purposes only.