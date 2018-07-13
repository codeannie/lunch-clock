'use strict';

const format = require('date-fns/format');

// CLOCK
function showTime() {
  const currentTime = format(new Date(), 'hh:mm:ss A');

  $('#clock').html(currentTime);
}
setInterval(showTime, 1000);

