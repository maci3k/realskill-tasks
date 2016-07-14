(function () {
  'use strict';
  
  function randomFunctionGenerator(to, from) {
    return function () {
      Math.floor((Math.random() * (to + 1)) + from);
    };

  }

  module.exports = {
    generateRandomFrom0To59: randomFunctionGenerator(0, 59),
    generateRandomFrom0To11: randomFunctionGenerator(0, 11)

  }

})();
