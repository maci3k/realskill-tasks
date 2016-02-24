(function () {
  'use strict';

  var controls = require('../helpers/controls.js');


  function RegistrationForm() {
    this.firstName = controls.getFieldById('firstName');
    this.lastName = controls.getFieldById('lastName');
    this.email = controls.getFieldById('email');
    this.password = controls.getFieldById('password');
    this.passwordRepeat = controls.getFieldById('passwordRepeat');


    this.firstNameContainer = controls.getFieldContainerByInputId('firstName');
    this.lastNameContainer = controls.getFieldContainerByInputId('lastName');
    this.emailContainer = controls.getFieldContainerByInputId('email');
    this.passwordContainer = controls.getFieldContainerByInputId('password');
    this.passwordRepeatContainer = controls.getFieldContainerByInputId('passwordRepeat');


    this.submitButton = controls.getButtonById('submit');
    this.resetButton = controls.getButtonById('reset');
  }

  RegistrationForm.prototype.setInvalidEmail = function () {
    this.email.setValue('ktoswp.pl');
  };

  RegistrationForm.prototype.setTooShortPassword = function () {
    this.password.setValue('bcde');
    this.passwordRepeat.setValue('bcde');
  };

  RegistrationForm.prototype.setDifferentPasswords = function () {
    this.password.setValue('abcdedsfs');
    this.passwordRepeat.setValue('bcsdfsdef');
  };

  RegistrationForm.prototype.fillWithValidValues = function () {
    this.firstName.setValue('John');
    this.lastName.setValue('Kowalski');
    this.email.setValue('john.kowalski@wp.pl');
    this.password.setValue('cat123987');
    this.passwordRepeat.setValue('cat123987');
  };


  RegistrationForm.prototype.submitForm = function () {
    this.submitButton.click();
  };

  RegistrationForm.prototype.resetForm = function () {
    this.resetButton.click();
  };

  module.exports = RegistrationForm;
})();
