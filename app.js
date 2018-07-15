'use strict';
const format = require('date-fns/format');

const STATE = {
  breakLength: '',
  timeOut: '',
  timeIn:'',
};

// DATE
function showDate() {
  const todayDate = format(new Date(), 'ddd, MMM DD, YYYY');

  $('#date').html(todayDate);
}

// CLOCK
function showTime() {
  const currentTime = format(new Date(), 'hh:mm:ss A');

  $('#clock').html(currentTime);
}

showDate();
setInterval(showTime, 1000);

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