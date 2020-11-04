
//Adding current date to the header of the page using moment
var date = document.getElementById("currentDay");
date.innerHTML = moment().format('MMMM Do, YYYY');


var hours = moment().format('H');
console.log(hours);


// 9 AM Stored Input - Render Input Stored
var ninebutton = document.getElementById("ninebutton");
var nineText = document.getElementById("ninetext");
var ninehour = document.getElementById("ninehour");

renderNineTask();
nineHourColors();

ninebutton.addEventListener("click", function (event) {
  event.preventDefault();

  nineText.value.trim();
  console.log(nineText.value);
  localStorage.setItem("ninetask", nineText.value);
});


function renderNineTask() {

  nineText.innerText = localStorage.getItem("ninetask");
}



function nineHourColors() {

  if (hours == 9) {
    $("#ninetext").addClass("present");
  }
  else if (hours < 9) {
    $("#ninetext").addClass("future");

  }
  
  else {
    $("#ninetext").addClass("past");
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
  else if (hours < 10) {
  $("#tentext").addClass("future")

  }
  
  else {
  $("#tentext").addClass("past");
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

$("#eleventext").addClass("future");

}
  
else {
$("#eleventext").addClass("past");
}

}

// 12 PM Stored Input - Render Input Stored
var twelvebutton = document.getElementById("twelvebutton");
var twelveText = document.getElementById("twelvetext");
var twelveHour = document.getElementById("twelvehour");

renderTwelveTask();
tweleveHourColors();

twelvebutton.addEventListener("click", function (event) {
  event.preventDefault();

  twelveText.value.trim();
  localStorage.setItem("twelvetask", twelveText.value);

})

function renderTwelveTask() {
  twelveText.innerText = localStorage.getItem("twelvetask");

}


function tweleveHourColors() {

  if (hours == 12) {
  $("#twelvetext").addClass("present");
  }
  
  else if (hours < 12) {
  
  $("#twelvetext").addClass("future");
  
  }
    
  else {
  $("#twelvetext").addClass("past");
  }
  
  }

// 1 PM Stored Input - Render Input Stored

var onebutton = document.getElementById("onebutton");
var oneText = document.getElementById("onetext");
var oneHour = document.getElementById("onehour");

renderOneTask();
oneHourColors();

onebutton.addEventListener("click", function (event) {
  event.preventDefault();

  oneText.value.trim();
  localStorage.setItem("onetask", oneText.value);

})

function renderOneTask() {
  oneText.innerText = localStorage.getItem("onetask");
}

function oneHourColors() {

  if (hours == 13) {
  $("#onetext").addClass("present");
  }
  
  else if (hours < 13) {

  $("#onetext").addClass("future");
  
  }
    
  else {
  $("#onetext").addClass("past");
  }
  
  }


// 2 PM Stored Input - Render Input Stored

var twobutton = document.getElementById("twobutton");
var twoText = document.getElementById("twotext");
var twoHour = document.getElementById("twohour");

renderTwoTask();
twoHourColors();

twobutton.addEventListener("click", function (event) {
  event.preventDefault();

  twoText.value.trim();
  localStorage.setItem("twotask", twoText.value);

})

function renderTwoTask() {
  twoText.innerText = localStorage.getItem("twotask");
}

function twoHourColors() {

  if (hours == 14) {
  $("#twotext").addClass("present");
  }
  
  else if (hours < 14) {

  $("#twotext").addClass("future");
  
  }
    
  else {
  $("#twotext").addClass("past");
  }
  
  }

// 3 PM Stored Input - Render Input Stored

var threebutton = document.getElementById("threebutton");
var threeText = document.getElementById("threetext");
var threeHour = document.getElementById("threehour");

renderThreeTask();
threeHourColors();

threebutton.addEventListener("click", function (event) {
  event.preventDefault();

  threeText.value.trim();
  localStorage.setItem("threetask", threeText.value);

})

function renderThreeTask() {
  threeText.innerText = localStorage.getItem("threetask");
}

function threeHourColors() {

  if (hours == 15) {
  $("#threetext").addClass("present");
  }
  
  else if (hours < 15) {

  $("#threetext").addClass("future");
  
  }
    
  else {
  $("#threetext").addClass("past");
  }
  
  }


// 4 PM Stored Input - Render Input Stored

var fourbutton = document.getElementById("fourbutton");
var fourText = document.getElementById("fourtext");
var fourHour = document.getElementById("fourhour");

renderFourTask();
fourHourColors();

fourbutton.addEventListener("click", function (event) {
  event.preventDefault();

  fourText.value.trim();
  localStorage.setItem("fourtask", fourText.value);

})

function renderFourTask() {
  fourText.innerText = localStorage.getItem("fourtask");

}

function fourHourColors() {

  if (hours == 16) {
  $("#fourtext").addClass("present");
  }
  
  else if (hours < 16) {

  $("#fourtext").addClass("future");
  
  }
    
  else {
  $("#fourtext").addClass("past");
  }
  
  }

// 5 PM Stored Input - Render Input Stored
var fivebutton = document.getElementById("fivebutton");
var fiveText = document.getElementById("fivetext");
var fiveHour = document.getElementById("fivehour");

fiveRenderTask();
fiveHourColors();

fivebutton.addEventListener("click", function (event) {
  event.preventDefault();

  fiveText.value.trim();
  localStorage.setItem("fivetask", fiveText.value);

})

function fiveRenderTask() {
  fiveText.innerText = localStorage.getItem("fivetask");
}

function fiveHourColors() {

  if (hours == 17) {
  $("#fivetext").addClass("present");
  }
  
  else if (hours < 17) {

  $("#fivetext").addClass("future");
  
  }
    
  else {
  $("#fivetext").addClass("past");
  }
  
  }