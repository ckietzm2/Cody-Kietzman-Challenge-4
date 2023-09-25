var startBtn = document.querySelector("#start");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");
var timerNav = document.querySelector("#timer");
var questionArea = document.querySelector("#question_area")
var timerSec = 60
var option5 = document.querySelector("#option5");
var userChoice = ""
var questionNumber = 0
var score = 0
var checkBtn = false




var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyper Text Martian Language", "Hippo Tries Martial Arts", "Hyper Text Make Up Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Commonly used data types DO NOT include",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses",
    },
    {
        question: "How many items can an array hold?",
        choices: ["5 or less", "Up to 10", "Up to 15", "Infinite"],
        answer: "Infinite",
    },
    {
        question: "What function do you use to create a timer?",
        choices: ["Set Timer", "Set Interval", "Go Time Go", "Set Time"],
        answer: "Set Interval",
    }
]



startBtn.addEventListener("click", function () {
    
    checkBtn = true
    var timer = setInterval(function () {
        if (timerSec > 0) {
            timerSec--;
            timerNav.textContent = "Time: " + timerSec;
            startQuiz()
        } else {
            clearInterval(timer)
            endGame()
            
        }

    }, 1000)

});

function startQuiz() {
  
   if (checkBtn===false) {

    option5.textContent = ""
  
    
   }
   else if (checkBtn===true) {
    
    questionArea.removeAttribute('class')
    option5.textContent = questions[questionNumber].question

    answerBtn1.textContent = questions[questionNumber].choices[0]
    answerBtn2.textContent = questions[questionNumber].choices[1]
    answerBtn3.textContent = questions[questionNumber].choices[2]
    answerBtn4.textContent = questions[questionNumber].choices[3] 

   }
    }

    

function buttonChoice() {

answerBtn1.addEventListener("click", function() {

userChoice = answerBtn1.textContent
if (userChoice===questions[questionNumber].answer) {
    alert("Correct!")
    
}
else {
    alert("Incorrect")
    timerSec = timerSec - 10
    
}
userChoice = ""
questionNumber=questionNumber+1
endGame()
})

answerBtn2.addEventListener("click", function() {
    
    userChoice = answerBtn2.textContent
    if (userChoice===questions[questionNumber].answer) {
        alert("Correct!")
        
    }
    else {
        alert("Incorrect")
        timerSec = timerSec - 10
    }
    userChoice = ""
    questionNumber=questionNumber+1
    endGame()
    
    })

answerBtn3.addEventListener("click", function() {
        
        userChoice = answerBtn3.textContent
        if (userChoice===questions[questionNumber].answer) {
            alert("Correct!")
            
        }
        else {
            alert("Incorrect")
            timerSec = timerSec - 10
        }
        userChoice = ""
        questionNumber=questionNumber+1
        endGame()
        
        })

answerBtn4.addEventListener("click", function() {
            
            userChoice = answerBtn4.textContent
            if (userChoice===questions[questionNumber].answer) {
                alert("Correct!")
                
            }
            else {
                alert("Incorrect")
                timerSec = timerSec - 10
            }
            userChoice = ""
            questionNumber=questionNumber+1
            endGame()
            
            })
        
   
}

function endGame() {

    if  (questionNumber<=questions.length-1){
        startQuiz()
                         
    }
        else if (questionNumber>questions.length-1){
        alert("Game Over")
        score = score + timerSec
        
        window.location.href = "highscores.html"
        }
    }
    startQuiz()
    buttonChoice()
