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

// BUTTON RIPPLE EFFECT
const buttonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));

// TIME PICKER
const select = new mdc.select.MDCSelect(document.querySelector('.mdc-select'));
select.listen('change', () => {
  console.log(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
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