var highscorecount = 0;
var chosenAnswer = true;


var startquizEl = document.querySelector("#startquiz");
var highscorecountEl = document.querySelector("#highscorecount");
var timerEl = document.getElementById('timeremaining')

var questions = [ //these are the questions
    {q: "What year is it?...freebie question", a:"2020", b:"2019", c:"2018", d:"2017"},
    {q: "A useful tool used during development and debugging for printing content to the debugger is?", a:"javascript", b:"terminal/bash", c:"for loops", d:"console log"},
    {q: "String values must be enclosed within _____ when being assigned to variables", a:"commas", b:"curly brackets", c:"quotes", d:"parenthesis"},
    {q: "True or False: The DOM is built into the Javascript Language", a:"True", b:"False", c:"empty", d:"empty"},
    {q: "var word = 'cat'; var letter = word[0]; What is letter?", a:"cat", b:"word", c:"c", d:"a"},
]
    

function setCounterText() { // Set Counter function; called by High Score Count button
    highscorecountEl.textContent = highscorecount;
    highscorecountEl.textContent = highscorecount + ' high score';
    console.log(highscorecount);

}

function starttimer() { //Start Timer function; called by Start Game button
    //add starttimer code here
    console.log("executed start timer")

    var timeLeft = 75

    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + ' seconds remaining';
    
      timeLeft--
  

      if (timeLeft === 0) {
        timerEl.textContent = '';
        clearInterval(timeInterval)
        setCounterText();
      }
    }, 1000)

}

function startgame() { //Start Game Function; called by Start Quiz function
   //start the loop that loops through the questions if the previous question was true
    console.log("executed start game");
    
    // how do I get the questions to appear?


    var button = document.getElementById("test")
    var i = 0
    button.addEventListener("click", function(){
    
    var question = document.getElementById("question")
    question.innerText = questions[i].q

    var label = document.getElementById("label1")
    label.innerText = questions[i].a

    var label = document.getElementById("label2")
    label.innerText = questions[i].b

    var label = document.getElementById("label3")
    label.innerText = questions[i].c

    var label = document.getElementById("label4")
    label.innerText = questions[i].d

    i++
    var answer = document.getElementById("answer1") //   why is this answer1?
    answer.value = label.innerText = questions[2].a //   why is this two?


    answer.addEventListener("click", function(){
        console.log(event)  //"unable to get property add event listener"
        var chosenAnswer = event.target.value;
        

    if(chosenAnswer == "true") {               //should this be inside the event listener?
        // do something
        console.log("executed chosenAnswer is true")
    } else {
        // do something else
    } // end of if statement
    

    }) //end of answer.addEventListener function
    document.querySelector('input[type=radio]:checked').checked = false;
    }) //end of button.addEventListener function
} //end of startgame function


startquizEl.addEventListener("click", function() { //Start Quiz button actions upon click
    starttimer();
    startgame();
    console.log("executed start quiz"); //never get to this ??
}
)


highscorecountEl.addEventListener("click", function() { //High Score count button actions upon click
    setCounterText();
    console.log("executed set counter text");
})