const minuteInput = document.getElementById("minuteInput");
const secondInput = document.getElementById("secondInput");
const startButton = document.getElementById("startButton");

let intervalValue = null;
let remainingSeconds = 0;

const pauseIcon = document.getElementById("pause");

let circleElement = document.getElementById("circle2");
let totalCircleLength = 0
totalSeconds = 0;

function toggleStart() {
    toggleDelete();

    totalTimer();
    pauseIcon.src = "./image/pause-icon.png";
    playTimer();
}

const totalTimer = () => {
    const minutes = parseInt(minuteInput.value) || 0;
    const seconds = parseInt(secondInput.value) || 0;

    totalSeconds = minutes * 60 + seconds;

    remainingSeconds = totalSeconds;

    updateTimer(totalSeconds);
};

const updateTimer = (seconds = 0) => {
    const timeTextElement = document.getElementById("time-text");

    const percentageLeft = (seconds * 100) / totalSeconds;
    circleElement.style.strokeDashoffset = -totalCircleLength * (percentageLeft / 100)

    timeTextElement.innerHTML = `${Math.floor(seconds / 60)}:${seconds % 60}`;
};

const toggleDelete = () => {
    const timerStart = document.getElementById("timer--start");
    const timerCircle = document.getElementById("timer-count");

    if (timerStart.style.display === "none") {
        timerStart.style.display = "block";
        timerCircle.style.display = "none";
        circleElement.style.strokeDashoffset = -totalCircleLength;
    } else {
        timerStart.style.display = "none";
        timerCircle.style.display = "block";
        totalCircleLength = circleElement.getTotalLength();
    }

    clearInterval(intervalValue);
};

const digitInput = (event, inputElement) => {
    const allowedKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
    ];
    const exceptionKeys = ["Backspace", "ArrowLeft", "ArrowRight"];

    if (
        !allowedKeys.includes(event.key) ||
        (!exceptionKeys.includes(event.key) && inputElement.value.length === 2)
    ) {
        event.preventDefault();
    }
    if (minuteInput.value.trim() !== "" || secondInput.value.trim() !== "") {
        startButton.removeAttribute("disabled");
    } else {
        startButton.setAttribute("disabled", "true");
    }
};

const inputHandler = (inputElement) => {
    inputElement.addEventListener("keydown", function (event) {
        digitInput(event, inputElement);
    });

    inputElement.addEventListener("input", function (event) {
        digitInput(event, inputElement);
    });
};

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
};

const pauseTimer = () => {
    clearInterval(intervalValue);
    intervalValue = null;
};

function togglePlay() {
    if (pauseIcon.src.endsWith("pause-icon.png")) {
        pauseIcon.src = "./image/play-icon.png";
        pauseTimer();
    } else {
        pauseIcon.src = "./image/pause-icon.png";
        playTimer();
    }
}

function toggleRefresh() {
    pauseTimer();

    totalTimer();
    pauseIcon.src = "./image/pause-icon.png";
    playTimer();
}