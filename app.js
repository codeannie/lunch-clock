'use strict';
import { MDCSelect } from '@material/select';
import { MDCFloatingLabel } from '@material/floating-label';
import { MDCRipple } from '@material/ripple';
import { getTodaysDate, getCurrentTime } from './client/current-dateTime';


const STATE = {
  breakLength: '',
  hour: '',
  minute: '',
  period: '',
  timeOut: '',
  timeIn:'',
};

// DISPLAY CURRENT DATE & TIME
getTodaysDate();
setInterval(getCurrentTime, 1000);

// BUTTON - save minutes;
$('mdc-button').on('click', (min) => {
  alert('break button clicked');
  STATE.breakLength = min.value;
  console.log('break length? ->', STATE.breakLength);
})

// INSTANTIATE FOR MATERIAL COMPONENTS 
// BUTTON RIPPLE EFFECT
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// FLOATING LABEL EFFECT
const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

// SELECT HOUR
const selectHour = new MDCSelect(document.querySelector('.select-hour'));
selectHour.listen('change', () => {
  STATE.hour = `${selectHour.value}`;
  console.log('STATE - hour:', STATE.hour);
  console.log(`Selected option at index ${selectHour.selectedIndex} with value "${selectHour.value}"`);
});

// SELECT MINUTE
const selectMinute = new MDCSelect(document.querySelector('.select-minute'));
selectMinute.listen('change', () => {
  STATE.minute = `${selectMinute.value}`;
  console.log('STATE - minute:', STATE.minute);
  console.log(`Selected option at index ${selectMinute.selectedIndex} with value "${selectMinute.value}"`);
});

// SELECT PERIOD (AM/PM)
const selectAmPm = new MDCSelect(document.querySelector('.select-period'));
selectAmPm.listen('change', () => {
  STATE.period = `${selectAmPm.value}`;
  console.log('STATE - period:', STATE.period);
  console.log(`Selected option at index ${selectAmPm.selectedIndex} with value "${selectAmPm.value}"`);
});

// convert time out input w date fns
// function getOutTime() {
//   const hourOut = selectHours.listen('change', () => selectHour.value);
//   const minOut = selectMinute.value;
//   const period = selectAmPm.value;
//   const timeOut = hourOut + ':' + minOut + period;
//   console.log('out time', timeOut);
// };
// getOutTime();

// add break length to time out time 