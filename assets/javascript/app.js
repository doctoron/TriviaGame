// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// 
// ------------------------------------------------------------------------------------
// Trivia game JavaScript
// ------------------------------------------------------------------------------------
// Thanks to influences by Stopwatch activity, Michael Pascuczzi &
// Tamekia Schatzmann for helping with the timer logic code
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$(document).ready(function(){
// Initialize variables:
let timerDisplay = document.getElementById('timer-display')
let tRemaining = document.getElementById('time-remaining');
isCounting = "false";
tToken = 30;
// 
// ------------------------------------------------------------------------------------
// Start the clock and display question
// ------------------------------------------------------------------------------------
    $("#start-button").click(function() {
        console.log("The button was clicked")
        initFunction = () => {
            tRemaining.innerHTML;
            tDisplay.innerHTML;
            stopTimer();
            startTimer(tToken,timerDisplay);
            console.log(tToken);
    };
    
let startTimer = (tToken, display) => {
    if (!isCounting) {
        isCounting = true;
        var timer = tToken, minutes, seconds;
        intervalId =  setInterval(function () {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = tToken;
        }
    }, 1000);
}};

// ClearInterval stops the count  and set the clock to not be counting.
let stopTimer = () => {
    clearInterval(intervalId);
    isCounting = false;
};
 
})
})

function timeConverter(t) {
  
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }