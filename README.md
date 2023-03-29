# Bazinga! - A game of Rock-Paper-Scissors-Lizard-Spock

Bazinga! Is a webpage for playing a game of Rock-Paper-Scissors-Lizard-Spock against the computer inspired by the TV-show "The Big Bang Theory". The esthetics of the webpage are adjusted to fit the theme of the TV-show (highly educated physicists who also happen to be comic book nerds) and therefore there is a background image of space and some of the chosen fonts are comic book inspired. Players, who happen to know the TV-show, will recognize the computer oponent (Sheldon C.) and hopefully have a greater sense of immersion to the entire theme.

The game has been coded in JavaScript and the entire page is responsive to be enjoyed on every device.

This game and the code behind it is influenced by [YvonneDev](https://diyifang.medium.com/spock-rock-game-with-javascript-f3cbe9ea61a4). I really liked the idea of having a more interactive game against the computer and at the same time keeping the code short and tidy, which I think she has achieved in her code.

![Responsivness Mockup](/assets/images/readme-img/bazinga-responsiveness.png)

## Features 

On this webpage we have different feauters, such as a quick link down to the rules, in case some players are interested in looking them up, as well as a game area, a choice area, a result area, a score area and a rules area. I will go in depth for every section/area of the game. 

The overall idea for this webpage was to let the players have as much "interaction" with their oponent as possible, by making the computer's choices visible. The "Bangers" google font was chosen for the specific comic book feel and used throughout the entire page.

### Existing Features

- __Header and link to rules area__

  - The header has been designed to catch players' attention, give enough information on what this webpage is about and to set the tone for the rest of the page. I added a link to the rules section in case new players weren't familiar with how to play the game and in order to make the entire page more user friendly by not having to scroll down. The rules-link has a hover function, which makes it appear in bright yellow to make it more user friendly.

![Header and link to rules](/assets/images/readme-img/header.png)

- __Game area__

   The game area consists of four different sections:
    - Player area
    - Computer area
    - Choice area
    - Result area.
  
  ![Entire game area](/assets/images/readme-img/game-area.png)

- __Player area__

  The player area consists of a small introduction of the oponent, a short explanation on how to start the game and make a selection, as well as buttons, which the player can click on to make a selection and start the actual game.

  The player buttons have a hover function, which makes the icons appear yellow/golden to highlight, which alternativ the player is choosing. The cursor has also been changed to "pointer" to make it more clear for players, which areas can be clicked on.

  Every player button has a onclick event, which starts the game with the select() function and allows for the player selection to be highlighted for the duration of the game round.

  ![Player area](/assets/images/readme-img/player-area.png)

- __Computer area__
 
  The computer area is the area where the computer makes its choice. I wanted to have a more interactive feel to the page and let the player see which choices have been made to make the entire experience more fun.

  The area consists of the same buttons as the player area but when starting the game by making a selection, the computer's choice will be highlighted in red. This was achieved by adding the displaySheldonChoice() switch function. The highlight resets whenever a new game round is started.

  ![Computer area](/assets/images/readme-img/computer-area.png)

  The cursor for every button has been changed to "not allowed" so that players understand that they cannot make a choice for the computer. I have also added onclick alerts in case players might try to anyway, with messages from "Sheldon" for further immersion.

  ![Not-allowed pointer](/assets/images/readme-img/not-allowed.png)

  ![Alert](/assets/images/readme-img/alert.png)

- __Choice area__

  The choice area has been created to further highlight which choice the computer has made in case it is hard for players to follow what the different icons stand for. With the displaySheldonChoice() switch function I have added a small text, which allows players to read which choice the computer has made.

  ![Choice area](/assets/images/readme-img/choice-area.png) 

- __Result area__

  The result area shows whether the player has won, lost or had a tie against the computer. The if/else checkResult() function helps determine what the result of the choices are and displays a message under the computer choice. It's supposed to highlight the result by adding the player and computer color depending on the outcome: yellow for a win, red for a loss. A tie is displayed in a neutral color.

  Here is a picture of how it looks like when the player wins:

  ![Player win](/assets/images/readme-img/result-area-win.png)

  Here is a picture of how it looks like when the player loses:

  ![Player loss](/assets/images/readme-img/result-area-loss.png)

  Here is a picture of how it looks like when the result is a tie:

  ![Tie](/assets/images/readme-img/result-area-tie.png)

- __Score area__

  The score area shows how many games either the player or the computer has won. It is supposed to be a fun counter in case players want to keep track of their games' outcome. The color are adjusted to fit the rest of the game, which means that yellow is for the player's win record and red for the computer's. This is achieved by the incrementPlayerScore() and incrementSheldonScore() functions, which are inspired by the Code Institute [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/05-tidying-up/01-a-few-last-things) challenge.

  ![Score area](/assets/images/readme-img/score-area.png)

- __Rules area__

  The rules area has been created in case players are not familiar with how the game works or simply because they want to refresh their memory. With the link in the header, players can skip past the game if they want to read the rules first, alternatively scroll down and check on the rules after they have started the game. 

  The rules section starts with a quote from "The Big Bang Theory" where Sheldon explains the rules, followed by an image, which shows how the different choices affect each other. These are more meant as gimmicks, as they can be hard to follow but help increase the feel of the page. I have also added a table to make the rules clearer to read. In the table the icons from the buttons were added so that players recognize the choices.

  ![Rules area: quote and image](/assets/images/readme-img/rules-area-1.png)
  ![Rules area: table](/assets/images/readme-img/rules-area-2.png)

### JavaScript 

- __Getting information from the DOM__

  - When making the game I wanted to first add all the relevant variables, which were going to be used in the game to make sure I had everything I needed for making the game work. 
  - During the coding process I would come back to this list and update it depending on if I would see the need for new variables to arise.

- __Variable "choices"__

  - As mentioned, I have taken inspiration by [YvonneDev](https://diyifang.medium.com/spock-rock-game-with-javascript-f3cbe9ea61a4) as well as another forum thread on [StackOverflow](https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript) in order to create a game, which not only is user friendly but keeps the code behind it tidy and object oriented. For this I have chosen to create "choices" variable and store an array with different information types inside of it, which would help build other functions.

- __sheldonRandomChoice function__

  - The function was created with help of a Math.random function to randomize the answers, as well as an if/else statement, which helps the program to know when to take certain choices (Rock, Paper, Scissors, Lizard or Spock).

- __displaySheldonChoice function__

  - This function has been created so that one code block with the computer choice would be executed and show what selection the computer has been made. This was best achieved with a switch statement.

- __select(playerChoice) function__

  - This function executes when the player clicks on a button since an onclick event was added in the HTML file. A switch statement was used here as well, as only a certain part of the code block needs to run, when the player makes a choice.
  - It is also the function, which starts the entire game since it's supposed to start when the player has made a choice, thus the runGame function inside of it.

- __incrementPlayerScore and incrementSheldonScore__

  - These functions were inspired by the ["Love Maths"](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/05-tidying-up/01-a-few-last-things) project. ParseInt was used in order to return string values as integers.

- __checkResult(playerChoice)__

  - This function was used to check the result of the different choices. An if/else statement was used for the different outcomes and in order to not having to write many code lines for all the different outcomes, the indexOf() method was used. indexOf() returns -1 if the value is not found, so as long as the player choice (rock, paper, scissors, lizard or spock) has the value of defeat, it will be greater than -1, which means that the player will win. Should the value not appear, it cannot be greater than -1, which will mean the player loses.
  - __choice.defeats.indexOf(sheldonChoice)>-1__

- __clearSelected function__

  - This function clears out all highlighted choices, as it would be confusing for player to see their previous choices at the start of each new game round. This function is rather simple as I could not find a better way to keep the code shorter and object oriented in the time frame, as well as understand the steps that were taken to make it so.

- __startGame function__

  - The function, which triggers all other functions and runs the game.

### Features Left to Implement

- I would like to add a sound queue for a win, for a loss and a tie
- Display a picture for either a win, a loss or tie.

## Testing 

- __Responsiveness__

  - Responsiveness has been tested in DevTools in order to be able to test on as many devices and screen sizes as possible.

  - A couple of examples of iPhone 5 screen size (320 x 568)

    - ![Bazinga - iPhone 5](/assets/images/readme-img/iphone5-1.png)
    - ![Bazinga continuation - iPhone 5](/assets/images/readme-img/iphone5-2.png)

  - A couple of examples of iPad screen size (768 x 1024)

    - ![Bazinga - iPad](/assets/images/readme-img/ipad-1.png)
    - ![Bazinga continuation - iPad](/assets/images/readme-img/ipad-2.png)
  
  - Summary of testing, summarized in a table

    - Everything is running as expected.

     ![Responsiveness tests](/assets/images/readme-img/responsiveness-bazinga.png)

- __Bugs__

  - My first syntax error happened when I wrote computerChoice() instead of sheldonChoice(), with the result that the game couldn't be played.
  - I forgot to add the parameter playerChoice inside the checkResult() function when calling the startGame(playerChoice) function, which gave an error that "defeats" was undefined and the game wouldn't run.
  - I forgot to change classList to "selected-sheldon" inside the displaySheldonChoice() function when copying from my select() function, which resulted in that the computer choices weren't highlighted.
  - I had missed some quotation marks inside the following array, which resulted in that whenever the player chose "Spock", they would automatically lose:
      - spock: {name: 'Spock', defeats: ['scissors, rock']} (This is how it looked like).
  

- __Browser Compatibility__

  - I tested the page on Chrome, Edge, Firefox and Opera. I do not have access to Safari and can therefore not test it on that browser.
  - Everyting is running as expected.

  ![Browser compatibility](/assets/images/readme-img/browser-compatibility-bazinga.png)

- __Lighthouse__

  - Performance test for desktop 
    - ![Lighthouse desktop index.html](/assets/images/readme-img/lighthouse-desktop.png)

   - Performance test for mobile 
    - ![Lighthouse mobile index.html](/assets/images/readme-img/lighthouse-mobile.png)
    

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C validator. Tested all pages W3C validator for all pages 
    - ![HTML](/assets/images/readme-img/html-validator.png)
- CSS
  - No errors were found when passing through the official W3C CSS validator Jigsaw validator. 
    - ![CSS](/assets/images/readme-img/css-validator.png)
- JavaScript
  - No errors were returned when passing through the official JavaScript validator. There are however warnings because I used "let" for my variables. I have to admit that I do not understand the warnings and what I am supposed to do for fixing them.
    - ![JavaScript](/assets/images/readme-img/js-validator.png).

### Unfixed Bugs

There are no unfixed bugs. 

## Deployment 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Select "Pages" on the left side bar.
  - Source should be set to "Deploy from a branch" and branch should be set to "main" and folder to "/root".
  - Click on save and wait for page to be deployed (can take several minutes).
  - Refresh page and the link should appear on the top of the 'GitHub pages' page.

The live link can be found here - https://bubinib.github.io/bazinga/ 


## Credits 

### Code - Coding help

- My main inspiration for my functions and layout for my JavaScript file come from [YvonneDev](https://diyifang.medium.com/spock-rock-game-with-javascript-f3cbe9ea61a4), as I really liked the use of highlighting computer choices, making the game more user friendly, as well as keeping the code tidy and object oriented.
- When googling for inspiration of how a game of rock-paper-scissors could look like, I found helpful code, which inspired me further in creating an array for the 'choices' variable and using it in the checkResult(playerChoice) function. The forum thread is on [StackOverflow](https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript).
- I looked up how to implement media queries on [W3School Media queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp) and [W3Schools Examples on media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp).
- I generated my GitHub and GitPod from the [Code Institute GitPod template](https://github.com/Code-Institute-Org/gitpod-full-template)
- I looked at the ["Love Maths"](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/05-tidying-up/01-a-few-last-things) project for the code on how to implement a favicon. I converted my png to favicon on [favicon.io](https://favicon.io/favicon-converter/).
- Inspiration from the ["Love Maths"](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/05-tidying-up/01-a-few-last-things) project was taken in creating the score function.
- I looked at [W3School's example](https://www.w3schools.com/cssref/pr_class_cursor.php) for changing the look of mouse cursors.

### Content 

- The icons for the buttons were taken from [Font Awesome](https://fontawesome.com/)
- The fonts were taken from [Google Fonts](https://fonts.google.com/)
- I used Code Institutes template for creating this README. [README template](https://github.com/Code-Institute-Solutions/readme-template).
- The quote for the rules was taken from [Big Bang Theory fansite](https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/).


### Media

- The background image used for this webpage was taken from [Pexels](https://www.pexels.com/sv-se/)
- The pngs for the rules image, favicon and logo were taken from [FAVPNG](https://favpng.com/png_search/rock-paper-scissors-lizard-spock).