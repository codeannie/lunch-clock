'use strict';
import { MDCSelect } from '@material/select';
// const MDCSelect = require('@material/select');
const format = require('date-fns/format');

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
const select = new MDCSelect(document.querySelector('.mdc-select'));
select.listen('change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});