var start = document.querySelector("#start");
// var button = document.querySelector("#button");
var timeEl = document.querySelector("#countDown");
var arrayQues = document.querySelector("#queAnswers");
var yourName = document.querySelector("#yourName");
var quesIndex = 0;
var score = 0;
//----------------------------------------------------
// Make the greeting comment
/* function displayGreeting() {
  alert(startOver.greeting);
}
displayGreeting();
 */

 function displayStart() {
    // $("#start").html("Coding Quiz Challenge");
    var h1 = document.createElement("h1");
    h1.textContent = "Coding Quiz Challenge";
    arrayQues.appendChild(h1);

    var h3 = document.createElement("h3");
    h3.textContent = "Try to answer the following code-related questions within the time limit.";
    arrayQues.appendChild(h3);  

    var button = document.createElement("button");
    button.textContent = "Start Quiz";
    arrayQues.append(button);
    
    button.addEventListener("click",
      function() {
        arrayQues.removeChild(h1);
        arrayQues.removeChild(h3);
        arrayQues.removeChild(button);
        nextQues();
        setTime();
    })
    // return displayStart();
 }

 displayStart();

// -----------------------------------------------------
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
  // ----------------------------------------------------
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
  // ---------------------------------------------------

  // function showResult() {
  //   arrayQues.innerHtml = "";
  // }