(function () {
  'use strict';

  var ERROR_MESSAGES = {
    required: 'This is required',
    match: 'Passwords should match',
    email: 'Invalid e-mail',
    minLength: 'Password too short'
  };


  var registrationForm = document.forms.registrationForm;

  var printSuccess = function() {
    var success = document.createElement('div');
    success.setAttribute('class', 'common-message');
    success.classList.add('success');
    success.textContent = 'Thanks for registration';

    document.getElementsByClassName('form-horizontal')[0].insertBefore(success, document.getElementsByTagName('fieldset')[0]);
  };

  var checkFirstName = function(firstName) {
    return firstName.length > 0;
  };
  var checkLastName = function(lastName) {
    return lastName.length > 0;
  };
  var checkEmail = function(email) {
    if(email.length > 0) {
      var regex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/i;
      if (regex.exec(email)) {
        console.log('poprawny');
        return 'poprawny';
      }
      else {
        console.log('niepoprawny');
        return 'niepoprawny';
      }
    }

    return false;
  };
  var checkPassword = function(password) {
    return password.length > 0;
  };
  var checkPasswordRepeat = function(passwordRepeat) {
    return passwordRepeat.length > 0;
  };
  var checkPasswordMinimalLength = function(password) {
    return password.length >= 5;
  };
  var checkPasswordRepeatMinimalLength = function(passwordRepeat) {
    return passwordRepeat.length >= 5;
  };
  var checkPasswordsMatch = function(password, passwordRepeat) {
    return checkPasswordMinimalLength(password) && checkPasswordRepeatMinimalLength(passwordRepeat) && password ===
        passwordRepeat;
  };
  var checkNames = function(name, nameContainer) {
    var info;
    if(!checkLastName(name.value) || !checkFirstName(name.value)) {
      if (name.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.required;
        name.parentNode.appendChild(info);
        name.parentNode.classList.add('has-error');
        //document.getElementById(nameContainer).firstElementChild.classList.add('error-message');
        document.getElementById(nameContainer).classList.add('has-error');
      }
    } else {
      if (name.parentNode.childElementCount > 1) {
        name.parentNode.removeChild(name.parentNode.lastChild);
        name.parentNode.classList.remove('has-error');
        document.getElementById(nameContainer).firstElementChild.classList.remove('error-message');
        document.getElementById(nameContainer).classList.remove('has-error');
      }
    }
  };

  var checkPasswordsPart1 = function(password, info) {
    if(!checkPassword(password.value)) {
      if(password.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.required;
        password.parentNode.appendChild(info);
        password.parentNode.classList.add('has-error');
        document.getElementById('passwordContainer').firstElementChild.classList.add('error-message');
        document.getElementById('passwordContainer').classList.add('has-error');
      }
    } else {
      if(password.parentNode.childElementCount > 1) {
        password.parentNode.removeChild(password.parentNode.lastChild);
        password.parentNode.classList.remove('has-error');
        document.getElementById('passwordContainer').firstElementChild.classList.remove('error-message');
        document.getElementById('passwordContainer').classList.remove('has-error');
      }
    }

    if(!checkPasswordMinimalLength(password.value)) {
      if(password.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.minLength;
        password.parentNode.appendChild(info);
        password.parentNode.classList.add('has-error');
        document.getElementById('passwordContainer').firstElementChild.classList.add('error-message');
        document.getElementById('passwordContainer').classList.add('has-error');
      }
    } else {
      if(password.parentNode.childElementCount > 1) {
        password.parentNode.removeChild(password.parentNode.lastChild);
        password.parentNode.classList.remove('has-error');
        document.getElementById('passwordContainer').firstElementChild.classList.remove('error-message');
        document.getElementById('passwordContainer').classList.remove('has-error');
      }
    }
  };
  var checkPasswordsPart2 = function(password, passwordRepeat, info, info1) {
    if(!checkPasswordRepeat(passwordRepeat.value)) {
      if(passwordRepeat.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.required;
        passwordRepeat.parentNode.appendChild(info);
        passwordRepeat.parentNode.classList.add('has-error');
        document.getElementById('passwordRepeatContainer').firstElementChild.classList.add('error-message');
        document.getElementById('passwordRepeatContainer').classList.add('has-error');
      }
    } else {
      if(passwordRepeat.parentNode.childElementCount > 1) {
        passwordRepeat.parentNode.removeChild(passwordRepeat.parentNode.lastChild);
        passwordRepeat.parentNode.classList.remove('has-error');
        document.getElementById('passwordRepeatContainer').firstElementChild.classList.remove('error-message');
        document.getElementById('passwordRepeatContainer').classList.remove('has-error');
      }
    }

    if(!checkPasswordMinimalLength(passwordRepeat.value)) {
      if(passwordRepeat.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.minLength;
        passwordRepeat.parentNode.appendChild(info);
        passwordRepeat.parentNode.classList.add('has-error');
        document.getElementById('passwordRepeatContainer').firstElementChild.classList.add('error-message');
        document.getElementById('passwordRepeatContainer').classList.add('has-error');
      }
    } else {
      if(passwordRepeat.parentNode.childElementCount > 1) {
        passwordRepeat.parentNode.removeChild(passwordRepeat.parentNode.lastChild);
        passwordRepeat.parentNode.classList.remove('has-error');
        document.getElementById('passwordRepeatContainer').firstElementChild.classList.remove('error-message');
        document.getElementById('passwordRepeatContainer').classList.remove('has-error');

      }
    }

    if(!checkPasswordsMatch(password.value, passwordRepeat.value)) {
      if(password.parentNode.childElementCount === 1 && passwordRepeat.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.match;
        info1 = document.createElement('span');
        info1.setAttribute('class', 'error-message');
        info1.textContent = ERROR_MESSAGES.match;
        password.parentNode.appendChild(info);
        password.parentNode.classList.add('has-error');
        document.getElementById('passwordContainer').firstElementChild.classList.add('error-message');
        //document.getElementById('passwordContainer').classList.add('has-error');
        passwordRepeat.parentNode.appendChild(info1);
        passwordRepeat.parentNode.classList.add('has-error');
        document.getElementById('passwordRepeatContainer').firstElementChild.classList.add('error-message');
        document.getElementById('passwordRepeatContainer').classList.add('has-error');
      }
    }
  };

  registrationForm.onsubmit = function () {
    var firstName = registrationForm.firstName;
    var lastName = registrationForm.lastName;
    var email = registrationForm.email;
    var password = registrationForm.password;
    var passwordRepeat = registrationForm.passwordRepeat;
    var info, info1;

    console.log('First name: ' + firstName.value + '\n' + 'Last name: ' + lastName.value + '\n' + 'Email: ' +
        email.value + '\n' + 'Password: ' + password.value + '\n' + 'Password repeat: ' + passwordRepeat.value);

    /*if(!checkFirstName(firstName.value)) {
      if(firstName.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.required;
        firstName.parentNode.appendChild(info);
        firstName.parentNode.classList.add('has-error');
        document.getElementById('firstNameContainer').firstElementChild.classList.add('error-message');
      }
    } else {
      if(firstName.parentNode.childElementCount > 1) {
        firstName.parentNode.removeChild(firstName.parentNode.lastChild);
        firstName.parentNode.classList.remove('has-error');
        document.getElementById('firstNameContainer').firstElementChild.classList.remove('error-message');
      }
    }

    if(!checkLastName(lastName.value)) {
      if (lastName.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.required;
        lastName.parentNode.appendChild(info);
        lastName.parentNode.classList.add('has-error');
        document.getElementById('lastNameContainer').firstElementChild.classList.add('error-message');
      }
    } else {
      if (lastName.parentNode.childElementCount > 1) {
        lastName.parentNode.removeChild(lastName.parentNode.lastChild);
        lastName.parentNode.classList.remove('has-error');
        document.getElementById('lastNameContainer').firstElementChild.classList.remove('error-message');
      }
    }*/

    checkNames(firstName, 'firstNameContainer');
    checkNames(lastName, 'lastNameContainer');

    if(!checkEmail(email.value)) {
      if(email.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.required;
        console.log('required');
        email.parentNode.appendChild(info);
        email.parentNode.classList.add('has-error');
        document.getElementById('emailContainer').firstElementChild.classList.add('error-message');
        document.getElementById('emailContainer').classList.add('has-error');
      }
    } else {
      if(email.parentNode.childElementCount > 1) {
        email.parentNode.removeChild(email.parentNode.lastChild);
        email.parentNode.classList.remove('has-error');
        document.getElementById('emailContainer').firstElementChild.classList.remove('error-message');
        document.getElementById('emailContainer').classList.remove('has-error');
        console.log('usuwanie');
      }
    }

    if(checkEmail(email.value) !== 'poprawny') {
      if(email.parentNode.childElementCount === 1) {
        info = document.createElement('span');
        info.setAttribute('class', 'error-message');
        info.textContent = ERROR_MESSAGES.email;
        console.log('required');
        email.parentNode.appendChild(info);
        email.parentNode.classList.add('has-error');
        document.getElementById('emailContainer').firstElementChild.classList.add('error-message');
        document.getElementById('emailContainer').classList.add('has-error');
      }
    }

    checkPasswordsPart1(password, info);
    checkPasswordsPart2(password, passwordRepeat, info, info1);


    printSuccess();

    return false;
  };

  registrationForm.onreset = function () {
    var containers = ['firstNameContainer', 'lastNameContainer', 'emailContainer', 'passwordContainer', 'passwordRepeatContainer'];
    var inputs = [registrationForm.firstName, registrationForm.lastName, registrationForm.email, registrationForm.password, registrationForm.passwordRepeat];

    for(var i=0; i<containers.length; i++) {
      if(inputs[i].parentNode.childElementCount > 1) {
        inputs[i].parentNode.removeChild(inputs[i].parentNode.lastChild);
        inputs[i].parentNode.classList.remove('has-error');
        document.getElementById(containers[i]).firstElementChild.classList.remove('error-message');
        document.getElementById(containers[i]).classList.remove('has-error');
      }
    }

    document.getElementsByClassName('form-horizontal')[0].removeChild(document.getElementsByClassName('common-message')[0]);
    document.getElementsByClassName('form-horizontal')[0].removeChild(document.getElementsByClassName('common-message')[0]);
    document.getElementsByClassName('form-horizontal')[0].removeChild(document.getElementsByClassName('common-message')[0]);
    document.getElementsByClassName('form-horizontal')[0].removeChild(document.getElementsByClassName('common-message')[0]);
    return true;
  };

})();