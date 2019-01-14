// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Trivia game JavaScript
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ------------------------------------------------------------------------------------
// Thanks to influences by Stopwatch activity, Michael Pascuczzi &
// Tamekia Schatzmann for helping with the timer logic code
// ------------------------------------------------------------------------------------
/*
Here’s a good description of modulo/modulus which 
is the “%” symbol: 
https://en.m.wikipedia.org/wiki/Modulo_operation   
What is happening is the timer takes the total time 
(let’s say 100 seconds) and it assigns minutes by 
dividing 100 by 60. It finds seconds similarly using 
the modulus. 60 goes into 100 exactly 1 time and leaves 
a remainder of 40. 40 would be the seconds. 
Something along those lines. (edited)
  
Plan: 
1) Switch() Case: Default: logic 
2) My Date translation 
3) Construct Ajax calls to either YouTube, using jQuery  
*/    

$(document).ready(function(){
// Initialize variables:
let tDisplay = document.getElementById("timer-display");
let tRemaining = document.getElementById("time-remaining");
isCounting = "false";
tToken = 6;
// Start the clock and display question
// ------------------------------------------------------------------------------------
    $("#start-button").click(function() {
        console.log("The button was clicked")
        initFunction = () => {
            tRemaining.innerHTML =`Time remaining: ${display} minutes!`;
            stopTimer();
            startTimer(tToken,tDisplay);
            console.log(tToken);
    };
    
let startTimer = (duration, display) => {
    if (!isCounting) {
        isCounting = true;
        var timer = duration, minutes, seconds;
        intervalId =  setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
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