var startBtn = document.querySelector("#start");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");
var timerNav = document.querySelector("#timer");
var timerSec = 5
var option5 = document.querySelector("#option5");
var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper text markup language", "Hyper text martian language", "answer 3", "Answer 4"],
        answer: "Hyper text markup language",
    },
    {
        question: "Commonly used data types DO NOT include",
        choices: ["Strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    }
]


startBtn.addEventListener("click", function () {
    
    option5.textContent = questions[1].question
    var timer = setInterval(function () {
        if (timerSec > 0) {
            timerSec--;
            timerNav.textContent = "Time: " + timerSec;
        } else {
            clearInterval(timer)
            //alert("Game Over")
            
        }

    }, 1000)
});

