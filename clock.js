const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock, 1000);

function updateCurrentTime() {
    const currentTimeElement = document.getElementById('clockTime');
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();

    currentTimeElement.textContent = formattedTime;
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();



function updateCurrentDate() {
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date();
    
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    currentDateElement.textContent = formattedDate;
}

setInterval(updateCurrentDate, 1000);
updateCurrentDate();