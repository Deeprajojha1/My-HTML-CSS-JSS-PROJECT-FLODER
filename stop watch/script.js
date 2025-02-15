let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let container = document.getElementById("container");
let msec = 00;
let secs = 00;
let mins = 00;
let timerId = null;
let isTimerRunning = false; // Track the state of the timer

startBtn.addEventListener('click', function() {
    if (!isTimerRunning) { // Start the timer only if it's not running
        timerId = setInterval(startTimer, 10);
        isTimerRunning = true;
        container.innerHTML = ""; // Clear previous messages
        let h1 = document.createElement("h1");
        h1.textContent = "Timing Start"; // Show 'Timing Start'
        container.appendChild(h1);
    }
});

stopBtn.addEventListener('click', function() {
    if (isTimerRunning) { // Only stop if it's running
        clearInterval(timerId);
        isTimerRunning = false;
        container.innerHTML = ""; // Clear previous messages
        let h1 = document.createElement("h1");
        h1.textContent = "Timing Stop"; // Show 'Timing Stop'
        container.appendChild(h1);
    }
    // If timer is not running, do nothing
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
    isTimerRunning = false;

    container.innerHTML = ""; // Clear previous messages
    let h1 = document.createElement("h1");
    h1.textContent = "Timing Reset"; // Show 'Timing Reset'
    container.appendChild(h1);
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}