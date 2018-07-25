import { MDCTextField } from '@material/textfield';
import { MDCFloatingLabel } from '@material/floating-label';
import { MDCRipple } from '@material/ripple';
import flatpickr from 'flatpickr';
import { addMinutes, format } from 'date-fns';
import { getTodaysDate, getCurrentTime } from './client/current-dateTime';

const STATE = {
  timeInput: '',
};

// TIME INPUT
const timePicker = flatpickr('#flatpickr', {
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  minuteIncrement: 1,
  defaultHour: format(new Date(), 'HH'),
  defaultMinute: format(new Date(), 'mm'),
  onValueUpdate: selectedDates => (STATE.timeInput = format(selectedDates[0])),
  onChange: selectedDates => (STATE.timeInput = format(selectedDates[0])),
});

//  INSTANTIATE MATERIAL DESIGN COMPONENTS
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

// OK BUTTON - move to next screen
$('.timePickr-btn').on('click', () => {
  // $('.timeOut-container').hide();
  if (timePicker.selectedDates[0] === undefined) {
    renderErrorMsg();
  } else {
    $('.err-msg').hide();
    $('.breakLength-container').empty();
    renderBreakBtns();
  }
});

function renderErrorMsg() {
  $('.timeOut-container').append(
    `<div class="err-msg"> <p> Please enter a time </p>
    </div>`
  );
}

// SELECT BREAK LENGTH & RENDER TIME TO CLOCK IN
$('.break-btn').on('click', e => {
  const breakLength = $(e.currentTarget).data('min');
  $('.inTime-container').empty();
  renderTimeIn(breakLength);

  // console.log('empty input?->', timePicker.selectedDates[0]);
  // console.log('dateStr event?', timePicker.dateStr);
  // console.log('STATE ->', STATE.timeInput);
  // console.log('date obj', new Date());
  // console.log('button data min->', breakLength);
  // console.log('time out', timePicker.selectedDates[0]);
  // console.log('time out + mins', addMinutes(timePicker.selectedDates[0], breakLength));
});

function renderTimeIn(breakLength) {
  const calculatedTimeIn = addMinutes(timePicker.selectedDates[0], breakLength);
  const displayTime = format(calculatedTimeIn, 'hh:mm A');

  $('.inTime-container').append(
    `<h2> Time to clock in for Lunch </h2>
    <div id="#timeIn"> ${displayTime} </div>`
  );
}

function renderBreakBtns() {
  $('.breakLength-container').append(
    `<h2> How long is your lunch break?
    <div class="button-container">
    <button class="mdc-button mdc-button--outlined break-btn" data-min="30"> 30 mins </button>
    <button class="mdc-button mdc-button--outlined break-btn" data-min="45"> 45 mins </button>
    <button class="mdc-button mdc-button--outlined break-btn" data-min="60"> 60 mins </button>
    </div>`
  );
}

$(document).ready(() => {
  // HIDE ON LOAD
  $('.instructions-container').hide();
  $('.error-container').hide();
  // $('.breakLength-container').hide();

  // DISPLAY CURRENT DATE & TIME
  getTodaysDate();
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
});
