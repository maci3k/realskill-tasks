(function () {
  'use strict';


  function addLeadingZeros(number, length) {
    var sNumber = '' + number;
    length -= sNumber.length;
    while (length-- > 0) {
      sNumber = '0' + sNumber;
    }
    return sNumber;
  }

  function randomNumberFunctionGenerator(from, to, length) {
    return function () {
      var number = Math.floor((Math.random() * (to + 1)) + from);
      console.log(number);
      return addLeadingZeros(number, length);
    };
  }

  function randomString(length) {
    var chars = 'abcdefghijklmnopqrstuvqyz123456789';
    var result = '';
    while (length--) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  window.helperUtils = {
    validHours: randomNumberFunctionGenerator(0, 23, 2),
    invalidHours: randomNumberFunctionGenerator(24, 9999, 2),
    validMinutes: randomNumberFunctionGenerator(0, 59, 2),
    invalidMinutes: randomNumberFunctionGenerator(60, 9999, 2),
    validSeconds: randomNumberFunctionGenerator(0, 59, 2),
    invalidSeconds: randomNumberFunctionGenerator(60, 9999, 2),
    randomString: randomString
  };

})();
