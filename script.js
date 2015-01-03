 var timerRunning = false;
    var choice;
    var count = 0;

    function setTimer() {
      if(timerRunning) {
        choice = confirm("Do you want to reset the timer");
        if(choice == true) {
          count = 0;
        }
      }
      else {
        timerRunning = true;
        startCounting();
      }
    }

    function startCounting() {
      if(timerRunning) {
        count++;
        document.getElementById('timer-here').innerHTML = count;
        if(count == 1200) {
          var ok = confirm("Take a break for 20 seconds and then press OK to restart timer or press CANCEL to stop");
          if(ok) setTimer();
          else stopTimer();
        }
        setTimeout("startCounting()", 1000);
      }
    }

    function changeBg() {
      var color = prompt("New color:");
      document.body.style.backgroundColor = color;
    }

    function changeTextColor() {
      var color = prompt("New color:");
      document.getElementById('timer-here').style.color = color;
    }

    function changeFont() {
      var newSize = prompt("New Size:");
      document.getElementById('timer-here').style.fontSize = newSize + 'em';
    }

    function changeFontFace() {
      var newFamily = prompt("New Font Family:");
      document.getElementById('timer-here').style.fontFamily = newFamily;
    }

    function stopTimer() {
      timerRunning = false;
      count = 0;
      document.getElementById('timer-here').innerHTML = "0";
    }

    function showDate() {
      document.getElementById('date-here').innerHTML = Date();
      setTimeout("hideDate();", 5000);
    }

    function hideDate() {
      document.getElementById('date-here').innerHTML = "";
    }