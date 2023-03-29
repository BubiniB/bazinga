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

  The rules section starts with a quote from "The Big Bang Theory" where Sheldon explains the rules, followed by an image, which shows how the different choices affect each other. These are more meant as gimmicks, as they can be hard to follow but help increase the feel of the page. I have also added a table to make the rules clearer to read.

  ![Rules area: quote and image](/assets/images/readme-img/rules-area-1.png)
  ![Rules area: table](/assets/images/readme-img/rules-area-2.png)



### Features Left to Implement

- 

## Testing 

- __Responsiveness__

  - Responsiveness has been tested in DevTools in order to be able to test on as many devices and screen sizes as possible.

  - A couple of examples of iPhone 5 screen size (320 x 568)

    - ![Landing page - iPhone 5]()
    - ![Experience page - iPhone 5]
    - ![Portfolio page - iPhone 5]
    - ![Contact page - iPhone 5]

  - A couple of examples of iPad screen size (768 x 1024)

    - ![Landing page - iPad]()
    - ![Experience page - iPad]()
    - ![Portfolio page - iPad]()
    - ![Contact page - iPad]()
  
  - Summary of testing, summarized in a table

    - ![Responsiveness tests]()

- __Bugs__

  - No bugs were found while programming this webpage. 

- __Browser Compatibility__

  - I tested the page on Chrome, Edge, Firefox and Opera. I do not have access to Safari and can therefore not test it on that browser.
  - Firefox seems to have problems displaying the chosen fonts.

  ![Browser compatibility]()

- __Lighthouse__

  - Performance test for desktop (Portfolio was omitted)
    - ![Lighthouse desktop index.html]()
    - ![Lighthouse desktop experience.html]()
    - ![Lighthouse desktop contact.html]()

   - Performance test for mobile (Portfolio was omitted)
    - ![Lighthouse mobile index.html]()
    - ![Lighthouse mobile experience.html]()
    - ![Lighthouse mobile contact.html]()

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C validator. Tested all pages [W3C validator for all pages](/assets/images/w3c-html.png)
- CSS
  - No errors were found when passing through the official W3C CSS validator [(Jigsaw) validator](/assets/images/w3c-css.png)

### Unfixed Bugs

There are no unfixed bugs. 

## Deployment 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Select "Pages" on the left side bar.
  - Source should be set to "Deploy from a branch" and branch should be set to "main" and folder to "/root".
  - Click on save and wait for page to be deployed (can take several minutes).
  - Refresh page and the link should appear on the top of the 'GitHub pages' page.

The live link can be found here - https://bubinib.github.io/cristina-ekqvist/index.html 


## Credits 

### Code - Coding help

- Inspiration from the ["Love running"](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main/02-creating-the-header/05-navigation-styling-2) project was taken while creating the header.
- When changing the style and layout (changing the order of the links) of the header/navigation bar on smaller screen sizes I found help on [Stack Overflow](https://stackoverflow.com/questions/39217732/is-it-possible-to-change-the-order-of-list-items-using-css3) 
- When trying to change background image positions I found help on W3Schools [W3Schools](https://www.w3schools.com/cssref/pr_background-position.php).
- I looked up how to implement media queries on [W3School Media queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp) and [W3Schools Examples on media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp).
- I generated my GitHub and GitPod from the [Code Institute GitPod template](https://github.com/Code-Institute-Org/gitpod-full-template)

### Content 

- The icon in the footer were taken from [Font Awesome](https://fontawesome.com/)
- The fonts were taken from [Google Fonts](https://fonts.google.com/)
- I used Code Institutes template for creating this README. [README template](https://github.com/Code-Institute-Solutions/readme-template).
- I took inspiration for my color scheme from [Colorhunt](https://colorhunt.co/palettes/earth).
- I took inspiration on how I want my page to look like (style and layout) from an article on [Wixfresh](https://www.wixfresh.com/post/resume-websites).
- I went to [Elementor](https://elementor.com/blog/font-pairing/) in order to find a good combination of different fonts.


### Media

- All background images used for this webpage were taken from [Pexels](https://www.pexels.com/sv-se/)