const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const changeBtn = document.querySelector(".changeBtn");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener('submit', handleSubmit);
}

changeBtn.addEventListener('click', changeName);

function checkName() {
    if (localStorage.getItem(USER_LS) === "") {
        changeBtn.classList.add("none");
    } else {
        changeBtn.classList.remove("none");
    }
}


function changeName() {
    localStorage.setItem(USER_LS, "");
    form.classList.add(SHOWING);
    greeting.innerText = "";
}

function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (!currentUser) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
    setInterval(checkName, 1000);
}

init();