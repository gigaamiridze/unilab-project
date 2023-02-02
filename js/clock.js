function realTimeClock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();

  // Add AM and PM system
  var amPm = (hours < 12) ? "AM" : "PM";

  // Convert the hours component to 12-hour format
  hours = (hours > 12) ? hours - 12 : hours;

  // Display the clock
  document.getElementById("clock").innerHTML = hours + ":" + minutes + " " + amPm;
  var time = setTimeout(realTimeClock, 500);
}