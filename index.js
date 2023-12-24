const listElement = document.getElementById("menu");

const toggleList = () => {

    if (listElement.style.display === "block") {
        listElement.style.display = "none";
    } else {
        listElement.style.display = "block";
    }
}

const hideNavOnScroll = () => {
    listElement.style.display = "none";
}

document.body.addEventListener('click', function (event) {

    if (!event.target.closest('.menu') && !event.target.closest('.menu-list')) {
        hideNavOnScroll();
    }
});

const dropdownLinks = document.querySelectorAll('.menu-list');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {

        hideNavOnScroll();
    });
});

window.addEventListener('scroll', hideNavOnScroll);

function toggleMode() {

    const body = document.body;
    body.classList.toggle('dark_mode');
    body.classList.toggle('light_mode');

    const statusBarImg1 = document.getElementById("status-bar--img1");
    const statusBarImg2 = document.getElementById("status-bar--img2");

    if (statusBarImg1.style.display === "none") {
        statusBarImg1.style.display = "block";
        statusBarImg2.style.display = "none";
    } else {
        statusBarImg1.style.display = "none";
        statusBarImg2.style.display = "block";
    }
}