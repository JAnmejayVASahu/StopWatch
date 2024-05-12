let timer; // To hold the interval
let running = false;
let time = 0; // Current elapsed time
let goalTime = 0; // User-defined goal in milliseconds
let laps = 0; // Number of laps completed

// Format the time in HH:MM:SS format
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to parse time in HH:MM:SS format to milliseconds
function parseTime(input) {
    let [hours, minutes, seconds] = input.split(":").map(Number);
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
}

// Function to start or stop the stopwatch
function startStop() {
    if (!running) {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStop").textContent = "Stop";
        running = true;
    } else {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
        running = false;
    }
}

// Function to update the display with elapsed time
function updateDisplay() {
    time += 1000;
    document.getElementById("display").textContent = formatTime(time);
    checkGoal(); // Check if goal is achieved
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    running = false;
    time = 0;
    laps = 0;
}

// Function to handle lap timing
function lapTime() {
    let lapsDisplay = document.getElementById("laps");
    let lapTime = formatTime(time);
    let lap = document.createElement('div');
    lap.textContent = lapTime;
    lapsDisplay.prepend(lap);
    laps++;
    checkGoal(); // Check if goal is achieved after each lap
}

// Function to check if goal is achieved
function checkGoal() {
    if (time >= goalTime) {
        clearInterval(timer);
        alert("👏 Goal🎉achieved.🥳Celebration begins now!.🎉");
        resetStopwatch();
    }
}

// Event listener for setting the goal
document.getElementById("setGoal").addEventListener("click", function() {
    let goalInput = document.getElementById("goalInput").value;
    goalTime = parseTime(goalInput);
    alert("Goal set to " + goalInput);
});

// Event listeners
document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("lapReset").addEventListener("click", function() {
    if (running) {
        lapTime();
    } else {
        resetStopwatch();
    }
});


// for button animation
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.animated-button');
    buttons.forEach(function(button) {
      button.addEventListener('mouseenter', function() {
        this.classList.add('hover');
      });
      button.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
      });
    });
});

  