// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//Global variables
var today = dayjs();
// var pastHTML = document.querySelector('past');
// var presentHTML = document.querySelector('present');
// var futureHTML = document.querySelector('future');
// var timeBlock = document.querySelector('.time-block');
//var currentDayDate;
var hoursIndex = 0;
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentTimeHTML = $('.time-block');
//var currentTime = $('#currentDay').text(today.format('hhA'));
var currentHour = parseInt(dayjs().format('H'));
//var rootEl = $(".time-block");
var hourEl = currentTimeHTML.children(".hour").children(".description").text;
// console.log(rootEl);
console.log(hours);
console.log(currentTimeHTML);

$(function () {
  console.log("We're in the function!!");
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  $('.saveBtn').on('click', function() { 
    console.log("We're in save button!!");
    var userInput = $(this).siblings().eq(1).val();
    var parentSaveBtn = $(".saveBtn").parent().attr("id");
    console.log(userInput);
    console.log(parentSaveBtn);

    //console.log($(event.target).siblings().eq(1).val()); //this is the value in the setItems()
    localStorage.setItem(parentSaveBtn, userInput);
  });

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  //for loop for current time
  for(let i = 0; i < currentTimeHTML.length; i++) {
    //If current hour is present, make hour present
    if (currentHour === hours[i]) {
      $(currentTimeHTML[i]).addClass("present");
    } else if(currentHour > hours[i]) {
      $(currentTimeHTML[i]).addClass("past");
    }else {
      //future condition
      $(currentTimeHTML[i]).addClass("future");
    }
  }


  //Future 24 Hour Clock
  //$('futureHTML').text(today.format('Z'));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd MMM D, YYYY'));
});
