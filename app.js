// import { MDCSelect } from '@material/select';
// import { MDCFloatingLabel } from '@material/floating-label';
import { MDCRipple } from '@material/ripple';
import flatpickr from 'flatpickr';
import { addMinutes, format, parse, setHours, setMinutes, min } from 'date-fns';
import { getTodaysDate, getCurrentTime } from './client/current-dateTime';

const STATE = {
  breakLength: '',
  hour: '',
  minute: '',
  period: '',
  timeOut: '',
  timeIn: '',
};

// DISPLAY CURRENT DATE & TIME
getTodaysDate();
setInterval(getCurrentTime, 1000);

const timePicker = flatpickr('#flatpickr', {
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: true,
  minuteIncrement: 1,
  defaultHour: format(new Date(), 'HH'),
  defaultMinute: format(new Date(), 'mm'),
});

// const enteredTime = $('#flatpickr').attr('data-id').value;
// const enteredTime = $('#flatpickr').val();
// console.log('flatpickr value?', timePicker.value());

// INSTANTIATE FOR MATERIAL COMPONENTS
// BUTTON RIPPLE EFFECT
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// FLOATING LABEL EFFECT
// const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

// GET LUNCH OUT TIME
// function getClockOutTime() {
//   const timeOut = `${STATE.hour}:${STATE.minute}`;
//   STATE.timeOut = format(timeOut);
//   console.log('STATE - time out? ->', STATE.timeOut);
// }

// 30 MINUTES BREAK
$('.mdc-button').on('click', () => {
  // getClockOutTime();
  alert('clicked!');
  console.log('date obj', new Date());
  console.log('timepicker value', timePicker.selectedDates[0]);
  console.log('timepicker value + 30', addMinutes(timePicker.selectedDates[0], 30));
  // console.log('flatpickr value?', timePicker.value());
  // STATE.breakLength = $(this).attr('data-min');
  STATE.breakLength = $(this).value;
  // console.log('break length button ->', `${this}`);
  // console.log('break length? ->', STATE.breakLength);
});

// convert time out input w date fns

// add break length to time out time
