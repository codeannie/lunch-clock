'use strict';

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

