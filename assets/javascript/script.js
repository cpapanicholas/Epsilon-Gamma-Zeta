const quizData = [
    {
        question: "What element in html is for paragraphs?",
        choices: ["Choice A", "Choice B", "Choice C", "Choice E"],
        correctAnswer: 0,
    },
    {
        question: "",
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

let timeRemaining = 120;
let timerId;
let questionIndex=0;

let timerEl= document.getElementById("ctDwn");
let choicesEl= document.getElementById("choices");
let questionsEl= document.getElementById("questions");
let startButtonEl= document.getElementById("startButton");
let startDivEl= document.getElementById("start-div");
startButtonEl.onclick= startQuiz;

function displayInquiry() {





}

function checkResponse() {



}

function startQuiz() {
    console.log("startButton click, start quiz function called");
    startDivEl.setAttribute("class", "hide");



}

function decreaseTime() {






}

function calcScore() {




}

function hi_score() {



}


