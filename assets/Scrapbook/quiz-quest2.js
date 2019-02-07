$(document).ready(function () {

    let game = {
        question: questions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct = 0,
        wrong = 0,
        rightAns = 'https://media0.giphy.com/media/4xpB3eE00FfBm/200w.gif?cid=e1bb72ff5c5082806241595a51dd485b',
        wrongAns = 'https://media.giphy.com/media/26xBCBhu6NiOp2ZjO/giphy.gif',
        doBetter = 'https://media3.giphy.com/media/9xijGdDIMovchalhxN/200w.gif?cid=e1bb72ff5c5082e835634c5749854049',
        failTry = 'https://media.giphy.com/media/26xBCBhu6NiOp2ZjO/giphy.gif',

        countdown: function () {
            this.counter--;
            $("#counter-number").text(this.counter); //put timer on screen @ id='counter-number'
            if (this.counter === 0) {
                console.log("Time's Up!");
                this.timeUp();
            }
        },
        loadQuestion: function () {
            timer = setInterval(this.countdown.bind(this),1000);

            CanvasRenderingContext2D.html("<h2>" + questions[this.currentQuestion].question + "</h2>");


            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('quiz-submit')


            const cprTest = [{
                question: 'The sternum (breastbone) is composed of three parts:',
                answers: [
                    'Manubrium, Body, Xiphoid process',
                    'Manure, Bats, Xylophone',
                    'Mandible, Maxilla, Zygomatic bones',
                    'Clavical, Manubrium, Thoracic cage',
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
                    'Cardiac Pulse Rhythm',
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
                    'As fast as your own heart rate',
                ],
                correctAnswer: '100 to 120 per minute',
                reward: 'https://youtu.be/hnMVus3hrWw'
            },
            {
                question: 'What is the first question you must ask before you respond to any first aid situation?',
                answers: [
                    'Age of the injured or ill person',
                    'Safety of the scene',
                    'Nature of the injury',
                    'Time of the injury',
                ],
                correctAnswer: 'Safety of the scene',
                reward: 'https://www.youtube.com/embed/Ey--wndekTU?start=6'
            }
            ];

            // Build quiz from cprTest
            let buildQuiz = () => {
                // Store in an array to use in HTML output  
                const output = [];

                // For each question loop using forEach() method
                cprTest.forEach(
                    (currentQuestion, questionNumber) => {

                        // Need to store answer choices in an array 
                        const answers = [];

                        // The letter choices of possible answers for the currentQuestion
                        for (letter in currentQuestion.answers) {

                            //use jQuery to create HTML radio button with the appropriate letter in the DOM
                            answers.push(
                                `
                    <label>
                        <input name='question${questionNumber}' type='radio' value='${letter}'>
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                    `
                            );
                        }
                        // Add active question and answers to the output array
                        output.push(
                            `
                    <div class='question'> ${currentQuestion.question} </div>
                    <div class='answers'> ${answers.join('')}</div>
                    `
                        );
                    }
                );

                // Combine output list into one string of HTML to display in DOM
                quizContainer.innerHTML = output.join('');
            };


            // Show results
            let showResults = () => {
                // Gather arrays that contain quiz answers
                const answerContainers = quizContainer.querySelectorAll('.answers');

                // Track user's answers
                let numCorrect = 0;

                // for each question...
                cprTest.forEach(
                    (currentQuestion, questionNumber) => {
                        // Check selected answer
                        const answerContainer = answerContainers[questionNumber];
                        const selector = 'input[name=question' + questionNumber + ']:checked';

                        //capture answer or blank empty object! 
                        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                        // If correct
                        if (userAnswer === currentQuestion.correctAnswer) {
                            numCorrect++;

                            //  Change color of correct answer to green
                            answerContainers[questionNumber].style.color = '#90ee90';
                        }

                        // If wrong or blank {}.value change the style.color value to red
                        else {
                            // Make the user's answer red
                            answerContainers[questionNumber].style.color = '#ff0000';
                        }

                    });

                // Display number of correct answers out of total 
                resultsContainer.innerHTML = numCorrect + 'out of ' + cprTest.length;
            }
            //  Display first question 
            buildQuiz();
            // On submit, show results
            submitButton.addEventListener('click', showResults);
        }}
    });