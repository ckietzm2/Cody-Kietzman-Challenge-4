var startBtn = document.querySelector("#start");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");
var timerNav = document.querySelector("#timer");
var questionArea = document.querySelector("#question_area")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#finalScore")
var timerSec = 60
var option5 = document.querySelector("#option5");
var userChoice = ""
var questionNumber = 0
var score = 0
var initialsInput = document.querySelector("#initials")
var submit = document.querySelector("#submit")
var initials = ""
var finalArray = []


// Created an object of an array of questions, choices and the correct answer


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


// Starts an event listener when start quiz is clicked 
// Shows first question with answers and timer
startBtn.addEventListener("click", function () {
    timerNav.removeAttribute('class')
    questionArea.removeAttribute('class')
    var timer = setInterval(function () {
        if (timerSec > 0 && questionNumber <= questions.length - 1) {
            timerSec--;
            timerNav.textContent = "Time: " + timerSec;
            startQuiz()
        }

        if (timerSec > 0 && questionNumber > questions.length - 1) {
            timerSec = timerSec + 0
            clearInterval(timer)
            endGame()

        }

    }, 1000)

});

// if there are no more questions go to end game, otherwise show next question
function startQuiz() {

    if (questionNumber > questions.length - 1 || timerSec <= 0) {
        endGame()
    }

    else {

        option5.textContent = questions[questionNumber].question

        answerBtn1.textContent = questions[questionNumber].choices[0]
        answerBtn2.textContent = questions[questionNumber].choices[1]
        answerBtn3.textContent = questions[questionNumber].choices[2]
        answerBtn4.textContent = questions[questionNumber].choices[3]

    }
}

// adds event listeners for all choice buttons and checks if they match with correct answer
function buttonChoice() {

    answerBtn1.addEventListener("click", function () {

        userChoice = answerBtn1.textContent
        if (userChoice === questions[questionNumber].answer) {
            alert("Correct!")

        }
        else {
            alert("Incorrect")
            timerSec = timerSec - 10

        }
        userChoice = ""
        endGame()

    })

    answerBtn2.addEventListener("click", function () {

        userChoice = answerBtn2.textContent
        if (userChoice === questions[questionNumber].answer) {
            alert("Correct!")

        }
        else {
            alert("Incorrect")
            timerSec = timerSec - 10
        }
        userChoice = ""
        endGame()


    })

    answerBtn3.addEventListener("click", function () {

        userChoice = answerBtn3.textContent
        if (userChoice === questions[questionNumber].answer) {
            alert("Correct!")

        }
        else {
            alert("Incorrect")
            timerSec = timerSec - 10
        }
        userChoice = ""
        endGame()


    })

    answerBtn4.addEventListener("click", function () {

        userChoice = answerBtn4.textContent
        if (userChoice === questions[questionNumber].answer) {
            alert("Correct!")

        }
        else {
            alert("Incorrect")
            timerSec = timerSec - 10
        }
        userChoice = ""
        endGame()


    })


}
// IF the timer is done or if there are no more questions go to final end game
function endGame() {

    if (questionNumber <= questions.length - 1 && timerSec > 0) {
        questionNumber = questionNumber + 1
        startQuiz()

    }
    else if (questionNumber > questions.length - 1 || timerSec <= 0) {




        questionArea.setAttribute('class', 'hide')
        clearInterval(timer)
        
        finalEndGame()
    }
}


// Hides question area and shows end screen where initials are inputted
function finalEndGame() {
    endScreen.removeAttribute('class')

    timerNav.setAttribute('class', 'hide')
    submit.addEventListener("click", function () {
        initials = initialsInput.value
        
        
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("timerSec", JSON.stringify(timerSec));
       
        var hiScores = {
            
            initials: JSON.parse(localStorage.getItem("initials")) || [],
            score:  JSON.parse(localStorage.getItem("timerSec")) || []

       
        };


        
        finalArray.push(hiScores)
        console.log(finalArray)
     
    })
}
function highScores() {




    window.location.href = "file:///C:/Users/ckiet/OneDrive/desktop/Challenges/Cody-Kietzman-Challenge-4/highscores.html"
}



startQuiz()
buttonChoice()


