import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/confetti.css");

const myInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

const DELAY = 1000;


let intervalId = null;
let initDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    initDate = selectedDates[0].getTime()
    if (Date.now() > initDate) {
        Notiflix.Notify.failure("Please choose a date in the future")
        return;
        }
        startBtn.disabled = false
    },
};

flatpickr(myInput, options); 

const timer = {
    start() {
startBtn.disabled = true;
    intervalId = setInterval(() => {
    const deadlineDate = initDate - Date.now();
        
    if (deadlineDate <= 0) {
      clearInterval(intervalId);
        Notiflix.Notify.success(`https://youtu.be/dQw4w9WgXcQ`);
        return;
        };
        
      const timerInfo = convertMs(deadlineDate);
    daysRef.textContent = timerInfo.days;
    hoursRef.textContent = timerInfo.hours;
    minutesRef.textContent = timerInfo.minutes;
    secondsRef.textContent = timerInfo.seconds;
  }, DELAY);
    }
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function addLeadingZero (value) {
    return String(value).padStart(2, '0');
}
startBtn.addEventListener('click', timer.start);

