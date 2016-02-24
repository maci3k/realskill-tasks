# Registration form validation

## Introduction
This task check following skills
* HTML DOM manipulation in pure JS
* use of design patterns


## Exercise

### Validation rules:
* every field is required
* email must be valid email address
* minimal password length is 5
* password and password repeat must match

### Validation messages:
* field required: 'This is required'
* invalid email: 'Passwords should match'
* minimal password length: 'Invalid e-mail'
* passwords match: 'Password too short'


###  Acceptance criteria
* Validation should be executed after click Submit button
* Reset button should clear all values and removes every validation messages and classes
* Every invalid input container ('.control-group' in parents of input) should have class '.has-error'
* After validation, first child of form should be

    ```
    <div class="common-message success">Thanks for registration</div>
    ```
    if form is valid or
    ```
    <div class="common-message error">The form has not been completed correctly</div>
    ```
    if validation fails


* Next sibling of invalid <input> should be:
    ```
    <span class="error-message">$message</span>
    ```
    , where $message is validation message

* Please modify only app/js/main.js file

Screens from  /docs folder can be useful.

## Setup
You should have installed `npm`, `bower`, `grunt`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start e2e test, run

```
grunt test:e2e
```

Good luck !
