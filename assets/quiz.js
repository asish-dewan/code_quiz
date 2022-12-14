//Define variables

const question = document.querySelector('#question');
const choicesEl = document.getElementById('choices');

// Progress bar

const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = '';
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        title: 'The "function" and "var" are known as: ',
        choices: ['Keywords','Data types','Declaration statements','Prototypes'],
        answer: 'Declaration Statements',
    },
    {
        title: 'Which one of the following is the correct way for calling the JavaScript code?',
        choices: ['Preprocessor','Triggering Event','RMI','Function/Method'],
        answer: 'Function/Method',
    },
    {
        title: ' Which of the following type of a variable is volatile? ',
        choices: ['Mutable variable','Dynamic variable','Volatile variable','Immutable variable'],
        answer: 'Mutable variable',
    },
    {
        title: 'Which of the following number object function returns the value of the number?',
        choices: ['toString()','valueOf()','toLocaleString()','toPrecision()'],
        answer: 'valueOf()',
    },
    {
        title: 'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()','console.log()','window.alert()','All of the above'],
        answer: 'All of the above',
    }
];

const score_points = 25;
const max_questions = 5;

function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [questions];
    console.log(availableQuestions);
    getNewQuestion();
};

function getNewQuestion() {

if (availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore',score)

        return window.location.assign("/end.html")
    };

    //Question counter
    questionCounter++
    progressText.innerHTML = `Question ${questionCounter} of ${max_questions}`;
    // Update the progress bar after each question
    progressBarFull.style.width =`${(questionCounter/max_questions) * 100}%`;

     // Get current question from array
     const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = questions [questionsIndex];

     // Update title with current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    // Clear old choices
    choicesEl.innerHTML = '';

    // Loop choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        choiceBtn.setAttribute('value', choice);

        choiceBtn.textContent = i + 1 + '. ' + choice;

        choicesEl.appendChild(choiceBtn);
    }
}

    // Button Click event

function questionClick(event) {
    var buttonEl = event.target;

    // Log button click if selected, if not do nothing
    if (!buttonEl.matches('.choice')) {
        return;
    }
}

startQuiz();

// Create Timer countdown

