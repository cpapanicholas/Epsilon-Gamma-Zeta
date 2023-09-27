const quizData = [
    {
        question: "What element in html is for paragraphs?",
        choices: ["<p>", "<a>", "<article>", "<h1>"],
        correctAnswer: 0,
    },
    {
        question: "What element in css is used to change the background color?",
        choices: ["color", "backgroundcolor", "colorbackground", "ocapcity"],
        correctAnswer: 1,
    },
    {
        question: "What element in html can be used to seperate parts of the body?",
        choices: ["<span>", "<section>", "<header>", "<footer>"],
        correctAnswer: 1,
    },
    {
        question: "What element in html is used to link a css document?",
        choices: ["<a>", "<p>", "<link>", "<href>"],
        correctAnswer: 2,
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
    const selectedChoices = event.target.textContent;
    const correctAnswer = question[currentQuestion].answer;

    if (selectedChoices === correctAnswer) {
        score++;
        scoreEl.textContent = score;  
        currentQuestion++;  
        if (currentQuestion < question.length){
            showQuestion()
        } else (selectedChoices !== correctAnswer); {
                timeLeft = -10
        
            }
        

    


    currentQuestion++;

    if (currentQuestion < question.length);
    
}
}
function getNextQuestion() {
    let question= quizData [questionIndex];
    questionEl.textContent= question.question;
    choicesEl.innerHTML= "";

    for(let i=0; i<question.choices.length; i++){
        let choice= question.choices[i];
        let btn = document.createElement("button");
        btn.setAttribute("class", "choice");
        btn.setAttribute("value", choice);

        btn.textContent= i+1+". "+choice;
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
    if(timeRemaining === 0) {
    const retry = confirm("You ran out of time!  Would you like to try again?");
    if (retry) {
        restartQuiz();
    } else {
        alert("Quiz Over! Your score: ${score}")
    } else {
        alert("Quiz Completed! Your score: ${score}")
    }

    
    



    }
}



function decreaseTime() {







}

function calcScore() {




}

function hi_score() {



}


