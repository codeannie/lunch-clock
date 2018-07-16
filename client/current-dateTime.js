'use strict';

import format from 'date-fns/format';

// DATE
export function getTodaysDate() {
  const todayDate = format(new Date(), 'ddd, MMM DD, YYYY');

  $('#date').html(todayDate);
}

// CLOCK
export function getCurrentTime() {
  const currentTime = format(new Date(), 'hh:mm:ss A');

  $('#clock').html(currentTime);
}
