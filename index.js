const minuteInput = document.getElementById('minuteInput');
const secondInput = document.getElementById('secondInput');
const startButton = document.getElementById('startButton');
let intervalValue = null;
let remainingSeconds = 0
let listElement = document.getElementById("menu");

const toggleList = () => {

    if (listElement.style.display === "block") {
        listElement.style.display = "none";
    }
    else {
        listElement.style.display = "block";
    }
}

function hideMenuList() {
    listElement.style.display = "none";
};

document.body.addEventListener('click', function (event) {

    if (!event.target.closest('.menu') && !event.target.closest('.menu-list')) {
        hideMenuList();
    }
});

const body = document.body;
const statusBarImg1 = document.getElementById("status-bar--img1");
const statusBarImg2 = document.getElementById("status-bar--img2");

function toggleMode() {

    body.classList.toggle('dark_mode');

    if (body.classList.contains('dark_mode')) {
        listElement.innerHTML = 'Switch to light mode';
        localStorage.setItem('currentMode', 'darkMode');
    }
    else {
        listElement.innerHTML = 'Switch to dark mode';
        localStorage.setItem('currentMode', 'lightMode');
    }

    if (statusBarImg1.style.display === "none") {
        statusBarImg1.style.display = "block";
        statusBarImg2.style.display = "none";
    }
    else {
        statusBarImg1.style.display = "none";
        statusBarImg2.style.display = "block";
    }

    hideMenuList();
}

document.addEventListener('DOMContentLoaded', function () {
    const storedMode = localStorage.getItem('currentMode');

    if (storedMode === 'darkMode') {
        body.classList.toggle('dark_mode');
        listElement.innerHTML = 'Switch to light mode';
        statusBarImg1.style.display = 'none';
        statusBarImg2.style.display = 'block';
    } else {
        listElement.innerHTML = 'Switch to dark mode';
        statusBarImg1.style.display = 'block';
        statusBarImg2.style.display = 'none';
    }
});

function toggleStart() {

    toggleDelete();

    const minutes = parseInt(minuteInput.value) || 0;
    const seconds = parseInt(secondInput.value) || 0;

    let totalSeconds = minutes * 60 + seconds;

    remainingSeconds = totalSeconds;

    updateTimer(totalSeconds);
    
    playTimer();
}

const updateTimer = (seconds = 0) => {

    const timeTextElement = document.getElementById("time-text");

    timeTextElement.innerHTML = `${Math.floor(seconds / 60)}:${seconds % 60}`;
};


const toggleDelete = () => {

    const timerStart = document.getElementById("timer--start");
    const timerCircle = document.getElementById("timer-count");

    if (timerStart.style.display === "none") {
        timerStart.style.display = "block";
        timerCircle.style.display = "none";
    }
    else {
        timerStart.style.display = "none";
        timerCircle.style.display = "block";
    }

    clearInterval(intervalValue);

}

const digitInput = (event, inputElement) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight'];
    const exceptionKeys = ["Backspace", "ArrowLeft", "ArrowRight"];

    if (!allowedKeys.includes(event.key) || (!exceptionKeys.includes(event.key) && inputElement.value.length === 2)) {
        event.preventDefault();
    }
    if (minuteInput.value.trim() !== '' || secondInput.value.trim() !== '') {
        startButton.removeAttribute('disabled');
    }
    else {
        startButton.setAttribute('disabled', 'true');
    }
}

const inputHandler = (inputElement) => {
    inputElement.addEventListener('keydown', function (event) {
        digitInput(event, inputElement);
    });

    inputElement.addEventListener('input', function (event) {
        digitInput(event, inputElement);
    });
}

inputHandler(minuteInput);
inputHandler(secondInput);

const playTimer = () => {

    if (remainingSeconds > 0) {
        intervalValue = setInterval(() => {
            remainingSeconds--;

            updateTimer(remainingSeconds);
            if (remainingSeconds === 0) {
                pauseTimer();
            }
        }, 1000);
    }
}

const pauseTimer = () => {
    clearInterval(intervalValue);
    intervalValue = null;
};

const pauseIcon = document.getElementById("pause");


function togglePlay() {


    if (pauseIcon.src.endsWith('pause-icon.png')) {
        pauseIcon.src = './image/play-icon.png';
        pauseTimer();
    } else {
        pauseIcon.src = './image/pause-icon.png';
        playTimer();
    }
}

function toggleRefresh() {
    pauseTimer();

    const minutes = parseInt(minuteInput.value) || 0;
    const seconds = parseInt(secondInput.value) || 0;

    const totalSeconds = minutes * 60 + seconds;

    remainingSeconds = totalSeconds;

    updateTimer(totalSeconds);

    if (pauseIcon.src.endsWith('play-icon.png')) {
        pauseIcon.src = './image/pause-icon.png';
        playTimer();
    }
    else{
        pauseIcon.src = './image/pause-icon.png';
        playTimer();
    }
}
