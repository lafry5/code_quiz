var highscorecount = 0;
var chosenAnswer = true;

var startquizEl = document.querySelector("#startquiz");
var highscorecountEl = document.querySelector("#highscorecount");

var questions = [ //these are the questions
    {q: "What year is it 1?", a:"20201", b:"20191", c:"20181", d:"20171"},
    {q: "What year is it 2?", a:"20202", b:"20192", c:"20182", d:"20172"},
    {q: "What year is it 3?", a:"20203", b:"20193", c:"20183", d:"20173"} //last question
]

function setCounterText() { // Set Counter function; called by High Score Count button
    highscorecountEl.textContent = highscorecount;
    console.log(highscorecount);
}

function starttimer() { //Start Timer function; called by Start Game button
    //add starttimer code here
    console.log("executed start timer")
}

function startgame() { //Start Game Function; called by Start Quiz function
   //start the timer, then start the loop that loops through the questions if the previous question was true
    starttimer();
    console.log("executed start game");
    
    // how do I get the questions to appear?

    var answer = document.getElementById("answer1")
    answer.value = label.innerText = questions[2].a // why is this two?

    answer.addEventListener("click", function() {
        console.log(event)
        var chosenAnswer = event.target.value
    }
    if(chosenAnswer == true) {
        // do something
        console.log("executed chosenAnswer is true")
    } else {
        // do something else
    }

}

startquizEl.addEventListener("click", function() { //Start Quiz button actions upon click
    startgame();
    console.log("executed start quiz");
}
)

highscorecountEl.addEventListener("click", function() { //High Score count button actions upon click
    setCounterText();
    console.log("executed set counter text");
}
)