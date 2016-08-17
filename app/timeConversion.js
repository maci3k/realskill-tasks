(function () {
  'use strict';

  window.TimeUtils = {
    convertTo12HoursTime: function (time) {
      var tab = time.split(':', 3);
      var hour, minute, second;
      var hourAfter;
      var suffix;

      if(tab.length !== 3) {
        throw new Error();
      }

      hour = tab[0];
      minute = tab[1];
      second = tab[2];

      if(hour.length !== 2 || minute.length !==2 || second.length !==2) {
        throw new Error();
      }

      if(hour <= '11') {
        hourAfter = hour;
        suffix = 'A.M.';
      }

      if(hour === '00') {
        hourAfter = '12';
        suffix = 'A.M.';
      }

      if(hour === '12') {
        hourAfter = '12';
        suffix = 'P.M.';
      }

      if(hour > '12') {
        hourAfter = hour % '12';
        suffix = 'P.M.';
      }

      time = hourAfter + ':' + minute + ':' + second + ' ' + suffix;

      return time;
    }
  };
})();
