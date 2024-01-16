const delay = 1000;
let timerId = null;

const ref = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};


ref.buttonStart.addEventListener('click', onStart);
ref.buttonStop.addEventListener('click', onStop);

function onStart() {

    timerId = setInterval(changeBackgroundColor, delay);
    ref.buttonStart.setAttribute("disabled", "");

};

function onStop() {

    clearInterval(timerId);
    ref.buttonStart.removeAttribute("disabled", "");

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeBackgroundColor() {
    ref.body.style.backgroundColor = getRandomHexColor();
};