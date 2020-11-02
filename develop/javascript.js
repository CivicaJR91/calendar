
//Adding current date to the header of the page using moment
var date = document.getElementById("currentDay");
date.innerHTML = moment().format('MMMM Do, YYYY');


var hours = moment().format('h:mm a');
var time = document.querySelector(".daytime");
var dailyTask = document.querySelector(".task");
var saveTaskButton = document.querySelector(".savebutton");
var rowBlock = document.querySelector(".time-block")


//LocalStorage
// Store Tasks


// adding eventlistener to the block that holds the time, text, and save button
saveTaskButton.addEventListener("click", function (event) {
  event.preventDefault();

var nine= document.getElementById("nine");
nine.value.trim();
localStorage.setItem("task", JSON.stringify(""));

renderTasks();

});

// 
function renderTasks() {

  JSON.parse(localStorage.getItem("task"));
}


