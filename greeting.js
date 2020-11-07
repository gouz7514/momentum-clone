const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

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

function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
    /* 이름 수정하는 버튼 만들어보기 */
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
}

init();