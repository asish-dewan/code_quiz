//Define variables

const question = document.querySelector('#question');
const choices = Array.from (document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = '';
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'The "function" and "var" are known as: '
        choice1: 'Keywords',
        choice2: 'Data types',
        choice3: 'Declaration statements',
        choice4: 'Prototypes',
        answer: 3
    },
    {
        question: 'Which one of the following is the correct way for calling the JavaScript code?',
        choice1: 'Preprocessor',
        choice2: 'Triggering Event',
        choice3: 'RMI',
        choice4: 'Function/Method',
        answer: 4
    },
    {
        question: ' Which of the following type of a variable is volatile? '
        choice1: 'Mutable variable',
        choice2: 'Dynamic variable',
        choice3: 'Volatile variable',
        choice4: 'Immutable variable',
        answer: 1
    },
    {
        question: 'Which of the following number object function returns the value of the number?'
        choice1: 'toString()',
        choice2: 'valueOf()',
        choice3: 'toLocaleString()',
        choice4: 'toPrecision()',
        answer: 2
    }
    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?'
        choice1: 'document.write()',
        choice2: 'console.log()',
        choice3: 'window.alert()',
        choice4: 'All of the above',
        answer: 4
    }
]

const score_points = 25;
const max_questions = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion ()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore',score)

        return window.location.assign("/end.html")
    }

}


// Create Timer countdown

