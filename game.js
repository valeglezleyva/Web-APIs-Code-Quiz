// Variable to be used
var startQuizEl = document.querySelector("#btn-start");
var questionsEl = document.querySelectorAll("h2");
var introEl = document.querySelectorAll(".card-title");
var instructionsEl = document.querySelector(".card-text");

// Create instructions page
    // var introPage = document.createElement(introEl);
    // introPage.textContent = "Coding Quiz";
    // document.body.appendChild(introPage);

// WHEN I click the start button
    // addEventListener("click", function() {}); for when starting quiz

function startQuiz() {
	// start timer function (need to make this)
  // set text content of timer on DOM
	// call getQuestion function
}

function getQuestion() {
	// get the question/answer object from your questions array based on the current question index
	// update the DOM with the current question
  // clear out any old question choices  
  // update the DOM with the current answer choices
			// for loop that goes through the answer choices
				// creates a button
				// set a class attribute of "choice"
				// set a value attribute of choice
				// set text content of button to be choice
				// append button to the DOM
}


// THEN a timer starts and I am presented with a question
    // Need to set interval timer 'setInterval(function(){  }, 1000);'
    // Need to set a start time
    // Need 'for loop' for array of questions
        // Stop when timer gets to zero OR array ends

// WHEN I answer a question
    // addEventListener("click", function() {}); for when choosing answer

// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
    // Need to subtract time if a wrong answer is clicked

// WHEN all questions are answered or the timer reaches 0
     // Need to stop timer when it gets to zero or questions array end
     //Prompt to add name & submit
        // addEventListener("click", function() {}); for when submitting
            // show high score page
            // addEventListener("click", function() {}); for 'go back' or 'clear high score'

    
   
// Need to create elements for questions and answers, set textContent & appendChild
