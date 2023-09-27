const quizData = [
    {
        question: "What element in html is for paragraphs?",
        choices: ["Choice A", "Choice B", "Choice C", "Choice E"],
        correctAnswer: 0,
    },
    {
        question: "What",
        choices: ["Choice X", "Choice Y", "Choice Z", "Choice"],
        correctAnswer: 1,
    },
    {
        question: "Question 3?",
        choices: ["Choice T", "Choice W", "Choice V"],
        correctAnswer: 1,
    },
    {
        question: "Question 4?",
        choices: ["Choice R", "Choice S", "Choice D"],
        correctAnswer: 1,
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;


let timeRemaining = 35;
let timerId;
let questionIndex=0;

let timerEl= document.getElementById("ctDwn");
let choicesEl= document.getElementById("choices");
let questionsEl= document.getElementById("questions");
let questionEl= document.getElementById("question");
let startButtonEl= document.getElementById("startButton");
let startDivEl= document.getElementById("start-div");
let scoreEl = document.getElementById("score")
startButtonEl.onclick= startQuiz;

function displayInquiry() {
    prompt("You have 35 seconds to complete this quiz.  If you get a question wrong you lose 10 seconds to complete the quiz.  Are you ready to play?")





}

function checkResponse(event) {
    const userResponse = event.target.textContent;
    const correctAnswer = question[currentQuestion].answer;

    if (selectedChoices === correctAnswer) {
        score++;
        .textContent = score;   






    }



}

function startQuiz() {
    console.log("startButton click, start quiz function called");
    startDivEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    timerId=setInterval(oneSecHandler, 1000);

    timerEl.textContent=timeRemaining;

    getNextQuestion();
}

function oneSecHandler() {
    timeRemaining--;
    timerEl.textContent=timeRemaining;

    if(timeRemaining <=0) {
        endQuiz();
    }
}

function endQuiz() {
    //tbd
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

function decreaseTime() {






}

function calcScore() {




}

function hi_score() {



}


