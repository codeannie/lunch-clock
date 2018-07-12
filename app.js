'use strict';

// DIGITAL CLOCK

function showTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  let  am_pm = '';

  let currentTime = hour + ':' + minutes + ':' + seconds;

  // if (hr >= 12) {
  //   hr -= 12;
  //   am_pm = 'PM';
  // } else if ( hr ===  0 ) {
  //   hr = 12;
  //   am_pm = 'AM';
  // }
  // return currentTime;
  $('#clock').html(currentTime);
};

console.log(showTime());

setInterval(showTime, 1000);

