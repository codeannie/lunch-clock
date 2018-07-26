'use strict';

import format from 'date-fns/format';

// DATE
export function getTodaysDate() {
  const todayDate = format(new Date(), 'ddd, MMM DD, YYYY');

  // $('#date').html(todayDate);
  $('#date').html(`<p class="date">${todayDate}</p>`);
}

// CLOCK
export function getCurrentTime() {
  const currentTime = format(new Date(), 'hh:mm:ss A');

  // $('#clock').html(currentTime);
  $('#clock').html(`<p class="clock">${currentTime}</p>`);
}
