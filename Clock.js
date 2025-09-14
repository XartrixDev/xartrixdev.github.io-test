function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var day = date.getDay();
  var month = date.getMonth();
  var year = date.getYear();
  var dayDate = date.getDate();
  var session = "AM";

  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + "::" + m + "::" + s + ":: " + session;
  document.getElementById("MyClockDisplay").textContent = date + "\n\n" + "This website will be ready on " + new Date(20-05-2025);
//  document.getElementById("MyClockDisplay").textContent = date;

  setTimeout(showTime, 1000);
}

showTime();