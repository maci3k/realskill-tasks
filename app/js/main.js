(function () {
  'use strict';

  var ERROR_MESSAGES = {
    required: 'This is required',
    match: 'Passwords should match',
    email: 'Invalid e-mail',
    'min-length': 'Password too short'
  };


  var registrationForm = document.forms.registrationForm;


  registrationForm.onsubmit = function () {
    console.log(ERROR_MESSAGES.required);
    return false;
  };


  registrationForm.onreset = function () {
    return true;
  };

})();