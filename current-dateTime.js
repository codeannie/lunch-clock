'use strict';

import format from 'date-fns';

// DATE
export function showDate() {
  const todayDate = format(new Date(), 'ddd, MMM DD, YYYY');

  $('#date').html(todayDate);
}

// CLOCK
export function showTime() {
  const currentTime = format(new Date(), 'hh:mm:ss A');

  $('#clock').html(currentTime);
}
