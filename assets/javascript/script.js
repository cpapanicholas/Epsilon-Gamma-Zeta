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
startButtonEl.onclick= startQuiz;

let quizStartPrompt = "Hi welcome to my coding quiz, you have 50 seconds to complete it.  For every question you get wrong you lose 10 seconds, if there isn't any time left you lose!  Are you ready?";
const firstMessage = alert(quizStartPrompt);

function startQuiz() {
    console.log("startButton click, start quiz function called");
    startDivEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    timerId=setInterval(oneSecHandler, 1000);

    timerEl.textContent=timeRemaining;

    getNextQuestion();
}

function checkResponse(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswerIndex = quizData[currentQuestion].correctAnswer;

    if (selectedChoice === quizData[currentQuestion].choices[correctAnswerIndex]) {
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
        btn.textContent = i + 1 + ". " + choice;
        btn.addEventListener("click", checkResponse);
        choicesEl.appendChild(btn);
    }
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



