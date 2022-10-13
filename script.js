var correct = 0;
var incorrect = 0;

/****************
Display Info 
*****************/
function clickInfo () {

	document.getElementById("startArea").style.display = "none";
	document.getElementById("infoArea").style.display = "block";

	console.log("Info Button: Clicked");
	console.log(infoArea.style.display);
}	

function closeInfo() {

	document.getElementById("startArea").style.display = "block";
	document.getElementById("infoArea").style.display = "none";

	console.log("Back Button: Clicked");
	console.log(infoArea.style.display);
}

/****************
Start Game 
*****************/

function startGame() {

	// Change .png background to .gif to start animation / Hide Buttons
	startArea.className = "startscreenAnimated";
	document.getElementById("startbutton").style.display = "none";
	document.getElementById("infobutton").style.display = "none";

	// Set a timeout so the startArea is no longer visible and the gameArea is in its place 
	setTimeout(function() { gameArea.style.display = "block"}, 10000);
	setTimeout(function() { startArea.style.display = "none"}, 10000);

	// Set question.id and correct to 0 to ensure that the score is reset
	question.id = 0;
	correct = 0;

	// Pulls the first question to start the game
	pullQuestions();

	// Console information for debugging 
	console.log("startGame() ", "Scoring System Logging: ", question.id, correct);
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
*****************/

// Option 1
function select1() {
	
		// Set op1 to true, set all other option elements to false
		if (op1.className == "selectionFalse") {
		document.getElementById("op1").className = "selectionTrue";
		document.getElementById("op2").className = "selectionFalse";
		document.getElementById("op3").className = "selectionFalse";
		document.getElementById("op4").className = "selectionFalse";
	
		console.log("selected1()", "If Condition", op1.className, correct, incorrect);
		}

		// Resets op1 if any other option is selected
		else {
		document.getElementById("op1").className = "selectionFalse";
		console.log("selected1()", "Else Condition", op1.className, correct, incorrect);
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
	
		console.log("selected2()", "If Condition", op2.className);
		}
	
		// Resets op2 if any other option is selected
		else {
		document.getElementById("op2").className = "selectionFalse";
		console.log("selected1()", "If Condition", op2.className);
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
	
		console.log("selected3()", "If Condition", op3.className);
		}
	
		// Resets op3 if any other option is selected
		else {
		document.getElementById("op3").className = "selectionFalse";
		console.log("selected3()", "If Condition", op3.className);
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
	
		console.log("selected4()", "If Condition", op4.className);
		}
	
		// Resets op4 if any other option is selected	
		else {
		document.getElementById("op4").className = "selectionFalse";
		console.log("selected4()", "If Condition", op4.className);
		}	
	}
	
/****************
Begin Questions
*****************/

// Content for the first Question 
let question = [
	{
		qNum: 0,
		headerQ: "Question 1",
		content: "What is the answer to Question 1?",
		op1: "Correct",
		op2: "Wrong",
		op3: "Wrong",
		op4: "Wrong"

	},
// Content for the second Question 
	{
		qNum: 1,
		headerQ: "Question 2",
		content: "What is the answer to Question 2?",
		op1: "Wrong",
		op2: "Correct",
		op3: "Wrong",
		op4: "Wrong"
	},
// Content for the third Question 
	{
		qNum: 2,
		headerQ: "Question 3",
		content: "What is the answer to Question 3?",
		op1: "Wrong",
		op2: "Wrong",
		op3: "Correct",
		op4: "Wrong"
	}
]

/****************
Pull Questions
*****************/
function pullQuestions() {

// Sets content for the first question based on question.id
if (question.qNum == 0) {

	document.getElementById("headerQ").innerHTML = question[0].headerQ;
	document.getElementById("content").innerHTML = question[0].content;
	document.getElementById("op1").innerHTML = question[0].op1;
	document.getElementById("op2").innerHTML = question[0].op2;
	document.getElementById("op3").innerHTML = question[0].op3;
	document.getElementById("op4").innerHTML = question[0].op4;

	// Code incomplete. Testing to see if I can get a function to fire when the button is clicked
	// before submission
	document.getElementById("op1").addEventListener("click", evaluate());

	console.log("Scoring System Logging: ", question.id, correct);
	}

// Sets content for the second question based on question.id
if (question.qNum == 1) {
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

	console.log("Scoring System Logging: ", question.id, correct);
	}

// Sets content for the third question based on question.id
if (question.qNum == 2) {
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

	console.log("Scoring System Logging: ", question.id, correct);
	}

// Populates the endArea screen which displays stats and an option to replay
if (question.id == 3) {
	document.getElementById("gameArea").style.display = "none";
	document.getElementById("endArea").style.display = "block";

	// Timeout to change class so png shows instead of gif (stopping animation)
	setTimeout(function() {endArea.className = "endscreen"}, 9500);

	document.getElementById("correctNum").innerHTML = ("Correct: " + correct);
	}
}

/****************
Submit Button
*****************/
function submitA() {
	question.id++;
	pullQuestions();

	console.log("submitA()", "Scoring System Logging: ", question.id, correct);
}

/****************
Scoring
*****************/
function evaluate() {

		// This will only add an entry to the debug console if the function fires. WIP
		console.log("EVALUATION FUNCTION SUCCESS: ", correct, incorrect);

} 