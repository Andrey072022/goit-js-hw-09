const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
// const bodyEl = document.querySelector('body');
let idInterval = null;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  document.body.style.background = getRandomHexColor();
};

const handleClickStart = e => {
  e.target.disabled = true;
  stopBtn.disabled = false;

  idInterval = setInterval(changeColor, 1000);
};

const handleClickStop = () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(idInterval);
};

startBtn.addEventListener('click', handleClickStart);
stopBtn.addEventListener('click', handleClickStop);
