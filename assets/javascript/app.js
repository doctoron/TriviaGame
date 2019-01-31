// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Trivia game JavaScript
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -----------------------------------------------------------------------------------
// Thanks to influences by Stopwatch activity, Michael Pascuczzi &
// Tamekia Schatzmann for helping with the timer logic code
// -----------------------------------------------------------------------------------
// const trivaCard =document.getElementById("trivia-card")
// -----------------------------------------------------------------------------------
// Declaration of variables and assignments:
// $(document).ready(function () {
//     const startButton = document.getElementById("test-timer-button");
//     const timerDisplay = document.getElementById("test-timer-display");
//     let tToken = 37;
//     let time = 0;
//     let intervalID;
//     let countDown = false;
//     let timer;
//     let minutes;
//     let seconds;

//     // Start here once a click has been detected and call the quizInit function: 
//     startButton.onclick = quizInit = () => {
//         startTimer(tToken, timerDisplay);
//         timerDisplay.innerHTML = `
//     Time remaining: ${time} minutes!
//     `
//         console.log(time);
//     }

//     startTimer = (duration, timerDisplay) => {
//         if (!countDown) {
//             countDown = true;
//             stopTimer;
//             timer = duration, minutes, seconds;
//             intervalId = setInterval(() => {
//                 minutes = parseInt(timer / 60, 10)
//                 seconds = parseInt(timer % 60, 10);

//                 minutes = minutes < 10 ? "0" + minutes : minutes;
//                 seconds = seconds < 10 ? "0" + seconds : seconds;

//                 timerDisplay.textContent = minutes + ":" + seconds;
//                 console.log(intervalId);
//                 console.log(timerDisplay);
//                 console.log(minutes);

//                 if (--timer < 0) {
//                     timer = duration;
//                     clearInterval(intervalId);
//                     stopTimer;
//                 }
//             }, 1000);
//         }
//     }
//     let stopTimer = () => {
//         clearInterval(intervalId);
//         countDown = !countDown;
//     };


//     const triviaTest = [
//         {
//             question: "The sternum (breastbone) is composed of three parts:",
//             answers: {
//                 a: "Manubrium, Body, Xiphoid process",
//                 b: "Manure, Bats, Xylophone",
//                 c: "Mandible, Maxilla, Zygomatic bones"
//             },
//             correctAnswer: "a: Manubrium, Body, Xiphoid process",
//             reward: "What is the correct hand placement for CPR?"
//         },
//         {
//             question: "CPR Stands for:",
//             answers: {
//                 a: "Can't Pee Right",
//                 b: "Cardiopulmonary Regeneration",
//                 c: "Cardiopulmonary Resuscitation"
//             },
//             correctAnswer: "c: Cardiopulmonary Resuscitation",
//             reward: "What is the Importance of CPR?"

//         },
//         {
//             question: "What is the recommended rate of CPR compressions for an adult victim?",
//             answers: {
//                 a: "200-300 per minute",
//                 b: "100 to 120 per minute",
//                 c: "500-1000 per minute",
//             },
//             correctAnswer: " b: 100 to 120 per minute",
//             reward: "What are the 7 steps of CPR?"
//         },
//     {
//         question: "What is the first question you must ask before you respond to any first aid situation?"
//             a: "Age of the injured or ill person"
//             b: "Safety of the scene"
//             c: "Nature of the injury"
//             d: "Time of the injury"
//     },
//     correctAnswer: "b: Ensuring the safety of the scene is critical. Avoid making yourself another injured/ill person."
//     reward: "Staying Alive Music"
// }
//     ];
// })


// countdown: function () {
//     this.counter--;
//     $("#counter-number").text(this.counter); //put timer on screen @ id='counter-number'
//     if (this.counter === 0) {
//         console.log("Time's Up!");
//         this.timeUp();
//     }
// },
// loadQuestion: function () {
//     timer = setInterval(this.countdown.bind(this), 1000);

//     CanvasRenderingContext2D.html("<h2>" + questions[this.currentQuestion].question + "</h2>");


//     const quizContainer = document.getElementById('quiz');
//     const resultsContainer = document.getElementById('results');
//     const submitButton = document.getElementById('quiz-submit')

var card = $("#quiz-area");
var countStartNumber = 45;


let questions = [{
    question: 'The sternum (breastbone) is composed of three parts:',
    answers: [
        'Manubrium, Body, Xiphoid process',
        'Manure, Bats, Xylophone',
        'Mandible, Maxilla, Zygomatic bones',
        'Clavical, Manubrium, Thoracic cage'
    ],
    correctAnswer: 'Manubrium, Body, Xiphoid process',
    reward: 'http://gph.is/2gBccpV'
},
{
    question: 'CPR Stands for:',
    answers: [
        'Can\'t Pee Right',
        'Cardiopulmonary Regeneration',
        'Cardiopulmonary Resuscitation',
        'Cardiac Pulse Rhythm'
    ],
    correctAnswer: 'Cardiopulmonary Resuscitation',
    reward: 'http://gph.is/1GFiT0r'
},
{
    question: 'What is the recommended rate of CPR compressions for an adult victim?',
    answers: [
        '200-300 per minute',
        '100 to 120 per minute',
        '500-1000 per minute',
        'As fast as your own heart rate'
    ],
    correctAnswer: '100 to 120 per minute',
    reward: 'http://youtu.be/hnMVus3hrWw'
},
{
    question: 'What is the first question you must ask before you respond to any first aid situation?',
    answers: [
        'Age of the injured or ill person',
        'Safety of the scene',
        'Nature of the injury',
        'Time of the injury'
    ],
    correctAnswer: 'Safety of the scene',
    reward: 'http://www.youtube.com/embed/Ey--wndekTU?start=6'
}
];

// let game = {
//     question: questions,
//     currentQuestion: 0,
//     counter: countStartNumber,
//     correct = 0,
//     wrong = 0,
//     rightAns = 'https://media0.giphy.com/media/4xpB3eE00FfBm/200w.gif?cid=e1bb72ff5c5082806241595a51dd485b',
//     wrongAns = 'https://media.giphy.com/media/26xBCBhu6NiOp2ZjO/giphy.gif',
//     doBetter = 'https://media3.giphy.com/media/9xijGdDIMovchalhxN/200w.gif?cid=e1bb72ff5c5082e835634c5749854049',
//     failTry = 'https://media.giphy.com/media/26xBCBhu6NiOp2ZjO/giphy.gif',

// Variable to hold our setInterval
var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            console.log("TIME'S UP");
            this.timeUp();
        }
    },

    loadQuestion: function () {
// Binding the timer interval countdown function to the current question
        timer = setInterval(this.countdown.bind(this), 1000);

        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

// Dynamically generate question one at a time
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            //
            card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
                + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },
    nextQuestion: function () {
        this.counter = window.countStartNumber;
        $("#counter-number").text(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },

    timeUp: function () {

        clearInterval(window.timer);

        $("#counter-number").text(this.counter);

        card.html("<h2>Out of Time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        card.append("<img src='" + questions[this.currentQuestion].reward + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000);
        }
    },

    results: function () {

        clearInterval(window.timer);

        card.html("<h2>All done, here's how you did!</h2>");

        $("#counter-number").text(this.counter);

        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        card.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function (e) {
        clearInterval(window.timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function () {

        this.incorrect++;

        clearInterval(window.timer);

        card.html("<h2>Nope!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
        card.append("<img src='" + questions[this.currentQuestion].reward + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },

    answeredCorrectly: function () {

        clearInterval(window.timer);

        this.correct++;
        card.html("<h2>Correct!</h2>");
        card.append("<img src='" + questions[this.currentQuestion].reward + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },

    reset: function () {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function (e) {
    game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>45</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});