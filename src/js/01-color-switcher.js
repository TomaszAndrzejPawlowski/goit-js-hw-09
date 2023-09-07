const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const websiteBody = document.querySelector('body');
let timerId;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.disabled = true;
startBtn.addEventListener('click', () => {
  websiteBody.style.backgroundColor = `${getRandomHexColor()}`;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    websiteBody.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
