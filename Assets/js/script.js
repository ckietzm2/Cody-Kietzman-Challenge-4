var startBtn = document.querySelector("#start");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");
var timerNav = document.querySelector("#timer");
var timerSec = 5
var option5 = document.querySelector("#option5");
var userChoice = ""
var questionNumber = 0
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
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    }
]



startBtn.addEventListener("click", function () {
    

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

function startQuiz() {

    console.log(questions.length);
    console.log(questionNumber)
    console.log(userChoice)
    option5.textContent = questions[questionNumber].question
    answerBtn1.textContent = questions[questionNumber].choices[0]
    answerBtn2.textContent = questions[questionNumber].choices[1]
    answerBtn3.textContent = questions[questionNumber].choices[2]
    answerBtn4.textContent = questions[questionNumber].choices[3]  

    
}
    

function buttonChoice() {

answerBtn1.addEventListener("click", function() {

userChoice = answerBtn1.textContent
if (userChoice===questions[questionNumber].answer) {
    alert("Correct!")
    
}
else {
    alert("Incorrect")
    
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
        
        }

    }

    startQuiz()
    buttonChoice()