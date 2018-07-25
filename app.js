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
  alert('click!');
  console.log('empty input?->', timePicker.selectedDates[0]);
  console.log('dateStr event?', timePicker.dateStr);
  // if (timePicker.selectedDates[0] === []) {
  //   alert('no time entered!');
  // } else {

  // }
  $('.breakLength-container').show();
});

// SELECT BREAK LENGTH & RENDER TIME TO CLOCK IN
$('.break-btn').on('click', e => {
  const breakLength = $(e.currentTarget).data('min');
  $('.inTime-container').empty();

  renderTimeIn(breakLength);

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

$(document).ready(() => {
  // HIDE ON LOAD
  $('.instructions-container').hide();
  // $('.error-container').hide();
  $('.breakLength-container').hide();

  // DISPLAY CURRENT DATE & TIME
  getTodaysDate();
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
});
