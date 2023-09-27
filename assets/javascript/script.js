document.addEventListener("DOMContentLoaded", function () {
const quizData = [
    {
        question: "What element in html is for paragraphs?",
        choices: ["<p>", "<a>", "<article>", "<h1>"],
        correctAnswer: "<p>",
    },
    {
        question: "What element in css is used to change the background color?",
        choices: ["color", "backgroundcolor", "colorbackground", "ocapcity"],
        correctAnswer: "backgroundcolor",
    },
    {
        question: "What element in html can be used to seperate parts of the body?",
        choices: ["<span>", "<section>", "<header>", "<footer>"],
        correctAnswer: "<section>",
    },
    {
        question: "What element in html is used to link a css document?",
        choices: ["<a>", "<p>", "<link>", "<href>"],
        correctAnswer: "<link>",
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timeRemaining = 50;
let timerId;
let questionIndex=0;

let timerEl= document.getElementById("ctDwn");
let choicesEl= document.getElementById("choices");
let questionsEl= document.getElementById("questions");
let questionEl= document.getElementById("question");
let startButtonEl= document.getElementById("startButton");
let startDivEl= document.getElementById("start-div");
let scoreEl = document.getElementById("score");

startButtonEl.addEventListener("click", startQuiz);

let quizStartPrompt = "Hi welcome to my coding quiz, you have 50 seconds to complete it.  For every question you get wrong you lose 10 seconds, if there isn't any time left you lose!  Are you ready?";
const firstMessage = alert(quizStartPrompt);

function startQuiz() {
    const userInitials = prompt("Enter your initials:");
    if (!userInitials) {
        alert("You must enter your initials to start the quiz.");
        return;
    }
    console.log("startButton click, start quiz function called");
    startDivEl.style.display = "none";
    questionsEl.style.display = "block";

    timerId=setInterval(oneSecHandler, 1000);

    timerEl.textContent=timeRemaining;

    getNextQuestion();
}

function checkResponse(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    console.log("Selected Choice:", selectedChoice);
    console.log("Correct Answer:", correctAnswer);


    if (selectedChoice.trim() === correctAnswer) {
        score++;
        scoreEl.textContent = score;
    } else {
        timeRemaining -= 10;
        if (timeRemaining <= 0) {
            endQuiz();
        } else {
            alert("Incorrect! Try again.");
        }
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        getNextQuestion();
    } else {
        endQuiz();
    }
}

function getNextQuestion() {
    const question = quizData[questionIndex];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";

    for (let i = 0; i < question.choices.length; i++) {
        let choice = question.choices[i];
        let btn = document.createElement("button");
        btn.classList.add("choice");
        btn.textContent = choice; 
        btn.addEventListener("click", checkResponse);
        choicesEl.appendChild(btn);
    }
    questionIndex++;
}

function oneSecHandler() {
    timeRemaining--;
    timerEl.textContent=timeRemaining;

    if(timeRemaining <=0) {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerId);
    
    alert(`Quiz Over! Your score: ${score}`);
}

const userInitials = prompt("Enter your initials:");
const userScore = score; // Assuming 'score' contains the user's score


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


highScores.push({ initials: userInitials, score: userScore });


localStorage.setItem("highScores", JSON.stringify(highScores));


})
