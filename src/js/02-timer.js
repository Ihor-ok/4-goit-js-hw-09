import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const currentDate = Date.now();
let endDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
    if (selectedDates[0].getTime() < currentDate) {
      // alert("Please choose a date in the future");
      Notiflix.Notify.failure('Please choose a date in the future');
   
    };
  
    if (selectedDates[0].getTime() > currentDate) {
      endDate = selectedDates[0].getTime();
      ref.start.removeAttribute("disabled", "");
    };
    
  },
};


const ref = {
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  datetimePicker: document.querySelector('#datetime-picker'),
};

ref.start.addEventListener('click', onStart);

function onStart() {
  ref.start.setAttribute("disabled", "");
  ref.datetimePicker.setAttribute("disabled", "");


  const currentTaime = Date.now();
  let deltaTaime = endDate - currentTaime;
  const timerId = setInterval(() => {
  
    deltaTaime -= 1000;

      if (deltaTaime <= 0) {
        clearInterval(timerId);
        ref.datetimePicker.removeAttribute("disabled", "");
        Notiflix.Notify.success('Hurrah, the goal has been achieved! The timer is stopped!');
      return
    }
    
    updatTimerDisplay(convertMs(deltaTaime));
    
  }, 1000)
};

ref.start.setAttribute("disabled", "");

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function pad(value) {
  return String(value).padStart(2, '0');
};

function updatTimerDisplay({ days, hours, minutes, seconds }) {
  ref.days.textContent = `${days}`;
  ref.hours.textContent = `${hours}`;
  ref.minutes.textContent = `${minutes}`;
  ref.seconds.textContent = `${seconds}`;
 
};