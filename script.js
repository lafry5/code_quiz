var highscorecount = 0;
var chosenAnswer = true;
var answer = document.querySelector(".choices");
console.log(answer);


var startquizEl = document.querySelector("#startquiz");
var highscorecountEl = document.querySelector("#highscorecount");
var timerEl = document.getElementById('timeremaining')

var questions = [ //these are the questions and answers
    {q: "What year is it?...freebie question", a:"2020", b:"2019", c:"2018", d:"2017", correct: "a"},
    {q: "A useful tool used during development and debugging for printing content to the debugger is?", a:"javascript", b:"terminal/bash", c:"for loops", d:"console log", correct: "d"},
    {q: "String values must be enclosed within _____ when being assigned to variables", a:"commas", b:"curly brackets", c:"quotes", d:"parenthesis", correct: "b"},
    {q: "True or False: The DOM is built into the Javascript Language", a:"True", b:"False", c:"empty", d:"empty", correct: "b"},
    {q: "var word = 'cat'; var letter = word[0]; What is letter?", a:"cat", b:"word", c:"c", d:"a", correct: "c"},
    {q: "What is the default boolean value", a:"True", b:"False", c:"empty", d:"empty", correct: "a"},
    {q: "What code is least likely to be found when setting a timer?", a:"setInterval", b:"clearInterval", c:"addEventListener", d:"timeLeft", correct: "c"},
    {q: "What is the opposite code of clearInterval", a:"setInterval", b:"setCounterText", c:"starttimer", d:"empty", correct: "a"},
    {q: "What code zeroes out an array", a:"test.length[]=0", b:"test=0", c:"test", d:"empty", correct: "a"},
    {q: "var a = 1 is a string", a:"True", b:"False", c:"empty", d:"empty", correct: "b"},
    {q: "!= represents", a:"Comment out code in HTML", b:"Does not equal", c:"Emphatic end to a sentence", d:"empty", correct: "b"},
    {q: "A confirm prompt results in two options on the screen", a:"True", b:"False", c:"empty", d:"empty", correct: "a"},
    {q: "TBD", a:"True", b:"False", c:"empty", d:"empty", correct: "a"},

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
        setCounterText(); //print out high score !!
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

    i++;
    correctAnswer = questions[i].correct
    console.log(correctAnswer) // This is printing out
    console.log(correctAnswer + 'is the correct answer')

    answer.addEventListener("click", function(){
        console.log(event)  //"unable to get property add event listener"
        var chosenAnswer = event.target.value;
        console.log(chosenAnswer + 'is the chosenAnswer')

        //var answerChoices = document.getElementsByClassName("choices")
        //console.log(answerChoices)

       //for(var j = 0; j<answerChoices.length; j++){

       //answerChoices[j].checked = false

    if(chosenAnswer = correctAnswer[i]) {               
        // increment the high score count
        // print correct
        console.log("executed chosenAnswer is the correct answer")
        alert("executed chosenAnswer is the correct answer");
    } else {
        // decrement the timer, do not increment the high score and print wrong
        // alert("wrong");
    } // end of if statement
     
    
           
    }) //end of button.addEventListener function

    document.querySelector('input[type=radio]:checked').checked = false;

    }) //end of answer.addEventListener function
        

        
} //end of startgame function


startquizEl.addEventListener("click", function() { //Start Quiz button actions upon click
    starttimer();
    startgame();
    console.log("executed start quiz"); //never get to this ??
}
)


// highscorecountEl.addEventListener("click", function() { //High Score count button actions upon click
//     setCounterText();
//     console.log("executed set counter text");
// })