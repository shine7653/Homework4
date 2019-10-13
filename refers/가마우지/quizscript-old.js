var timeEl = document.querySelector("#countdown");
var timeE2 = document.querySelector("#quizCountdown");
var startEl = document.querySelector("#startButton");
var nameInput = document.querySelector("#name");
var submissionResponseE1 = document.querySelector("#response");
var scoreResult = document.querySelector("#scoreResult")
var arrayQues = document.querySelector("#myQues");
var ull = document.querySelector("#myBtn")

// The array of questions for our quiz game.

//------------------------------------------------
// Loop over every question object
function quizLoop() {

 /*  console.log(questions)
  for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    console.log(element)
  } */
  for (var j = 0; j < questions.length; j++) {
    console.log('this for loop ran')
    var curQuestions = document.createElement("div");
    curQuestions.textContent = questions[j].title;
    arrayQues.appendChild(curQuestions);

    // TODO: create loop to show answers to choose
    // var ull = document.createElement("ul");

    for (var i = 0; i < questions[j].choices.length; i++) {
      var curChoices = questions[j].choices[i];
      console.log(curChoices)

      var buttons = document.createElement("li");
      buttons.textContent = curChoices;
      ull.appendChild(buttons);

      // When user choose the right answer which is in the choices
      ull.addEventListener("click", function () {

        if (useChoice !== questions[j].answer) {
          ull.prepend("<br><hr>" + "WRONG");
        } else {
          ull.prepend("<br><hr>" + "CORRECT");
        }
      });
    }
  };
};

// Capture the score which is the remaining sec in timer ???????

// --------------------------------------------

startEl.addEventListener("click", function () {
  event.preventDefault();

  // start quiz
  quizLoop();
  var secondsLeft = 20;

  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = "Time's UP";
    scoreResult.textContent = "All Done!";
  }

  setTime();
});

/* var response = "Thank you for your submission " + nameInput.value;
submissionResponseE1.textContent = response; */



/* function setCounterText() {
  countEl.textContent = count;
} */