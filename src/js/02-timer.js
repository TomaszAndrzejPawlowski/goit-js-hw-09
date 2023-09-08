import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix, { Notify } from 'notiflix';

const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
let insertedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chosenDate = selectedDates[0];
    if (chosenDate < new Date()) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      insertedDate = chosenDate;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => value.toString().padStart(2, '0');

let timerId = 0;

const startTimer = event => {
  timerId = setInterval(() => {
    const diff = insertedDate - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
      return;
    }
    daysTimer.textContent = addLeadingZero(convertMs(diff).days);
    hoursTimer.textContent = addLeadingZero(convertMs(diff).hours);
    minutesTimer.textContent = addLeadingZero(convertMs(diff).minutes);
    secondsTimer.textContent = addLeadingZero(convertMs(diff).seconds);
  }, 1000);
};

startBtn.addEventListener('click', startTimer);
