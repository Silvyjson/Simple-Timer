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

const numberInput1 = document.getElementById('numberInput1');
const numberInput2 = document.getElementById('numberInput2');
const startButton = document.getElementById('startButton');

function toggleStart() {

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

    console.log(numberInput1.value)
    console.log(numberInput2.value)
}

const toggleRestart = () => {

    toggleStart();

}

const digitInput = (event, inputElement) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }

    if (event.key >= '0' && event.key <= '9' && inputElement.value.replace(/\D/g).length >= 2) {
        event.preventDefault();
    }

    if (numberInput1.value.trim() !== '' && numberInput2.value.trim() !== '') {
        startButton.removeAttribute('disabled');
    } 
    
    else {
        startButton.setAttribute('disabled', 'true');
    }
}

numberInput1.addEventListener('keydown', function (event) {
    digitInput(event, numberInput1);
});

numberInput2.addEventListener('keydown', function (event) {
    digitInput(event, numberInput2);
});
