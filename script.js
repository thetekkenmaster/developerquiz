var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
	["What does HTML stand for?", "High Tech Markup Language", "Hyper Text Multiple Listing", "Hyper Text Markup Language", "C"],
	["What does CSS stand for?", "Computer Software Supervisor", "Cascading Stylesheets", "Computer Software Systems", "B"],
	["What aspect of a website does JavaScript control?", "the behavior", "the structure", "the design & layout", "A"],
	["What are media queries for?","They give the programmer access to covert media files.", "They make websites function well and look great on multiple devices like tablets and smartphones.", "They're a set of javascript libraries...like jquery.", "B"],
	["The two categories of elements in html are block and...", "outline", "flatline", "inline", "C"],
	["Which data type gives a value of true or false?", "character", "boolean", "integer", "B"],
	["How do you write a comment in CSS?", "/* */", "//", "just write it out..", "A"],
	["Java was developed by which company?", "Netscape", "Sun Microsystems", "Enron", "B"],
	["Which gets more priority in CSS?", "class attribute", "element", "id attribute" ,"C"],
	["PHP is a _________ language.", "server-side", "client-side", "westside", "A"],
	["What does API stand for?", "Application Program Interface", "Apple Programs Iphones", "Advanced Programming Institute", "A"],
	["Wordpress is a ...", "Content Management Device", "Content Manipulating Stylesheet", "Content Management System", "C"],
	["Which of these is NOT a real programming language?", "C", "CSS", "JavaScript", "B"],
	["In an HTML document it's best to store javascript in the ____ of the page.", "head", "bottom of the body", "top of the body", "B"],
	["Bootstrap was built at which popular social media site?", "Twitter", "Facebook", "Instagram", "A"]
];
function _(x) {
	return document.getElementById(x);
}
function renderQuestion() {
	choice = undefined;
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);