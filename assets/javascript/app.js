// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Trivia game JavaScript
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -----------------------------------------------------------------------------------
// Thanks to influences by Stopwatch activity, Michael Pascuczzi &
// Tamekia Schatzmann for helping with the timer logic code
// -----------------------------------------------------------------------------------
const timerButton = document.getElementById("timer-button");
const timerDisplay = document.getElementById("timer-display");
const tToken = .2;
let zeroMinutes;
let time = "00:00";
let intervalID;
/* 
Thanks to Karina I found a good description of modulo/modulus, which is the “%” symbol here 
@ https://en.m.wikipedia.org/wiki/Modulo_operation  What is happening is the timer takes the 
total time (let’s say 100 seconds) and it assigns minutes by dividing 100 by 60.  It finds 
seconds similarly using the modulus. 60 goes into 100 exactly 1 time and leaves a remainder 
of 40 and this would used to calculate the seconds. (edited)
Plan:
Code the triva test: 
1) Switch() Case: Default: logic 
3) Locate anatomy images API 
2) Construct Ajax calls using jQuery  
*/
// Start here once a click has been detected and call the goInit function: 
startTimer.addEventListener("click", goInit);
            goInit = () => {
                timerDisplay.innerHTML = `Time remaining: ${time} minutes!`;
                startTimer(tToken, timerDisplay);
            }
                // zeroMinutes =(minute,b) => {
                // 60 * tToken,
                // timerDisplay = document.querySelector('#time');


            startTimer =(duration, timerDisplay) => {
                    let timer = duration, minutes, seconds;
                    intervalID = setInterval( () => {
                    minutes = parseInt(timer / 60, 10)
                    seconds = parseInt(timer % 60, 10);
                    
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    
                    // timerDisplay.textContent = minutes + ":" + seconds;
                    `
                    timerDisplay.textContent = Time remaining: ${minutes}:${seconds};
                    `
                    console.log(intervalId);
                    console.log(timerDisplay);

                    if (--timer < 0) {
                        timer = duration;
                    }
                }, 1000);   
            }

