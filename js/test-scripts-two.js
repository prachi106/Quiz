/*one*/
function Question(text, choices, answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice){
	return choice === this.answer;
}

/*two*/

function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function(){
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
	
	
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}
	this.questionIndex++;
}

/*three*/

function populate(){
	if(quiz.isEnded()){
		//showscores
		showScores();
	}
	else{
		//showquestion
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i<choices.length; i++){
		var element = document.getElementById("choice" + i);
		element.innerHTML = choices[i];
		guess("btn" + i, choices[i]);
		}
		
		showProgress();
	}
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element  = document.getElementById('progress');
	element.innerHTML = "Q " +  currentQuestionNumber  + " / " + quiz.questions.length + " : ";
}

function showScores(){
	var gameOverHtml = "<img class='result-img' src='images/brain_result.png'>" +  "<h1 class='scores'>Best Score</h1>";
	gameOverHtml += "<h2 id ='score' class='score-num'>" + quiz.score + "</h2>" +  "<a class='blink' href='test-two.html'>Try Again</a>";
	var element = document.getElementById("quiz")
		element.innerHTML = gameOverHtml;
}
var questions = [
	new Question("Question: How can you created rounded corners using CSS3?", 
	["border[round]: 30px;", "corner-effect: round;", "border-radius: 30px;", "alpha-effect: round-corner;"], "border-radius: 30px;"),
	new Question("Question: How to force a word wrap using CSS3?", 
	["word-wrap: break-word;", "text-wrap: break-word;", "text-width: set;", "text-wrap: force;"], "word-wrap: break-word;"),
	new Question("Question: How to rotate objects using CSS3?",
	["number", "string", "object", "undefined"], "object"),
	new Question("Question: The __________ attribute sets the text direction as related to the lang attribute.",
	[" object-rotation: 30deg;", " transform: rotate(30deg);", "rotate-object: 30deg;", "transform: rotate-30deg-clockwise;"], " transform: rotate(30deg);"),
	new Question("Question:  __________ is a property that allows developers to add rounded corners on the design elements.", 
	[" Corner", "Box Shadow", "Round Corner", "Border-Radius"], "Border-Radius"),
];

var quiz = new Quiz(questions);

populate();
