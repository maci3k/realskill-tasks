var RegistrationForm = require('./fragments/pageFragments/registrationForm.fragment.js');
var registrationForm = new RegistrationForm();


var CONTAINER_ERROR_CLASS = 'has-error';

var EXPECTED_VALIDATION_MESSAGES = {
  required: 'This is required',
  email: 'Invalid e-mail',
  passwordMatch: 'Passwords should match',
  tooShort: 'Password too short'
};

var COMMON_SUCCESS_MESSAGE = 'Thanks for registration';

describe('Registration form', function () {
  'use strict';

  beforeAll(function () {
    browser.ignoreSynchronization = true;
    browser.get('/index.html');
  });

  describe('On startup', function () {
    it('first name should be empty', function () {
      expect(registrationForm.firstName.getValue()).toBe('');
    });

    it('last name should be empty', function () {
      expect(registrationForm.lastName.getValue()).toBe('');
    });

    it('email should be empty', function () {
      expect(registrationForm.email.getValue()).toBe('');
    });

    it('password should be empty', function () {
      expect(registrationForm.password.getValue()).toBe('');
    });

    it('password repeat should be empty', function () {
      expect(registrationForm.passwordRepeat.getValue()).toBe('');
    });
  });


  describe('validation', function () {

    describe('After submit empty form fields should be highlighted', function () {
      beforeAll(function () {
        registrationForm.resetForm();
        browser.driver.sleep(10);
        registrationForm.submitForm();
        browser.driver.sleep(10);
      });

      it('First name should be highlighted', function () {
        expect(registrationForm.firstNameContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('First name validation message should be showed', function () {
        expect(registrationForm.firstNameContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.required);
      });

      it('Last name should be highlighted', function () {
        expect(registrationForm.lastNameContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Last name validation message should be showed', function () {
        expect(registrationForm.lastNameContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.required);
      });

      it('Email should be highlighted', function () {
        expect(registrationForm.emailContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Email validation message should be showed', function () {
        expect(registrationForm.emailContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.required);
      });

      it('Password should be highlighted', function () {
        expect(registrationForm.passwordContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password validation message should be showed', function () {
        expect(registrationForm.passwordContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.required);
      });

      it('Password repeat should be highlighted', function () {
        expect(registrationForm.passwordRepeatContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password repeat validation message should be showed', function () {
        expect(registrationForm.passwordRepeatContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.required);
      });
    });


    describe('After submit valid form fields should not be highlighted', function () {
      beforeAll(function () {
        registrationForm.resetForm();
        browser.driver.sleep(10);
        registrationForm.submitForm();
        browser.driver.sleep(10);
        registrationForm.fillWithValidValues();
        browser.driver.sleep(10);
        registrationForm.submitForm();
        browser.driver.sleep(10);
      });


      it('First name should not be highlighted', function () {
        expect(registrationForm.firstNameContainer.getClasses()).not.toContain(CONTAINER_ERROR_CLASS);
      });

      it('First name validation message should not be showed', function () {
        expect(registrationForm.firstNameContainer.getErrorMessageElement().isPresent()).toBeFalsy();
      });

      it('Last name should not be highlighted', function () {
        expect(registrationForm.lastNameContainer.getClasses()).not.toContain(CONTAINER_ERROR_CLASS);
      });

      it('Last name validation message should not be showed', function () {
        expect(registrationForm.lastNameContainer.getErrorMessageElement().isPresent()).toBeFalsy();
      });

      it('Email should not be highlighted', function () {
        expect(registrationForm.emailContainer.getClasses()).not.toContain(CONTAINER_ERROR_CLASS);
      });


      it('Email validation message should not be showed', function () {
        expect(registrationForm.emailContainer.getErrorMessageElement().isPresent()).toBeFalsy();
      });

      it('Password should not be highlighted', function () {
        expect(registrationForm.passwordContainer.getClasses()).not.toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password validation message should not be showed', function () {
        expect(registrationForm.passwordContainer.getErrorMessageElement().isPresent()).toBeFalsy();
      });

      it('Password repeat should not be highlighted', function () {
        expect(registrationForm.passwordRepeatContainer.getClasses()).not.toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password repeat validation message should not be showed', function () {
        expect(registrationForm.passwordRepeatContainer.getErrorMessageElement().isPresent()).toBeFalsy();
      });

      it('Success dialog should be showed', function () {
        var messageElement = element(by.css('form .common-message.success'));
        expect(messageElement.isPresent()).toBe(true);
        expect(messageElement.getText()).toEqual(COMMON_SUCCESS_MESSAGE);
      });

      it('Success dialog should be placed before form inputs', function () {
        var fieldsetElement = element(by.css('form .common-message.success+fieldset'));
        expect(fieldsetElement.isPresent()).toBe(true);
      });
    });

    describe('After submit form with invalid email', function () {
      beforeAll(function () {
        registrationForm.setInvalidEmail();
        registrationForm.submitForm();
        browser.driver.sleep(10);
      });

      it('Email should be highlighted', function () {
        expect(registrationForm.emailContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Email validation message should be showed', function () {
        expect(registrationForm.emailContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.email);
      });
    });

    describe('After submit form with different passwords', function () {
      beforeAll(function () {
        registrationForm.setDifferentPasswords();
        registrationForm.submitForm();
        browser.driver.sleep(10);
      });

      it('Password should not be highlighted', function () {
        expect(registrationForm.passwordContainer.getClasses()).not.toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password repeat should be highlighted', function () {
        expect(registrationForm.passwordRepeatContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password repeat validation message should be showed', function () {
        expect(registrationForm.passwordRepeatContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.passwordMatch);
      });
    });

    describe('After submit form with too short password', function () {
      beforeAll(function () {
        registrationForm.setTooShortPassword();
        registrationForm.submitForm();
        browser.driver.sleep(10);
      });

      it('Password should be highlighted', function () {
        expect(registrationForm.passwordContainer.getClasses()).toContain(CONTAINER_ERROR_CLASS);
      });

      it('Password repeat validation message should be showed', function () {
        expect(registrationForm.passwordContainer.getErrorMessageElement().getText()).toEqual(EXPECTED_VALIDATION_MESSAGES.tooShort);
      });

    });
  });

  describe('After reset', function () {
    beforeAll(function () {
      registrationForm.resetForm();
      browser.driver.sleep(10);
      registrationForm.submitForm();
      browser.driver.sleep(10);
      registrationForm.resetForm();
      browser.driver.sleep(10);
    });

    it('Common message should be not present', function () {
      var messageElement = element(by.css('form .common-message'));
      expect(messageElement.isPresent()).toBeFalsy();
    });
  });
});