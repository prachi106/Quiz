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
	new Question("Question: Which attribute specifies a unique alphanumeric identifier to be associated with an element?", 
	["class", "id", "article", " html"], "id"),
	new Question("Question: The _____________ attribute specifies an inline style associated with an element, which determines the rendering of the affected element.", 
	["dir", "style", "class", "article"], "style"),
	new Question("Question: Typeof null in JavaScript is _______",
	["number", "string", "object", "undefined"], "object"),
	new Question("Question: The __________ attribute sets the text direction as related to the lang attribute.",
	["lang", "sub", "dir", "sup"], "dir"),
	new Question("Question: What is the correct syntax of jQuery?", 
	["action().$(selector)", "$(selector).action()", "(selector)$.action()", "action().(selector)$"], "$(selector).action()"),
];

var quiz = new Quiz(questions);

populate();
