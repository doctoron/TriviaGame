// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Trivia game JavaScript
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -----------------------------------------------------------------------------------
// Thanks to influences by Stopwatch activity, Michael Pascuczzi &
// Tamekia Schatzmann for helping with the timer logic code
// -----------------------------------------------------------------------------------
const trivaCard = document.getElementById("trivia-card")
// -----------------------------------------------------------------------------------
// Declaration of variables and assignments:
$(document).ready(function () {
    const startButton = document.getElementById("test-timer-button");
    const timerDisplay = document.getElementById("test-timer-display");
    let tToken = 37;
    let time = 0;
    let countDown = false;
    let timer;
    let minutes;
    let seconds;

    //     // Start here once a click has been detected and call the quizInit function: 
    startButton.onclick = quizInit = () => {
        startTimer(tToken, timerDisplay);
        timerDisplay.innerHTML = `
    Time remaining: ${time} minutes!
    `
    }

    startTimer = (duration, timerDisplay) => {
        if (!countDown) {
            countDown = true;
            stopTimer;
            timer = duration, minutes, seconds;
            intervalId = setInterval(() => {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                timerDisplay.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    timer = duration;
                    clearInterval(intervalId);
                    stopTimer;
                    console.log('Time is up');
                }
            }, 1000);
        }
    }
    let stopTimer = () => {
        clearInterval(intervalId);
        countDown = !countDown;
    };
})