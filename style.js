const sandTimer = document.querySelector(`.sand-timer`);
const stopWatch = document.querySelector(`.stop-watch`);
const header = document.getElementById('header');

const sandTimerBackground = document.querySelector(`.sand-timer--icon`);
const stopWatchBackground = document.querySelector(`.stop-watch--icon`);
const RefreshClock = document.querySelector(`.refreashBtn`)

let playStopwatch = null;
let pausePlayIcon = document.getElementById("pausePlay");

let remainingSecond = 0;
let totalSecond = 0;

function toggleSandTimer() {
    sandTimerBackground.style.backgroundColor = '#00C2FF3D';
    stopWatchBackground.style.backgroundColor = '';
    header.innerHTML = "Timer";
    sandTimer.style.display = "block";
    stopWatch.style.display = "none";
    localStorage.setItem("currentPage", "sandTimer");
}

function toggleStopwatch() {
    sandTimerBackground.style.backgroundColor = '';
    stopWatchBackground.style.backgroundColor = '#00C2FF3D';
    header.innerHTML = "Stopwatch";
    sandTimer.style.display = "none";
    stopWatch.style.display = "block";
    localStorage.setItem("currentPage", "stopWatch");
}


document.addEventListener("DOMContentLoaded", function () {
    const storedMode = localStorage.getItem("currentPage");

    if (storedMode === "sandTimer") {
        toggleSandTimer();
    } else {
        toggleStopwatch();
    }
});

const totalStopWatch = () => {
    let min = 0;
    let sec = 0;
    let milli = 0;

    totalSecond = min * 60 + sec + milli / 100;

    remainingSecond = totalSecond;

    updateStopWatch(totalSecond);
};

const playStop = () => {
    playStopwatch = setInterval(() => {
        remainingSecond += 0.01;

        updateStopWatch();
    }, 10);
};

const updateStopWatch = () => {
    const stopWatchTextElement = document.getElementById("stopwatch-text");
    stopWatchTextElement.innerHTML = `${Math.floor(remainingSecond / 60)}:${Math.floor(remainingSecond % 60)}.${(remainingSecond * 100).toFixed(0) % 100}`;
};

function togglePlayStopWatch() {

    if (pausePlayIcon.src.endsWith("play-icon.png")) {
        pausePlayIcon.src = "./image/pause-icon.png";
        RefreshClock.classList.add("refreashBtn")
        playStop();

    } else {
        pausePlayIcon.src = "./image/play-icon.png";
        RefreshClock.classList.remove("refreashBtn")
        clearInterval(playStopwatch);
    }
}


function toggleRefreshStopWatch() {
    clearInterval(playStopwatch);
    totalStopWatch();
}