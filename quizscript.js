var timeEl = document.querySelector("#countDown");
var arrayQues = document.querySelector("#queAnswers");

var quesIndex = 0;
var score = 0;
//---------------------------------------

// Make the greeting comment
function displayGreeting() {
  alert(startOver.greeting);
}
displayGreeting();

// As soon as the question starts, timer begins
var timerInterval = setTime();

// Sets next question and choice buttons
function nextQues() {

  var question = document.createElement("h1");
  //console.log(questions);
  question.textContent = questions[quesIndex].title;
  arrayQues.appendChild(question);

  // Set the choices
  for (var i = 0; i < questions[quesIndex].choices.length ; i++) {
    var button = document.createElement("button");
    button.textContent = questions[quesIndex].choices[i];
    arrayQues.appendChild(button);

    // Set the button event listener
    button.addEventListener("click", function(event) {
      var userChoice = event.target.textContent;
      if (userChoice === questions[quesIndex].answer) {
        alert("CORRECT") 
        score++;
      } else { 
        alert("FALSE")
        secondsLeft = secondsLeft-15 ;
      }
      
      // If questions remaining, increment current question. 
      // Otherwise end game and stop timer.
      if (quesIndex < 4) {
        quesIndex++;
      } else {
        clearInterval(timerInterval);
        alert("GAME OVER! Your score is: " + score)
      }

      arrayQues.innerHTML = "";

      return nextQues();
    })
  }
}
nextQues();

 // Set th timer
  var secondsLeft = 70;

  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);

    return timerInterval;
  }

  function sendMessage() {
    timeEl.textContent = "Time's UP";
    // scoreResult.textContent = "All Done!";
  }
