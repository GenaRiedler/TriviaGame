//--------These are the questions, choices and answers--------

var question1 = {
	question: "What is printed on the license plate of the time-traveling DeLorean?",
	choice1: "SCIENCE",
	choice2: "OUTATIME",
	choice3: "TIMETVL",
	choice4: "TIME4U",
	answer: "OUTATIME",
	image: "",
};

var question2 = {
	question: "Marty meets Doc at which shopping mall in the first Back to the Future film?",
	choice1: "Lone Pine",
	choice2: "Wild Oak",
	choice3: "Big Fir",
	choice4: "Twin Pines",
	answer: "Twin Pines",
	image: "",
};

var question3 = {
	question: "Who is playing in the World Series in 2015?",
	choice1: "Chicago vs Miami",
	choice2: "New York vs Los Angeles",
	choice3: "San Francisco vs Texas",
	choice4: "Seattle vs Atlanta",
	answer: "Chicago vs Miami",
	image: "",
};

 var question4 = {
	question: "What date do Marty, Doc, and Jennifer travel to in Back to the Future II?",
	choice1: "Sept 22nd 2015",
	choice2: "Nov 8th 2015",
	choice3: "Oct 21st 2015",
	choice4: "Dec 1st 2015",
	answer: "Oct 21st 2015",
	image: "",
};

var question5 = {
	question: "What kind of drink does Marty ask for when he arrives in the old West?",
	choice1: "Pepsi",
	choice2: "Ice Water",
	choice3: "Milk",
	choice4: "Root Beer",
	answer: "Ice Water",
	image: "",
};

var question6 = {
	question: "After Marty arrives in 1855, the next train will be leaving town on Monday at what time?",
	choice1: "7:00 am",
	choice2: "8:00 am",
	choice3: "9:00 am",
	choice4: "10:00 am",
	answer: "8:00 am",
	image: "",
};

var question7 = {
	question: "What is Buford Tannen's nickname?",
	choice1: "Lone Wolf",
	choice2: "Crazy Snake",
	choice3: "Mad Dog",
	choice4: "Wild Bill",
	answer: "Mad Dog",
	image: "",
};

var question8 = {
	question: "Marty is to meet up with Griff Tannen in which cafe in 2015?",
	choice1: "Cafe Future",
	choice2: "Cafe 80s",
	choice3: "Giggawatts",
	choice4: "Space Cafe",
	answer: "Cafe 80s",
	image: "",
};

var question9 = {
	question: "What does Biff run into after he chases Marty around the Hill Valley square?",
	choice1: "Garbage",
	choice2: "Dirt",
	choice3: "Manure",
	choice4: "Tar",
	answer: "Manure",
	image: "",
};

var question10 = {
	question: "What does Doc Brown call his dog in 1955?",
	choice1: "Copernicus",
	choice2: "Einstein",
	choice3: "Edison",
	choice4: "Tesla",
	answer: "Copernicus",
	image: "",
};

//--------This is the array that holds the questions-----------

var triviaQuestion = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];	

//--------These are the other variables in the game------------

var x = 0;
var time = 30;
var counter = 0;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;

//---------FUNCTIONS of game------------------------------------

//---------Sets the questions up---------------------------------
function nextQuestion(){
	time = 10;
	counter = setInterval(startTime, 1000);
	$(".choice").show();
	$("#timer").html("<h4>Time Remaining:</br><h2>" + time + "</h2></h4>");
	$("#question").html("<h2>" + triviaQuestion[x].question + "</h2>");
	$("#choice-1").html(triviaQuestion[x].choice1);
	$("#choice-2").html(triviaQuestion[x].choice2);
	$("#choice-3").html(triviaQuestion[x].choice3);
	$("#choice-4").html(triviaQuestion[x].choice4);
	$("#graphic").attr("src", "./assets/images/image1.jpg");

};

function startTime() {
	time--
	$("#timer").html("<h4>Time Remaining:</br><h2>" + time + "</h2></h4>");
	if (time == 0) {
		timeOut();
		stopTime();
		$(".choice").hide();
	} else if (time < 10) {
		$("#timer").addClass("flash");
		setTimeout(function(){$("#timer").removeClass("flash")}, 500)
	};
};

function stopTime() {
	clearInterval(counter);
	x++;
	if (x == triviaQuestion.length) {
		setTimeout(endGame, 3000);
	} else {
		setTimeout(nextQuestion, 3000);
	};
};

function correctAnswer() {
	numberCorrect++;
	$("#question").html("<h2>Correct!</h2>");
	$("#graphic").attr("src", triviaQuestion[x].image);
};

function wrongAnswer() {
	numberIncorrect++;
	$("#question").html("<h2>Wrong! <br> The correct answer was: " + triviaQuestion[x].answer + "</h2p>");
	$("#graphic").attr("src", triviaQuestion[x].image);
};

function timeOut() {
	numberUnanswered++;
	$("#question").html("<h2>Time's up! <br> The correct answer was: " + triviaQuestion[x].answer +"</h2p>");
	$("#graphic").attr("src", triviaQuestion[x].image);
};

function endGame() {
	$("#question").html("<h2>You got " + numberCorrect + " answers correct!</h2>"
		+ "<h2>You got " + numberIncorrect + " wrong!</h2>" + "<h2>You didn't answer " + numberUnanswered + " questions!</h2>");
	$(".choice").hide();
	$("#timer").empty();
	$("#graphic").empty();
	x = 0;
	numberCorrect = 0;
	numberIncorrect = 0;
	numberUnanswered=0;
	$("#start-btn").show();
};

$("#start-btn").click(function() {
	triviaQuestion = triviaQuestion;
	nextQuestion();
	$("#start-btn").hide();
});

$(".choice").click(function() {

	if ($(this).text() == triviaQuestion[x].answer) {
		numberCorrect++;
		correctAnswer();
		stopTime();
	} else {
		wrongAnswer();
		stopTime();
	};

	$(".choice").hide();
});


nextQuestion()
console.log(triviaQuestion[x])
console.log(x)
