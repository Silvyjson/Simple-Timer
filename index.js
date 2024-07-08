const sandTimer = document.querySelector(`.sand-timer`);
const stopWatch = document.querySelector(`.stop-watch`);
const worldClock = document.querySelector(`.worldClock`);

const header = document.getElementById("header");

const sandTimerBackground = document.querySelector(`.sand-timer--icon`);
const stopWatchBackground = document.querySelector(`.stop-watch--icon`);
const clockBackground = document.querySelector(`.clock--icon`);

const body = document.body;
const listElement = document.getElementById("menu");

const toggleList = () => {
  if (listElement.style.display === "block") {
    listElement.style.display = "none";
  } else {
    listElement.style.display = "block";
  }
};

function hideMenuList() {
  listElement.style.display = "none";
}

document.body.addEventListener("click", function (event) {
  if (!event.target.closest(".menu") && !event.target.closest(".menu-list")) {
    hideMenuList();
  }
});

function toggleMode() {
  body.classList.toggle("dark_mode");

  if (body.classList.contains("dark_mode")) {
    listElement.innerHTML = "Switch to light mode";
    localStorage.setItem("currentMode", "darkMode");
  } else {
    listElement.innerHTML = "Switch to dark mode";
    localStorage.setItem("currentMode", "lightMode");
  }

  hideMenuList();
}

document.addEventListener("DOMContentLoaded", function () {
  const storedMode = localStorage.getItem("currentMode");

  if (storedMode === "darkMode") {
    body.classList.toggle("dark_mode");
    listElement.innerHTML = "Switch to light mode";
  } else {
    listElement.innerHTML = "Switch to dark mode";
  }
});

function toggleSandTimer() {
  sandTimerBackground.style.backgroundColor = "#00C2FF3D";
  stopWatchBackground.style.backgroundColor = "";
  clockBackground.style.backgroundColor = "";
  header.innerHTML = "Timer";
  sandTimer.style.display = "block";
  stopWatch.style.display = "none";
  worldClock.style.display = "none";
  localStorage.setItem("currentPage", "sandTimer");
}

function toggleStopwatch() {
  sandTimerBackground.style.backgroundColor = "";
  clockBackground.style.backgroundColor = "";
  stopWatchBackground.style.backgroundColor = "#00C2FF3D";
  header.innerHTML = "Stopwatch";
  stopWatch.style.display = "block";
  sandTimer.style.display = "none";
  worldClock.style.display = "none";
  localStorage.setItem("currentPage", "stopWatch");
}

function toggleClock() {
  sandTimerBackground.style.backgroundColor = "";
  stopWatchBackground.style.backgroundColor = "";
  clockBackground.style.backgroundColor = "#00C2FF3D";
  header.innerHTML = "Clock";
  sandTimer.style.display = "none";
  stopWatch.style.display = "none";
  worldClock.style.display = "block";
  localStorage.setItem("currentPage", "clock");
}

document.addEventListener("DOMContentLoaded", function () {
  const storedMode = localStorage.getItem("currentPage");

  if (storedMode === "sandTimer") {
    toggleSandTimer();
  } else {
    toggleStopwatch();

    if (storedMode === "clock") {
      toggleClock();
    }
  }
});
