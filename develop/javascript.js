
//Adding current date to the header of the page using moment
var date = document.getElementById("currentDay");
date.innerHTML = moment().format('MMMM Do, YYYY');


var hours = moment().format('h');
console.log(hours);
var time = document.querySelector(".daytime");
var dailyTask = document.querySelector(".task");
var saveTaskButton = document.querySelector(".savebutton");
var rowBlock = document.querySelector(".time-block")


// 9 AM Stored Input - Render Input Stored
var ninebutton = document.getElementById("ninebutton");
var nineText = document.getElementById("ninetext");
var ninehour = document.getElementById("ninehour");

renderNineTask();


ninebutton.addEventListener("click", function (event) {
  event.preventDefault();

  nineText.value.trim();
  console.log(nineText.value);
  localStorage.setItem("ninetask", nineText.value);
});


function renderNineTask() {

  nineText.innerText = localStorage.getItem("ninetask");
}


nineHourColors();
function nineHourColors() {

  if (hours == 9) {
    $("#ninetext").addClass("present");
  }
  else if (hours < 9) {
    $("#ninetext").addClass("future");

  }
  
  else {
    $("ninetext").addClass("past");
  }

}

// 10 AM Stored Input - Render Input Stored
var tenbutton = document.getElementById("tenbutton");
var tenText = document.getElementById("tentext");
var tenhour = document.getElementById("tenhour");

renderTenTask();
tenHourColors();

tenbutton.addEventListener("click", function (event) {
  event.preventDefault();

  tenText.value.trim();
  localStorage.setItem("tentask", tenText.value);
});

function renderTenTask() {

  tenText.innerText = localStorage.getItem("tentask");
}


function tenHourColors() {

  if (hours == 10 ) {
    $("#tentext").addClass("present");
  }
  else if (hours > 10) {
  $("#tentext").removeClass("present future")
  $("#tentext").addClass("past");
  }
  
  else {
  $("tentext").addClass("future");
  }

}

// 11 AM Stored Input - Render Input Stored

var elevenbutton = document.getElementById("elevenbutton");
var elevenText = document.getElementById("eleventext");
var elevenhour = document.getElementById("elevenhour");

renderElevenTask();
elevenHourColors();

elevenbutton.addEventListener("click", function (event) {
  event.preventDefault();

  elevenText.value.trim();
  localStorage.setItem("eleventask", elevenText.value);
});

function renderElevenTask() {

  elevenText.innerText = localStorage.getItem("eleventask");
}



function elevenHourColors() {

if (hours == 11) {
$("#eleventext").addClass("present");
}

else if (hours < 11) {
//$("#eleventext").removeClass("present future")
$("#eleventext").addClass("future");

}
  
else {
$("eleventext").addClass("past");
}

}

// 12 PM Stored Input - Render Input Stored
var twelvebutton = document.getElementById("twelvebutton");
var twelveText = document.getElementById("twelvetext");
var twelveHour = document.getElementById("twelvehour");

renderTwelveTask();

twelvebutton.addEventListener("click", function (event) {
  event.preventDefault();

  twelveText.value.trim();
  localStorage.setItem("twelvetask", twelveText.value);

})

function renderTwelveTask() {
  twelveText.innerText = localStorage.getItem("twelvetask");

}

// 1 PM Stored Input - Render Input Stored

var onebutton = document.getElementById("onebutton");
var oneText = document.getElementById("onetext");
var oneHour = document.getElementById("onehour");

renderOneTask();

onebutton.addEventListener("click", function (event) {
  event.preventDefault();

  oneText.value.trim();
  localStorage.setItem("onetask", oneText.value);

})

function renderOneTask() {
  oneText.innerText = localStorage.getItem("onetask");
}

// 2 PM Stored Input - Render Input Stored

var twobutton = document.getElementById("twobutton");
var twoText = document.getElementById("twotext");
var twoHour = document.getElementById("twohour");

renderTwoTask();

twobutton.addEventListener("click", function (event) {
  event.preventDefault();

  twoText.value.trim();
  localStorage.setItem("twotask", twoText.value);

})

function renderTwoTask() {
  twoText.innerText = localStorage.getItem("twotask");
}

// 3 PM Stored Input - Render Input Stored

var threebutton = document.getElementById("threebutton");
var threeText = document.getElementById("threetext");
var threeHour = document.getElementById("threehour");

renderThreeTask();

threebutton.addEventListener("click", function (event) {
  event.preventDefault();

  threeText.value.trim();
  localStorage.setItem("threetask", threeText.value);

})

function renderThreeTask() {
  threeText.innerText = localStorage.getItem("threetask");
}

// 4 PM Stored Input - Render Input Stored

var fourbutton = document.getElementById("fourbutton");
var fourText = document.getElementById("fourtext");
var fourHour = document.getElementById("fourhour");

renderFourTask();

fourbutton.addEventListener("click", function (event) {
  event.preventDefault();

  fourText.value.trim();
  localStorage.setItem("fourtask", fourText.value);

})

function renderFourTask() {
  fourText.innerText = localStorage.getItem("fourtask");

}

// 5 PM Stored Input - Render Input Stored
var fivebutton = document.getElementById("fivebutton");
var fiveText = document.getElementById("fivetext");
var fiveHour = document.getElementById("fivehour");

fiveRenderTask();

fivebutton.addEventListener("click", function (event) {
  event.preventDefault();

  fiveText.value.trim();
  localStorage.setItem("fivetask", fiveText.value);

})

function fiveRenderTask() {
  fiveText.innerText = localStorage.getItem("fivetask");
}