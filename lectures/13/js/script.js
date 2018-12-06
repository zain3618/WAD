var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */

    var Answer = document.querySelector("input[type = radio]:checked");

    if(Answer == null)
    {
        var msg_relay = document.getElementById("quiz-message");
        msg_relay.style.color = 'red';
        msg_relay.style.display = "block";
        msg_relay.innerText = "No option was Selected";
    }
/*    else if(Answer.question[currentQuestion].correctAnswer )
    {*/
        /*correctAnswers++;*/
        currentQuestion++;
/*
        var cid = document.getElementById("choice-list");
        cid.innerHTML = '';*/
        displayCurrentQuestion();
  /*  }
    else
    {
        currentQuestion++;
        displayCurrentQuestion();
    }

*/
}

function displayCurrentQuestion() {
    /*Write your code here */

    var qid = document.getElementById("question");

    qid.innerHTML = '<p>' + questions[currentQuestion].question +  '</p>';

    var cid = document.getElementById("choice-list");

    for(var i = 0 ; i < questions[currentQuestion].choices.length ; i++)
    {
        cid.innerHTML += '<li>'+ '<input type="radio" name="checked">' + questions[currentQuestion].choices[i] +'</li>'
    }

}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}