
//Adding current date to the header of the page using moment
var date = document.getElementById("currentDay");
date.innerHTML = moment().format('MMMM Do, YYYY');


// Rendering the calendar
var calContainer = document.getElementById("myworkdaycalendar");
var hours = moment().format('h:mm a');
var time = document.getElementById("daytime");
var dailyTask = document.getElementById("task");
var saveTaskButton = document.getElementById("savebutton");

var workTime= ["9:00 AM","10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];


//LocalStorage

var storedInput = JSON.parse (localStorage.getItem ("task"));

function storeTask () {
    localStorage.setItem("task", JSON.stringify(dailyTask));

}

saveTaskButton.addEventListener("click", function(event) {
event.preventDefault();

var inputTask = dailyTask.value.trim();

if (inputTask ==="") {
  return;
}


dailyTask.value="";
storeTask();

});

