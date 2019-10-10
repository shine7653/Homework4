var timeEl = document.querySelector("#countdown");
var startEl = document.querySelector("#startButton");
var nameInput = document.querySelector("#name");
var submissionResponseE1 = document.querySelector("#response");
var scoreResult = document.querySelector("#scoreResult")
var quizBox = document.querySelector("#quizBox");
//var ooo = document.querySelector(".choices")

// The array of questions for our quiz game.
var questions = [
    { title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
];

// Loop over every question object
function quizLoop() {
    var curQuestions = createElement("que");
    curQuestions.textContent = questions[title];
    quizBox.appendChild(curQuestions);
    /* quizBox.textContent = questions.title; */

    var ull = document.createElement("ul");
    
    for (var i = 0; i < questions[choices].length; i++) {
        var curChoices = questions[choices][i];

        var items = document.createElement("li");
        items.textContent = curChoices[0];

        ull.appendChild(items);        
    }
    return ull;
};

/*     var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[0]));     */    

        // When user choose the right answer which is in the choices
        
        // TODO: create loop to show answers to choose
        // startEl.addEventListener("click", function() {
        //     event.preventDefault();

        // When user choose the right answer which is in the choices
        
    // Capture the score which is the remaining sec tin timer ???????


// --------------------------------------------

startEl.addEventListener("click", function() {
    event.preventDefault();

    // start quiz
    quizLoop();
    var secondsLeft = 10;

    function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
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