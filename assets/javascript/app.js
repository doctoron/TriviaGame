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
const testCard =document.getElementById('testObjectArray')
let time = "00:00";
let intervalID;

testObjectArray =[
    {
    question: "The sternum (breastbone) is composed of three parts:",
    answers: {
        a: "Manubrium, Body, Xiphoid process",
        b: "Manure, Bats, Xylophone",
        c: "Mandible, Maxilla, Zygomatic bones"
    },
    correctAnswer: "a: Manubrium, Body, Xiphoid process",
    reward: "What is the correct hand placement for CPR?"
    },
    {
    question: "CPR Stands for:",
    answers: {
        a: "Can't Pee Right",
        b: "Cardiopulmonary Regeneration",
        c: "Cardiopulmonary Resuscitation"
    },
    correctAnswer: "c: Cardiopulmonary Resuscitation",
    reward: "What is the Importance of CPR?"

    },
    {
    question: "What is the recommended rate of CPR compressions for an adult victim?",
    answers: {
        a: "200-300 per minute",
        b: "100 to 120 per minute",
        c: "500-1000 per minute",
    },
    correctAnswer: " b: 100 to 120 per minute",
    reward: "What are the 7 steps of CPR?"
    },
];

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
    
    // tButton.addEventListener("click", goInit);
    tButton.onclick = goInit = () => {
        startTimer(tToken, timerDisplay);
        timerDisplay.innerHTML = `Time remaining: ${time} minutes!`;
        console.log(time);
    }
        // zeroMinutes =(minute,b) => {
        // 60 * tToken,
        // timerDisplay = document.querySelector('#time');


    startTimer =(duration, timerDisplay) => {
            let timer = duration, minutes, seconds;
            intervalId = setInterval( () => {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            timerDisplay.textContent = minutes + ":" + seconds;
            console.log(intervalId);
            console.log(timerDisplay);

            if (--timer < 0) {
                timer = duration;
                clearInterval(intervalId);
            }
        }, 1000);   
    }

    x = (t,s) =>{
       time = tToken * 60;
       return time;
    }


