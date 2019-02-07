// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Trivia game JavaScript
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let card = $("#quiz-area");
let countStartNumber = 20;

let rightAns = 'https://media.giphy.com/media/13aaIESJDm56q4/giphy.gif?cid=e1bb72ff5c55021a3233704b490642df'
let wrongAns = 'https://media3.giphy.com/media/P8JICFoNrKDrW/giphy.gif?cid=e1bb72ff5c55021a3233704b490642df'


let questions = [{
    question: 'The sternum (breastbone) is composed of three parts:',
    answers: [
        'Manubrium, Body, Xiphoid process',
        'Manure, Bats, Xylophone',
        'Mandible, Maxilla, Zygomatic bones',
        'Clavical, Manubrium, Thoracic cage'
    ],
    correctAnswer: 'Manubrium, Body, Xiphoid process',
    reward: rightAns,
    wrong: wrongAns

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
    reward: rightAns,
    wrong: wrongAns

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
    reward: rightAns,
    wrong: wrongAns

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
    reward: rightAns,
    wrong: wrongAns
}
];


// variable to hold our setInterval
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
            // Cursor position becomes clickable event
            card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
                + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function () {
        this.counter = window.parseInt(countStartNumber);
        $("#counter-number").text(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },

    timeUp: function () {
        console.log(window.timer);
        clearInterval(window.timer);

        $("#counter-number").text(this.counter);


        card.html("<h2>Time's Up!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        card.append("<img src='" + questions[this.currentQuestion].wrong + "' />");

        if (this.currentQuestion === questions.length) {
            setTimeout(this.results, 3 * 1000);

        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000);
            card.append("<br><button id='start-over'>Start Over?</button>");

        }
    },

    results: function () {

        clearInterval(window.timer);

        card.html("<h2>All done! Here's how you did:</h2>");

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
        // add to wrong answer counter
        this.incorrect++;

        clearInterval(window.timer);

        card.html("<h2>Sorry, That's Incorrect!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
        card.append("<img src='" + questions[this.currentQuestion].wrong + "' />");

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
    $(".timer-container").prepend("<h2>Time Remaining: <span id='counter-number'></span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});