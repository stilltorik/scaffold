(function() {
    'use strict';

    app.register = {};
    app.register.init = function() {
        document.getElementById('content').innerHTML = templates.pages_register_register({});
    };

    app.register.onSubmit = function(event) {
      event.preventDefault();
      var formElements = document.forms.registerForm.elements;
      var username = formElements.username.value;
      var password = formElements.password.value;
      if (!username) {
        alert(app.i18n.translate('register.messages.usernameMissing'));
        return false;
      }
      if (!password) {
        alert(app.i18n.translate('register.messages.passwordMissing'));
        return false;
      }
      app.promise.post('/api/addUser', {
        username: username,
        password: password,
        email: formElements.email.value
      })
      .then(function(success, error) {
        if (error) {
          alert(app.i18n.translate('register.messages.userNotAdded'));
        } else {
          alert(app.i18n.translate('register.messages.userAdded'));
        }
      });
    };
})();
