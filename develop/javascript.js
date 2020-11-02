
//Adding current date to the header of the page using moment
var date = document.getElementById("currentDay");
date.innerHTML = moment().format('MMMM Do, YYYY');


var hours = moment().format('h:mm a');
var time = document.getElementById("daytime");
var dailyTask = document.getElementById("task");
var saveTaskButton = document.getElementById("savebutton");
var rowBlock = document.querySelector(".time-block")

var workTime= ["9:00 AM","10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];


//LocalStorage
// Store Tasks
function storeTask () {
  localStorage.setItem("task", JSON.stringify(dailyTask));

}

// adding eventlistener to the block that holds the time, text, and save button
rowBlock.addEventListener("click", function(event) {
event.preventDefault();

dailyTask.value.trim();

storeTask();
renderTasks();
});

// 
function renderTasks (){

JSON.parse (localStorage.getItem ("task"));
}


