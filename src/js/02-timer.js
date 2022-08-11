// Описан в документации
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/confetti.css");

const myInput = document.getElementById("datetime-picker");
const startBtn = document.querySelector('button[data-start]')



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const deadLineDate = selectedDates[0].getTime()
      console.log(deadLineDate)
    },
  
};

const fp = flatpickr(myInput, options);  // flatpickr

const timer = {
    start() {
        startBtn.disabled = true;

        const startTime = Date.now();
        console.log(startTime)
   

        setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime;
            const {hours, mins, secs} = getTimeComponents(deltaTime)
            console.log(`${hours}:${mins}:${secs}`)

        },1000)
    }
}

// timer.start()

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(Date.now()))



function pad(value) {
    return String(value).padStart(2,'0')
}