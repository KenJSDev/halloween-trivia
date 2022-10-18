var animation = 0;
var correct = 0;
var selected1 = false;
var selected2 = false; 
var selected3 = false;
var selected4 = false; 

/**************** Display Info *****************/
function clickInfo () 
{
	document.getElementById("startArea").style.display = "none";
	document.getElementById("infoArea").style.display = "block";

	console.log("Info Button: Clicked");
	console.log(infoArea.style.display);
}	

function closeInfo() 
{
	document.getElementById("startArea").style.display = "block";
	document.getElementById("infoArea").style.display = "none";

	console.log("Back Button: Clicked");
	console.log(infoArea.style.display);
}

/**************** Start Game *****************/

function startGame() {
	animation++;

	// Change .png background to .gif to start animation / Hide Buttons
	// If the animation has already played during the session, do not play if user opts to play again
	if (animation = 0) {
	startArea.className = "startscreenAnimated";
	setTimeout(function() { gameArea.style.display = "block"}, 10000);
	setTimeout(function() { startArea.style.display = "none"}, 10000);
	}

	else {
	document.getElementById("startArea").style.display = "none";
	document.getElementById("gameArea").style.display = "block";
	document.getElementById("startbutton").style.display = "none";
	document.getElementById("infobutton").style.display = "none";
	}

/****************
Reset Game 
*****************/
function resetGame() {

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
	document.getElementById("startbutton").style.display = "inline";
	document.getElementById("infobutton").style.display = "inline";
	document.getElementById("startArea").style.display = "block";
	document.getElementById("endArea").style.display = "none";
		
	console.log("resetGame()", "Scoring System Logging: ", question.id,  correct);
	
}

/****************
Option Functions
- select(#) sets the className for the selected values to "selectedTrue", changing to a green and black radiant 
- The select(#) functions will server no other purpose
- Changes should be applied upon clicking the submit button 
- selected1 through selected4 variables are used for condition evaluation to determine which answer is correct
*****************/

// Option 1
function select1() {
	
		// Set op1 to true, set all other option elements to false
		if (op1.className == "selectionFalse") {
			
			selected1 = true;
			selected2 = false; 
			selected3 = false; 
			selected4 = false;

			document.getElementById("op1").className = "selectionTrue";
			document.getElementById("op2").className = "selectionFalse";
			document.getElementById("op3").className = "selectionFalse";
			document.getElementById("op4").className = "selectionFalse";

		console.log("Option 1 Selected", selected1, selected2, selected3, selected4);

	}
}
	
// Option 2
		function select2() {
	
		// Set op2 to true, set all over option elements ot false 
		if (op2.className == "selectionFalse") {
		document.getElementById("op1").className = "selectionFalse";
		document.getElementById("op2").className = "selectionTrue";
		document.getElementById("op3").className = "selectionFalse";
		document.getElementById("op4").className = "selectionFalse";

		selected1 = false;
		selected2 = true; 
		selected3 = false; 
		selected4 = false;

		console.log("Option 2 Selected");

	} 
		}
	
// Option 3
		function select3() {

		// Set op3 to true, set all other option elements to false	
		if (op3.className == "selectionFalse") {
		document.getElementById("op1").className = "selectionFalse";
		document.getElementById("op2").className = "selectionFalse";
		document.getElementById("op3").className = "selectionTrue";
		document.getElementById("op4").className = "selectionFalse";

		selected1 = false;
		selected2 = false; 
		selected3 = true; 
		selected4 = false;
	
		console.log("Option 3 Selected");
	
	}
}

// Option 4
		function select4() {

		// Set op4 to true, set all other option elements to false
		if (op4.className == "selectionFalse") {
		document.getElementById("op1").className = "selectionFalse";
		document.getElementById("op2").className = "selectionFalse";
		document.getElementById("op3").className = "selectionFalse";
		document.getElementById("op4").className = "selectionTrue";

		selected1 = false;
		selected2 = false; 
		selected3 = false; 
		selected4 = true;
	
		console.log("Option 4 Selected");
		}
	}

/**************** Begin Questions *****************/

// Content for the first Question 
let question = [
	{
		id: 1,
		headerQ: "Question 1",
		content: "When was Michael Myers born?",
		op1: "October 31st, 1978",
		op2: "October 31st, 1963", 
		op3: "October 19th, 1957", //correct
		op4: "October 19th, 1963"

	},
// Content for the second Question 
	{
		id: 2,
		headerQ: "Question 2",
		content: "Of these characters, who is the only one to never die in a Halloween film?",
		op1: "Lindsay Wallace", //correct
		op2: "Laurie Strode",
		op3: "Tommy Doyle",
		op4: "Doctor Loomis"
	},
// Content for the third Question 
	{
		id: 3,
		headerQ: "Question 3",
		content: "Who is Laurie Strode's secret crush in Halloween 1978?",
		op1: "Devon Graham",
		op2: "Ted Hollister",
		op3: "Jimmy (EMT)",
		op4: "Ben Tramer" // correct
	},

// Content for the fourth Question 
	{
		id: 4,
		headerQ: "Question 4",
		content: "In 2018, Laurie stated that Michael killed 5 people before captivity. Who was his second victim?",
		op1: "Annie",
		op2: "Tow Truck Driver", // correct
		op3: "Bob",
		op4: "Linda" 
	},

// Content for the fifth Question 
	{
		id: 5,
		headerQ: "Question 5",
		content: "What is Michael Myers' middle name?",
		op1: "Nicole",
		op2: "Also Michael",
		op3: "James",
		op4: "Audrey" // correct
	},

// Content for the sixth Question 
	{
		id: 6,
		headerQ: "Question 6",
		content: "The character behind The Man in Black from Halloween 6 debuted in what film?",
		op1: "Halloween (1978)", //correct
		op2: "Halloween II",
		op3: "Halloween 4",
		op4: "Halloween 6"
	},

// Content for the seventh Question 
	{
		id: 7,
		headerQ: "Question 7",
		content: "What character recalls when Michael heard voices in the 'Thorn Trilogy?'",
		op1: "Mrs. Ellrod",
		op2: "Ms. Blankenship", // correct
		op3: "Dr. Mathis",
		op4: "Dr. Loomis" 
	},

// Content for the eigth Question 
	{
		id: 8,
		headerQ: "Question 8",
		content: "What weapon did Jamie Lloyd use when she attacked her step-mother?",
		op1: "Scissors", // correct
		op2: "A scalpel",
		op3: "A kitchen knife",
		op4: "A carpet knife"
	},

// Content for the ninth Question 
	{
		id: 9,
		headerQ: "Question 9",
		content: "What Halloween film includes Michael Myers but not Haddonfield?",
		op1: "Halloween Ends",
		op2: "Halloween H20", // correct
		op3: "Rob Zombie's Halloween II",
		op4: "Halloween III"
	},

// Content for the tenth Question 
	{
		id: 10,
		headerQ: "Question 10",
		content: "What Halloween movie includes multiple masks, including a digitized mask?",
		op1: "Halloween III",
		op2: "Halloween H20", // correct
		op3: "Halloween 6",
		op4: "Halloween Kills" 
	}
]

/****************
Next Question 
*****************/
function nextQ() {

question.id++;
document.getElementById("nextQ").disabled = true; 
document.getElementById("submitA").disabled = false;
document.getElementById("op1").disabled = false;
document.getElementById("op2").disabled = false;
document.getElementById("op3").disabled = false;
document.getElementById("op4").disabled = false;

if (question.id == 1) {

	document.getElementById("headerQ").innerHTML = question[0].headerQ;
	document.getElementById("content").innerHTML = question[0].content;
	document.getElementById("op1").innerHTML = question[0].op1;
	document.getElementById("op2").innerHTML = question[0].op2;
	document.getElementById("op3").innerHTML = question[0].op3;
	document.getElementById("op4").innerHTML = question[0].op4;

	console.log("Question 1 Called", "question.id: ", question.id,  "correct: ", correct);
}

if (question.id == 2) {
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

if (question.id == 3) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 4) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 5) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 6) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 7) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 8) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 9) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

if (question.id == 10) {
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

	console.log("Question 2 Called", "question.id: ", question.id,  "correct: ", correct);
	}

// Populates the endArea screen which displays stats and an option to replay
if (question.id == 11) {
	document.getElementById("gameArea").style.display = "none";
	document.getElementById("endArea").style.display = "block";

	// Timeout to change class so png shows instead of gif (stopping animation)
	setTimeout(function() {endArea.className = "endscreen"}, 9000);

	document.getElementById("correctNum").innerHTML = ("Correct: " + correct);
	}	
}

/****************
Submit Button
*****************/
function submitA() {

	document.getElementById("submitA").disabled = true; 
	document.getElementById("nextQ").disabled = false;
	document.getElementById("op1").disabled = true;
	document.getElementById("op2").disabled = true;
	document.getElementById("op3").disabled = true;
	document.getElementById("op4").disabled = true; 

	if (question.id == 1 && selected3 == true) {
		correct++;
	}

	if (question.id == 2 && selected1 == true) {
		correct++;
	}

	if (question.id == 3 && selected4 == true) {
		correct++;
	}

	if (question.id == 4 && selected2 == true) {
		correct++;
	}

	if (question.id == 5 && selected4 == true) {
		correct++;
	}

	if (question.id == 6 && selected1 == true) {
		correct++;
	}

	if (question.id == 7 && selected2 == true) {
		correct++;
	}

	if (question.id == 8 && selected1 == true) {
		correct++;
	}

	if (question.id == 9 && selected2 == true) {
		correct++;
	}

	if (question.id == 10 && selected2 == true) {
		correct++;
	}

	console.log("submitA Function Called", "question.id: ", question.id, 
	"correct", correct, "op1 className: ", op1.className);
}
