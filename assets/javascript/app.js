// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Trivia game JavaScript
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById('submit');
let tToken = .5;

$(document).ready(function() {
    $("#timer").click(function() {
        $("#timer").startTimer(duration, display); {
            tToken = .5
            var timer = duration, minutes, seconds;
                setInterval(function () {
                    minutes = parseInt(timer / 60, 10)
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
        }, 1000);
    }   

    window.onload = function () {
        var zeroMinutes = 60 * tToken,
        display = document.querySelector('#time');
        startTimer(zeroMinutes, display);
    };
})
})
