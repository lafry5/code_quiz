var highscorecount = 0;
var chosenAnswer = true;
var answer = document.querySelector(".choices");
console.log(answer);
initialinput = 0;
var i = 0;

var startquizEl = document.querySelector("#startquiz");
var highscorecountEl = document.querySelector("#highscorecount");
var timerEl = document.getElementById('timeremaining');
var questionEl = document.getElementById("questionsection");
var correctEl = document.getElementById('correct');

var questions = [ //these are the questions and answers
    {
        q: "What year is it?...freebie question",
        a: "2020",
        b: "2019",
        c: "2018",
        d: "2017",
        correct: "a"
    },
    {
        q: "A useful tool used during development and debugging for printing content to the debugger is?",
        a: "javascript",
        b: "terminal/bash",
        c: "for loops",
        d: "console log",
        correct: "d"
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        correct: "b"
    },
    {
        q: "True or False: The DOM is built into the Javascript Language",
        a: "True",
        b: "False",
        c: "empty",
        d: "empty",
        correct: "b"
    },
    {
        q: "var word = 'cat'; var letter = word[0]; What is letter?",
        a: "cat",
        b: "word",
        c: "c",
        d: "a",
        correct: "c"
    },
    {
        q: "What is the default boolean value",
        a: "True",
        b: "False",
        c: "empty",
        d: "empty",
        correct: "a"
    },
    {
        q: "What code is least likely to be found when setting a timer?",
        a: "setInterval",
        b: "clearInterval",
        c: "addEventListener",
        d: "timeLeft",
        correct: "c"
    },
    {
        q: "What is the opposite code of clearInterval",
        a: "setInterval",
        b: "setCounterText",
        c: "starttimer",
        d: "empty",
        correct: "a"
    },
    {
        q: "What code zeroes out an array",
        a: "test.length[]=0",
        b: "test=0",
        c: "test",
        d: "empty",
        correct: "a"
    },
    {
        q: "var a = 1 is a string",
        a: "True",
        b: "False",
        c: "empty",
        d: "empty",
        correct: "b"
    },
    {
        q: "!= represents",
        a: "Comment out code in HTML",
        b: "Does not equal",
        c: "Emphatic end to a sentence",
        d: "empty",
        correct: "b"
    },
    {
        q: "A confirm prompt results in two options on the screen",
        a: "True",
        b: "False",
        c: "empty",
        d: "empty",
        correct: "a"
    },
    {
        q: "An alert prompt puts the results in the console log",
        a: "True",
        b: "False",
        c: "empty",
        d: "empty",
        correct: "b"
    }
]

var timeLeft;

startquizEl.addEventListener("click", function () { //Start Quiz button action upon click of Start Quiz button
    starttimer();  // calls start timer, and 
    startgame();   // start game
    console.log("executed start quiz");
})

function initials() {  // Initials function
   // document.getElementById("questionsection").style.display = "none";
    var initialinput = prompt('What are your initials?');
    console.log(initialinput);
    highscorecountEl.textContent = 'High score is ' + initialinput + '-' + highscorecount + '.';
   // alert('High score is ' + initialinput + '-' + highscorecount + '.');
}

function setCounterText() { // Set Counter function; called by High Score Count button
    highscorecountEl.textContent = highscorecount;
    highscorecountEl.textContent = highscorecount + ' high score';
    console.log(highscorecount);
    initials();
}

function starttimer() { //Start Timer function; called by Start Game button

    console.log("executed start timer")

    timeLeft = 75
    initialinput = 'LF';

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + ' seconds remaining';

        timeLeft--

        if (timeLeft <= 0) {
            timerEl.textContent = '';
            clearInterval(timeInterval)
            // document.getElementById("questionsection").style.display = "none";
            setCounterText(); //print out high score !!
      }
    }, 1000)

}

function startgame() { //Start Game Function; called by Start Quiz function

   document.getElementById("info").style.display = "none";

    // un-hide questions section
    questionEl.removeAttribute("class");

  //     if(i<=questions.length) {
            
           document.querySelector('input[type=radio]').checked = false;  // how to deselect radio button

           nextquestion();
  //     } else {
  //         setCounterText();
  //     }
  //      } // end of if

} //end of startgame function


 


document.querySelectorAll('.choices').forEach(item => {
    item.addEventListener('click', event => {
        // console.log(event)  
        j = 0;
        var chosenAnswer = event.target.dataset.answer;
        console.log(chosenAnswer + ' is the chosenAnswer')

        correctAnswer = questions[i].correct;

        

        if (chosenAnswer == correctAnswer) {
            highscorecount++;
            var correctEl = document.getElementById('correct');
            correctEl.textContent = 'Correct';  
            console.log(chosenAnswer);
           // alert("correct"); // trying to replace this with an <h5>
            console.log(highscorecount)
        } else {
            timeLeft = timeLeft - 10; // decrement the timer, do not increment the high score 
            var correctEl = document.getElementById('correct');
            correctEl.textContent = 'Wrong';  
            console.log(chosenAnswer);
           // alert("wrong"); // trying to replace this with an <h5>
        } 

        correctEl
        
        i++;

        document.querySelector('input[type=radio]').checked = false;  // how to deselect radio button

        nextquestion();
   }) 
}) 


function nextquestion() { //Next question function 
    var question = document.getElementById("question")
    console.log("question", question);
    question.innerText = questions[i].q

    var label = document.getElementById("label1")
    console.log("labela", label);
    label.innerText = questions[i].a
  
    var label = document.getElementById("label2")
    console.log("labelb", label);
    label.innerText = questions[i].b

    var label = document.getElementById("label3")
    label.innerText = questions[i].c

    var label = document.getElementById("label4")
    label.innerText = questions[i].d
    
}

