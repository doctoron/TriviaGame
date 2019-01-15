// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Trivia game JavaScript
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -----------------------------------------------------------------------------------
// Thanks to influences by Stopwatch activity, Michael Pascuczzi &
// Tamekia Schatzmann for helping with the timer logic code
// -----------------------------------------------------------------------------------
const testCard =document.getElementById('testObjectArray')
const tButton = document.getElementById("timer-button");
const timerDisplay = document.getElementById("timer-display");
const tToken = 37;
let time = "00:30";
let intervalID;
let countDown;    



const testObjectArray =[
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

// Start here once a click has been detected and call the goInit function: 

// tButton.addEventListener("click", goInit);
tButton.onclick = goInit = () => {
    startTimer(tToken, timerDisplay);
    timerDisplay.innerHTML = `Time remaining: ${time} minutes!`
    console.log(time);
}

startTimer =(duration, timerDisplay) => {
    if (!countDown) {
        countDown = "true";
        
        let timer = duration, minutes, seconds;
        intervalId = setInterval( () => {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            timerDisplay.textContent = minutes + ":" + seconds;
            // console.log(intervalId);
            console.log(timerDisplay);
            
            if (--timer < 0) {
                timer = duration;
                clearInterval(intervalId);
                stopTimer;
            }
        }, 1000);   
    }
}
let stopTimer = () => {
    clearInterval(intervalId);
    countDown = !countDown;
}  

