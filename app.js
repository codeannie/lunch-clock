'use strict';

import { getTodaysDate, getCurrentTime } from './current-dateTime';

const STATE = {
  breakLength: '',
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

// BUTTON RIPPLE EFFECT
const buttonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));

// FLOATING LABEL EFFECT
const floatingLabel = new mdc.floatingLabel.MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

// SELECT HOUR
const selectHour = new mdc.select.MDCSelect(document.querySelector('.select-hour'));
selectHour.listen('change', () => {
  console.log(`Selected option at index ${selectHour.selectedIndex} with value "${selectHour.value}"`);
});

// SELECT MINUTE
const selectMinute = new mdc.select.MDCSelect(document.querySelector('.select-minute'));
selectMinute.listen('change', () => {
  console.log(`Selected option at index ${selectMinute.selectedIndex} with value "${selectMinute.value}"`);
});

// SELECT PERIOD (AM/PM)
const selectAmPm = new mdc.select.MDCSelect(document.querySelector('.select-period'));
selectAmPm.listen('change', () => {
  console.log(`Selected option at index ${selectAmPm.selectedIndex} with value "${selectAmPm.value}"`);
});

// convert time out input w date fns
/* function getOutTime() {
  const hourOut = $('.hr').value;
  const minOut = $('.min').value;
  const amOrPm = $('.am_pm').value;

  const timeOut = hourOut + ':' + minOut + amOrPm;
  console.log('out time', timeOut);
} */

// add break length to time out time 