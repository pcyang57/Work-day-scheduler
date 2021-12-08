// Day and time variables
var today = moment().format("dddd MMM DD, YYYY h:mma");
var currentHour = moment().hour();


// Displays time in header that updates each minute
function displayTime() {
var today = moment().format("dddd MMM DD, YYYY h:mma");
$("#currentTime").html(today);
}
//displayTime();
setInterval(displayTime, 1000);

// This function colors rows compared to current time
function setRowColor() {
    setInterval(function(){
        currentHour = moment().format("H");
        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("id"));
            //$(this).children(".description").val(localStorage.getItem(hour)); 
            //console.log(currentHour);
            console.log(hour);

            if (hour < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (hour == currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }, 1000);
}
setRowColor();

// Save user imputs to local storage
function saveEventImput (e){
    e.preventDefault();
    //console.log("Saved!", e.target);
    var eventImput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Store Event
    localStorage.setItem(time, eventImput);
  }
  // On click event
  $('.saveBtn').on('click', saveEventImput);

// Keeps items displayed that are saved in local storage
function displayEvent() {
    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id"));
        $(this).children(".description").val(localStorage.getItem(hour));
  });
}
displayEvent();