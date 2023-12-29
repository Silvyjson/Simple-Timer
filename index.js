const listElement = document.getElementById("menu");

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


function toggleMode() {

    const body = document.body;
    body.classList.toggle('dark_mode');

    const statusBarImg1 = document.getElementById("status-bar--img1");
    const statusBarImg2 = document.getElementById("status-bar--img2");

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


const minuteInput = document.getElementById('minuteInput');
const secondInput = document.getElementById('secondInput');
const startButton = document.getElementById('startButton');

function toggleStart() {

    toggleRestart();

    const minutes = parseInt(minuteInput.value) || 0;
    const seconds = parseInt(secondInput.value) || 0;

    const totalSeconds = minutes * 60 + seconds;
    updateTimer(totalSeconds);

    let remainingSeconds = totalSeconds;

    if (totalSeconds > 0) {

        const intervalValue = setInterval(() => {
            remainingSeconds--;

            updateTimer(remainingSeconds);
            if (remainingSeconds === 0) {
                clearInterval(intervalValue);
            }
        }, 1000);
    }
}

const updateTimer = (seconds = 0) => {

    const timeTextElement = document.getElementById("time-text");

    timeTextElement.innerHTML = `${Math.floor(seconds / 60)}:${seconds % 60}`;
};


const toggleRestart = () => {

    const timerStart = document.getElementById("timer--start");
    const timerCircle = document.getElementById("timer-count");

    if (timerStart.style.display === "none") {
        timerStart.style.display = "block";
        timerCircle.style.display = "none";
    } else {
        timerStart.style.display = "none";
        timerCircle.style.display = "block";
    }

}

const digitInput = (event, inputElement) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];


    if (!allowedKeys.includes(event.key) || (event.key !== "Backspace" && inputElement.value.length === 2)) {
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
