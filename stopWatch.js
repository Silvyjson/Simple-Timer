const RefreshClock = document.querySelector(`.refreashBtn`)
const circle = document.getElementById('circleA2');

let playStopwatch = null;
let pausePlayIcon = document.getElementById("pausePlay");

let elapsedSeconds = 0;

const totalStopWatch = () => {
    let min = 0;
    let sec = 0;
    let milli = 0;

    elapsedSeconds = min * 60 + sec + milli / 100;

    updateStopWatch();
};

const playStop = () => {
    playStopwatch = setInterval(() => {
        elapsedSeconds += 0.01;

        updateStopWatch();
    }, 10);
};

const updateStopWatch = () => {
    const stopWatchTextElement = document.getElementById("stopwatch-text");
    stopWatchTextElement.innerHTML = `${Math.floor(elapsedSeconds / 60)}:${Math.floor(elapsedSeconds % 60)}.${(elapsedSeconds * 100).toFixed(0) % 100}`;
};

function togglePlayStopWatch() {

    if (pausePlayIcon.src.endsWith("play-icon.png")) {
        pausePlayIcon.src = "./image/pause-icon.png";
        RefreshClock.classList.add("refreashBtn")
        circle.classList.add('animate');

        playStop();

    } else {
        pausePlayIcon.src = "./image/play-icon.png";
        RefreshClock.classList.remove("refreashBtn")
        circle.classList.remove('animate');
        clearInterval(playStopwatch);
    }
}


function toggleRefreshStopWatch() {
    clearInterval(playStopwatch);
    totalStopWatch();
}