var highscorecount = 0;

// Old code below for reference
//var incrementEl = document.querySelector("#increment");
//var decrementEl = document.querySelector("#decrement");
//var countEl = document.querySelector("#count");

//function setCounterText() {
//  countEl.textContent = count;
//}

//incrementEl.addEventListener("click", function() {
//  count++;
//  setCounterText();
//});

//decrementEl.addEventListener("click", function() {
//  if(count > 0) {
//    count--;
//    setCounterText();
//  }
//});

var startquizEl = document.querySelector("#startquiz");
var highscorecountEl = document.querySelector("#highscorecount");

function setCounterText() {
    highscorecountEl.textContent = highscorecount;
    console.log(highscorecount);
}

function starttimer() {
    //add starttimer code here
    console.log("executed start timer")
}

function startgame() {
    //add startgame code here
    starttimer();
    console.log("executed start game");
    }

startquizEl.addEventListener("click", function() {
    startgame();
    console.log("executed start quiz");
}
)