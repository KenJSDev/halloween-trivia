var animation = 0;
var correct = 0;
var selected1 = false;
var selected2 = false; 
var selected3 = false;
var selected4 = false; 
var endMusicG = 0;
var endMusicB = 0;
var goodEnding = 0;
var badEnding = 0;

/**************** Sound Functions *****************/
// These functions will be called by other functions which will
// play music at certain parts of the game. Different sounds will
// play when the user submits an answer depending on whether or not
// it is correct
function playMusic() 
{
  var music = document.getElementById("music");
  music.play();
  console.log("playMusic called");
}

function goodMusic() 
{
  if (goodEnding == 1) 
  {
    var goodMusic = document.getElementById("goodEnd");
    goodMusic.play();
    console.log("goodMusic called - Don't Fear the Reaper");
  }
}

function badMusic() 
{
  if (badEnding == 1) 
  {
    var badMusic = document.getElementById("badEnd");
    badMusic.play();
    console.log("badMusic called - Halloween Theme");
  }
}

function wrongSound() 
{
  var wrong = document.getElementById("wrong")
  wrong.play();
  console.log("wrongSound called - Loomis from H6");
}

function q1Correct() 
{
  var q1Correct = document.getElementById("q1Correct")
  q1Correct.play()
  console.log("q1Correct called - Lynda in 1978")
}

function q2Correct() 
{
  var q2Correct = document.getElementById("q2Correct")
  q2Correct.play();
  console.log("q2Correct called - Shit Earl!")
}

function q3Correct() 
{
  var q3Correct = document.getElementById("q3Correct")
  q3Correct.play();
  console.log("q3Correct called - Kill For Him")
}

function q4Correct() 
{
  var q4Correct = document.getElementById("q4Correct")
  q4Correct.play();
  console.log("q4Correct called - Laurie's Good Bye")
}

function q5Correct() 
{
  var q5Correct = document.getElementById("q5Correct")
  q5Correct.play();
  console.log("q5Correct called - Loomis and Marion II")
}

function q6Correct()
{
  var q6Correct = document.getElementById("q6Correct")
  q6Correct.play();
  console.log("q6Correct called - You don't have to look far")
}

function q7Correct() 
{
  var q7Correct = document.getElementById("q7Correct")
  q7Correct.play();
  console.log("q7Correct called - Allyson Explains")
}

function q8Correct() 
{
  var q8Correct = document.getElementById("q8Correct")
  q8Correct.play();
  console.log("q8Correct called - I wish I had you all alone")
}

function q9Correct() 
{
  var q9Correct = document.getElementById("q9Correct")
  q9Correct.play();
  console.log("q9Correct called - Mommy, It's raining red")
}

function q10Correct() 
{
  var q10Correct = document.getElementById("q10Correct")
  q10Correct.play();
  console.log("q10Correct called - Hacksaw Not Jim Duggan")
} 

/**************** Display Info *****************/
// The Info button will display information relevant to the game
// The Close button will take the user back to the start screen
function clickInfo () 
{
  document.getElementById("startArea").style.display = "none";
  document.getElementById("infoArea").style.display = "block";

  console.log("Info Button: Clicked");
  console.log(infoArea.style.display);
}	

function closeInfo() 
{
  document.getElementById("startArea").style.display = "grid";
  document.getElementById("infoArea").style.display = "none";

  console.log("Back Button: Clicked");
  console.log(infoArea.style.display);
}

/**************** Start Game *****************/
// Change .png background to .gif to start animation / Hide Buttons
// If the animation has already played during the session, do not play if user opts to play again
function startGame() 
{
  if (animation == 0) 
  {
  startArea.className = "startscreenAnimated";
  setTimeout(function() { gameArea.style.display = "block"}, 10000);
  setTimeout(function() { startArea.style.display = "none"}, 10000);
  document.getElementById("startbutton").style.display = "none";
  document.getElementById("infobutton").style.display = "none";
  playMusic();
  }

  else 
  {
    document.getElementById("startArea").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("infobutton").style.display = "none";
  }

    // Set question.id and correct to 0 to ensure that the score is reset
    question.id = 0;
    correct = 0;

    // Pulls the first question to start the game
    nextQ();

    // Console information for debugging 
    console.log("startGame() ", "Scoring System Logging: ", question.id, correct, animation);
}

/**************** Reset Game *****************/
function resetGame() 
{
  animation++;

  // Reset score so that the new game begins at 0
  question.id = 0;
  correct = 0;

  // Set all selections to selectionFalse
  document.getElementById("op1").className = "selectionFalse";
  document.getElementById("op2").className = "selectionFalse";
  document.getElementById("op3").className = "selectionFalse";
  document.getElementById("op4").className = "selectionFalse";

  // Hide the endArea
  startArea.className = "startscreen";
  document.getElementById("startbutton").style.display = "block";
  document.getElementById("infobutton").style.display = "block";
  document.getElementById("startArea").style.display = "grid";
  document.getElementById("endAreaGood").style.display = "none";
  document.getElementById("endAreaBad").style.display = "none";
		
  console.log("resetGame()", "Scoring System Logging: ", question.id,  correct);
	
}

/****************
Option Functions
- select(#) sets the className for the selected values to "selectedTrue", changing to a green and black radiant 
- The select(#) functions will server no other purpose
- Changes should be applied upon clicking the submit button 
- selected1 through selected4 variables are used for condition evaluation to determine which answer is correct
*****************/
function select1() 
{
  if (op1.className == "selectionFalse") 
  {			
    selected1 = true;
    selected2 = false; 
    selected3 = false; 
    selected4 = false;

    document.getElementById("op1").className = "selectionTrue";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";
    document.getElementById("submitA").disabled = false;

    console.log("Option 1 Selected", selected1, selected2, selected3, selected4);
  }
}

function select2() 
{
  if (op2.className == "selectionFalse") 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionTrue";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";
    document.getElementById("submitA").disabled = false;

    selected1 = false;
    selected2 = true; 
    selected3 = false; 
    selected4 = false;

    console.log("Option 2 Selected");
  } 
}
	
function select3() 
{
  if (op3.className == "selectionFalse") 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionTrue";
    document.getElementById("op4").className = "selectionFalse";
    document.getElementById("submitA").disabled = false;

    selected1 = false;
    selected2 = false; 
    selected3 = true; 
    selected4 = false;
	
    console.log("Option 3 Selected");	
  }
}
// PICK UP CODE CLEAN UP / INDENT EFFORTS HERE
function select4() 
{
  if (op4.className == "selectionFalse") 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionTrue";
    document.getElementById("submitA").disabled = false;

    selected1 = false;
    selected2 = false; 
    selected3 = false; 
    selected4 = true;
	
    console.log("Option 4 Selected");
  }
}

/**************** Begin Questions *****************/
// Sets question content which will be pulled by the nextQ function based on the "id"
let question = [
  {
    id: 1,
    headerQ: "Question 1",
    content: "In Halloween 1978, who does Lynda suggest is the driver of the Smith's Grove company car?",
    op1: "Ben Tramer",
    op2: "Tommy Doyle", 
    op3: "Devon Graham", //correct
    op4: "Tommy Jarvis"
  },

  {
    id: 2,
    headerQ: "Question 2",
    content: "Who was the first person to be killed for being mistaken as Michael Myers?",
    op1: "Ted Hollister", //correct
    op2: "Ben Tramer",
    op3: "Corey Cunningham",
    op4: "Mr. Tivoli"
  },

  {
    id: 3,
    headerQ: "Question 3",
    content: "Who is teased as Michael's first succesor that is NOT a relative of his?",
    op1: "Jamie Lloyd",
    op2: "Corey Cunningham",
    op3: "The Man in Black",
    op4: "Danny Strode" // correct
  },

  {
    id: 4,
    headerQ: "Question 4",
    content: "What are Laurie's last words to Michael in Halloween Resurrection?",
    op1: "Happy Halloween, Michael",
    op2: "I'll see you in Hell", // correct
    op3: "The Price is Wrong, Bitch!",
    op4: "It's your last Halloween" 
  },

  {
    id: 5,
    headerQ: "Question 5",
    content: "In Halloween II, Dr. Loomis theorized that the feast of Samhain is not about ghosts or goblins, but about what?",
    op1: "A Runic Celebration",
    op2: "Satanic Worship",
    op3: "A Party that is Lit",
    op4: "The Unconscious Mind" // correct
  },

  {
    id: 6,
    headerQ: "Question 6",
    content: "In Halloween Resurrection, Jim also has a theory regarding Michael Myers and the unconscious mind. Who does he think Michael is?",
    op1: "All of Us", //correct
    op2: "The Anti-Christ",
    op3: "A Copycat Killer",
    op4: "A tortured soul"
  },

  {
    id: 7,
    headerQ: "Question 7",
    content: "What drove Michael to go after Laurie Strode in 2018?",
    op1: "Revenge",
    op2: "Dr. Sartain", // correct
    op3: "'The Evil'",
    op4: "A Curse" 
  },

  {
    id: 8,
    headerQ: "Question 8",
    content: "In Halloween 2018, a song was written specifically to reference a scene in 1978. What is the title?",
    op1: "Close To Me", // correct
    op2: "Until It Sleeps",
    op3: "Haunted Head",
    op4: "Man Behind the Mask"
  },

  {
    id: 9,
    headerQ: "Question 9",
    content: "Before we got 'Willy the Kid' in Halloween Ends, we got 'Barry Sims' in Halloween 6. What lead Tommy to discover Barry's body?",
    op1: "Thumping from the Basement",
    op2: "Little Girl dancing in Blood", // correct
    op3: "A Car Horn",
    op4: "Tommy Saw it Happen"
  },

  {
    id: 10,
    headerQ: "Question 10",
    content: "Who in the Halloween Universe murdered his family around the same time period Michael killed Judith?",
    op1: "Corey Cunningham",
    op2: "Charlie Bowles", // correct
    op3: "Sam Loomis",
    op4: "Elias Voorhees" 
  }
]

/**************** nextQ() *****************/
// The nextQ function runs when the user clicks the "Next" button, increases the question.id variable, and pulls the
// subsequent question and answer data 
// When question.id hits 11, the End Screen is populated
function nextQ() {

  question.id++;
  document.getElementById("nextQ").disabled = true; 
  document.getElementById("submitA").disabled = true;
  document.getElementById("op1").disabled = false;
  document.getElementById("op2").disabled = false;
  document.getElementById("op3").disabled = false;
  document.getElementById("op4").disabled = false;

  if (question.id == 1) 
  {
    document.getElementById("headerQ").innerHTML = question[0].headerQ;
    document.getElementById("content").innerHTML = question[0].content;
    document.getElementById("op1").innerHTML = question[0].op1;
    document.getElementById("op2").innerHTML = question[0].op2;
    document.getElementById("op3").innerHTML = question[0].op3;
    document.getElementById("op4").innerHTML = question[0].op4;

    console.log("Question 1 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 2) 
  { 
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse"; 

    document.getElementById("headerQ").innerHTML = question[1].headerQ;
    document.getElementById("content").innerHTML = question[1].content;
    document.getElementById("op1").innerHTML = question[1].op1;
    document.getElementById("op2").innerHTML = question[1].op2;
    document.getElementById("op3").innerHTML = question[1].op3;
    document.getElementById("op4").innerHTML = question[1].op4;

    console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 3) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[2].headerQ;
    document.getElementById("content").innerHTML = question[2].content;
    document.getElementById("op1").innerHTML = question[2].op1;
    document.getElementById("op2").innerHTML = question[2].op2;
    document.getElementById("op3").innerHTML = question[2].op3;
    document.getElementById("op4").innerHTML = question[2].op4;

    console.log("Question 3 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 4) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[3].headerQ;
    document.getElementById("content").innerHTML = question[3].content;
    document.getElementById("op1").innerHTML = question[3].op1;
    document.getElementById("op2").innerHTML = question[3].op2;
    document.getElementById("op3").innerHTML = question[3].op3;
    document.getElementById("op4").innerHTML = question[3].op4;

    console.log("Question 4 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 5) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[4].headerQ;
    document.getElementById("content").innerHTML = question[4].content;
    document.getElementById("op1").innerHTML = question[4].op1;
    document.getElementById("op2").innerHTML = question[4].op2;
    document.getElementById("op3").innerHTML = question[4].op3;
    document.getElementById("op4").innerHTML = question[4].op4;

    console.log("Question 5 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 6) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[5].headerQ;
    document.getElementById("content").innerHTML = question[5].content;
    document.getElementById("op1").innerHTML = question[5].op1;
    document.getElementById("op2").innerHTML = question[5].op2;
    document.getElementById("op3").innerHTML = question[5].op3;
    document.getElementById("op4").innerHTML = question[5].op4;

    console.log("Question 6 Called", "question.id: ", question.id,  "correct: ", correct);
  }
// *****************
  if (question.id == 7) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[6].headerQ;
    document.getElementById("content").innerHTML = question[6].content;
    document.getElementById("op1").innerHTML = question[6].op1;
    document.getElementById("op2").innerHTML = question[6].op2;
    document.getElementById("op3").innerHTML = question[6].op3;
    document.getElementById("op4").innerHTML = question[6].op4;

    console.log("Question 7 Called", "question.id: ", question.id,  "correct: ", correct);
  }
	
  if (question.id == 8) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[7].headerQ;
    document.getElementById("content").innerHTML = question[7].content;
    document.getElementById("op1").innerHTML = question[7].op1;
    document.getElementById("op2").innerHTML = question[7].op2;
    document.getElementById("op3").innerHTML = question[7].op3;
    document.getElementById("op4").innerHTML = question[7].op4;

    console.log("Question 8 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 9) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[8].headerQ;
    document.getElementById("content").innerHTML = question[8].content;
    document.getElementById("op1").innerHTML = question[8].op1;
    document.getElementById("op2").innerHTML = question[8].op2;
    document.getElementById("op3").innerHTML = question[8].op3;
    document.getElementById("op4").innerHTML = question[8].op4;
	  
    console.log("Question 9 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 10) 
  {
    document.getElementById("op1").className = "selectionFalse";
    document.getElementById("op2").className = "selectionFalse";
    document.getElementById("op3").className = "selectionFalse";
    document.getElementById("op4").className = "selectionFalse";

    document.getElementById("headerQ").innerHTML = question[9].headerQ;
    document.getElementById("content").innerHTML = question[9].content;
    document.getElementById("op1").innerHTML = question[9].op1;
    document.getElementById("op2").innerHTML = question[9].op2;
    document.getElementById("op3").innerHTML = question[9].op3;
    document.getElementById("op4").innerHTML = question[9].op4;

    console.log("Question 10 Called", "question.id: ", question.id,  "correct: ", correct);
  }

  if (question.id == 11 && correct >= 7) 
  {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("endAreaGood").style.display = "block";

    setTimeout(function() {endAreaGood.className = "goodEnd"}, 12200);

    goodEnding++;

    if (endMusicG == 0) 
    {
      goodMusic();
    }

    document.getElementById("correctNum").innerHTML = ("Correct: " + correct);

    console.log("Ending Reached - Good Ending");
  }	

  if (question.id == 11 && correct < 7) 
  {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("endAreaBad").style.display = "block";

    badEnding++;
		
    setTimeout(function() {endAreaBad.className = "badEnd"}, 8000);

    if (endMusicB == 0) 
    {
      badMusic();
    }

    document.getElementById("correctNumBad").innerHTML = ("Correct: " + correct);

    console.log("Ending Reached - Bad Ending");
  }	
}

/**************** submitA() *****************/
// The submitA function executes when a user presses the "Submit" button 
// The question.id and selected variables are evaluated through conditions 
// to determine whether or not the answer is correct
// User feedback is provided upon clicking the submit button
// q#Correct functions play a sound byte respective to the result 
function submitA() 
{
  document.getElementById("submitA").disabled = true; 
  document.getElementById("nextQ").disabled = false;
  document.getElementById("op1").disabled = true;
  document.getElementById("op2").disabled = true;
  document.getElementById("op3").disabled = true;
  document.getElementById("op4").disabled = true; 

  if (question.id == 1 && selected3 == true) 
  {
    correct++;
    q1Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Lynda initially thinks Myers is Devon Graham. In Halloween Ends, Corey's mom knows a man named Devon that owns a call center."
  }

  if (question.id == 1 && selected1 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Ben Tramer is Laurie's crush from the original film."
    op1.className = "selectionWrong";
  }

  if (question.id == 1 && selected2 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Tommy Doyle is the boy Laurie babysat and could not drive legally at the time."
    op2.className = "selectionWrong";
  }

  if (question.id == 1 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Tommy Jarvis is a protagonist in the Friday the 13th franchise, appearing in parts 4 - 6."
    op4.className = "selectionWrong";
   }

  if (question.id == 2 && selected1 == true) 
  {
    correct++;
    q2Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Ted Hollister was hiding in bushes when the mob from Halloween 4 mistook him for Michael and shot him to death.";
  }

  if (question.id == 2 && selected2 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Ben Tramer was mistaken for Michael, but was killed by a cop who did not see him crossing the road.";
    op2.className = "selectionWrong";
  }

  if (question.id == 2 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Corey Cunningham is accused of being like Michael, but is not killed due to being mistaken as him.";
    op3.className = "selectionWrong";
  }

  if (question.id == 2 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Mr. Tavoli took his own life after being mistaken as Michael.";
    op4.className = "selectionWrong";
  }

  if (question.id == 3 && selected4 == true) 
  {
    correct++;
    q3Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "The Cult of Thorn had Danny Strode targeted as the next Shape, seemingly after Myers would kill baby Stephen.";
  }

  if (question.id == 3 && selected1 == true) {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Jamie Lloyd was seemingly set up to be the next Shape, but she is Michael's niece.";
    op1.className = "selectionWrong";
  }

  if (question.id == 3 && selected2 == true) {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Corey Cunningham wasn't introduced until Halloween Ends in 2022.";
    op2.className = "selectionWrong";
  }

  if (question.id == 3 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "'The Man in Black' first appeared in Halloween 5, but had always been an ally or keeper of The Shape.";
    op3.className = "selectionWrong";
  }

  if (question.id == 4 && selected2 == true) 
  {
    correct++;
    q4Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Laurie kisses Michael and says she'll see him in hell before falling to hear death.";
  }

  if (question.id == 4 && selected1 == true) {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Laurie says 'Happy Halloween, Michael' in Halloween 2018.";
    op1.className = "selectionWrong";
  }

  if (question.id == 4 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "This is a quote from Happy Gilmore as he was fighting his own Boogeyman.";
    op3.className = "selectionWrong";
  }

  if (question.id == 4 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "The 'Last Halloween' line does appear in some trailers for Halloween Ends, but was not spoken by Laurie in Resurrection.";
    op4.className = "selectionWrong";
  }

  if (question.id == 5 && selected4 == true) 
  {
    correct++;
    q5Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Loomis theorizes that druids who practiced Samhain were drvien by their own, unconscious darkness rather than an external, spiritual force.";
  }

  if (question.id == 5 && selected1 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Runes are brought into the storyline in Halloween 5, but were not discussed in Halloween II.";
    op1.className = "selectionWrong";
  }

  if (question.id == 5 && selected2 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Loomis would later state in Halloween 5 that he prayed Michael would burn in Hell, but knew Hell would not have him. He doesn't blame Satan at any point.";
    op2.className = "selectionWrong";
  }

  if (question.id == 5 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Halloween II came out in 1981 AD / 35 BT (Before TikTok), so people did not talk like this at the time.";
    op3.className = "selectionWrong";
  }

  if (question.id == 6 && selected1 == true) 
  {
    correct++;
    q6Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Jim feels that Michael Myers is the darkness inside us all. He gives an example of wanting to strangle an old woman for taking too long at checkout.";
  }

  if (question.id == 6 && selected2 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Jim doesn't come across as somebody devoted to the Christian religion and likely wouldn't point toward the Anti-Christ.";
    op2.className = "selectionWrong";
  }

  if (question.id == 6 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Jim has theories, but none of them revolve around a copy cat.";
    op3.className = "selectionWrong";
  }

  if (question.id == 6 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "While there are some indications Michael was abused, these revelations did not yet occur and would later be revealed to be part of the 'Dangertainment' show.";
    op4.className = "selectionWrong";
  }

  if (question.id == 7 && selected2 == true) 
  {
    correct++;
    q7Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Michael Myers had no interest in pursuing Laurie Strode. Sartain drove him to pursue Laurie both literally and figuratively.";
  }

  if (question.id == 7 && selected1 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "There is no strong indication that Michael is concerned with revenge. Each battle with Laurie is circumstantial.";
    op1.className = "selectionWrong";
  }

  if (question.id == 7 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "The concept of Michael being driven by an evil force of sorts is explored in Ends, but not credited for Michael.";
    op3.className = "selectionWrong";
  }

  if (question.id == 7 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "The Curse storyline is explored in Halloween 5 and 6, neither of which are considered cannonical in the 2018 timeline.";
    op4.className = "selectionWrong";
  }

  if (question.id == 8 && selected1 == true) 
  {
    correct++;
    q8Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Jamie Lee Curtis made up a song to sing during filming of the original film so they wouldn't need the rights. This song plays both in the film and during the credits.";
  }

  if (question.id == 8 && selected2 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "'Until It Sleeps' is a song by Metalica about battling personal demons.";
    op2.className = "selectionWrong";
  }

  if (question.id == 8 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "'Haunted Head' is a song by Mark Crozer, who performed WWE Superstar Bray Wyatt's original theme.";
    op3.className = "selectionWrong";
  }

  if (question.id == 8 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "'Man Behind the Mask' is a song written and performed by Alice Cooper for the Friday the 13th: Part IV film.";
    op4.className = "selectionWrong";
  }

  if (question.id == 9 && selected2 == true) 
  {
    correct++;
    q9Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Tommy hears a young girl claim that it's raining red. In the Producer's Cut, she sings the lines.";
  }

  if (question.id == 9 && selected1 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "John Strode heard thumping coming from the dryer, where he found the remains of his wife Debra.";
    op1.className = "selectionWrong";
  }

  if (question.id == 9 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Passing out on the car horn is a trope in multiple Halloween films, but it wasn't a car horn that lead Tommy to Barry's body.";
    op3.className = "selectionWrong";
  }

  if (question.id == 9 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Tommy either didn't see it happen or he was really good at pretending he didn't.";
    op4.className = "selectionWrong";
  }

  if (question.id == 10 && selected2 == true) 
  {
    correct++;
    q10Correct();
    document.getElementById("headerQ").innerHTML = "Correct"
    document.getElementById("content").innerHTML = "Charlie Bowles killed his family about 15 years before 1978. His story is expanded on in the graphic novel 'Halloween: Nightdance.'";
  }

  if (question.id == 10 && selected1 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Corey Cunningham had not been born when Michael killed Judith.";
    op1.className = "selectionWrong";
  }

  if (question.id == 10 && selected3 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Sam Loomis is Dr. Loomis' name, which is a reference to one of the protagonists in Psycho who goes by the same name.";
    op3.className = "selectionWrong";
  }

  if (question.id == 10 && selected4 == true) 
  {
    wrongSound();
    document.getElementById("headerQ").innerHTML = "Wrong"
    document.getElementById("content").innerHTML = "Elias Voorhees is the name of Jason Voorhees' father and has nothing to do with Halloween.";
    op4.className = "selectionWrong";
  }

	console.log("submitA Function Called", "question.id: ", question.id, 
	"correct: ", correct);
}
