// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//Global variables
var today = dayjs();
var pastHTML = document.getElementsByClassName('past');
var presentHTML = document.getElementsByClassName('present');
var futureHTML = document.getElementsByClassName('future');
//var currentDayDate;
var hoursIndex = 0;
var hours = [
  $('hour-9'),
  $('hour-10'),
  $('hour-11'),
  $('hour-12'),
  $('hour-13'),
  $('hour-14'),
  $('hour-15'),
  $('hour-16'),
  $('hour-17'),
]
var currentTimeHTML = document.getElementsByClassName('time-block');
var currentTime = $('#currentDay').text(today.format('hhA'));
// var rootEl = $(".timeBlock");
var hourEl = $(".timeBlock").childern(".hour").childern(".description");
//console.log(hours);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //Past 24 Hour Clock
  //$('pastHTML').text(today.format('Z'));

  //Present 24 Hour Clock
  $('presentHTML').text(today.format('Z'));
  if (currentTime == hourEl) {
    presentHTML.classList.add("present");
  }
  

  //Future 24 Hour Clock
  //$('futureHTML').text(today.format('Z'));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //localStorage.setItem(JSON.strigify("key")) 
  //localStorage.getItem("Key", JSON.parse("string var"))


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('MMM D, YYYY'));
});
