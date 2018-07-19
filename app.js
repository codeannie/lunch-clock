import { MDCTextField } from '@material/textfield';
// import { MDCFloatingLabel } from '@material/floating-label';
import { MDCRipple } from '@material/ripple';
import flatpickr from 'flatpickr';
import { addMinutes, format } from 'date-fns';
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
  // time_24hr: true,
  minuteIncrement: 1,
  defaultHour: format(new Date(), 'HH'),
  defaultMinute: format(new Date(), 'mm'),
});

// INSTANTIATE FOR MATERIAL COMPONENTS
// TEXT FIELD
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// BUTTON RIPPLE EFFECT
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// FLOATING LABEL EFFECT
// const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

// 30 MINUTES BREAK
$('.mdc-button').on('click', e => {
  // alert('clicked!');
  const breakLength = $(e.currentTarget).data('min');
  console.log('date obj', new Date());
  console.log('button data min->', breakLength);
  console.log('time out', timePicker.selectedDates[0]);
  console.log('time out + mins', addMinutes(timePicker.selectedDates[0], breakLength));
});
