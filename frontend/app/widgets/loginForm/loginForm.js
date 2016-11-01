(function() {
  'use strict';
  app.loginForm = {};

  app.loginForm.init = function() {
    app.promise.get('/api/getCredentials')
    .then(function(error, response) {
      if (error) {
        document.getElementById('loginFormContainer').innerHTML =
          templates.widgets_loginForm_loginForm();
      } else {
        document.getElementById('loginFormContainer').innerHTML =
          templates.widgets_loginForm_loginForm({
            username: response.user,
            loggedIn: 'true'
          });
      }
    });
  };

  app.loginForm.login = function(event) {
    event.preventDefault();
    var formElements = document.forms.loginForm.elements;
    var username = formElements.username.value;
    var password = formElements.password.value;
    if (!username) {
      alert(app.i18n.translate('loginForm.messages.usernameMissing'));
      return false;
    }
    if (!password) {
      alert(app.i18n.translate('loginForm.messages.passwordMissing'));
      return false;
    }
    app.promise.post('/api/login', {
      username: username,
      password: password
    })
    .then(function(error, response) {
      if (error) {
        alert(app.i18n.translate('loginForm.messages.loginFailed'));
      } else {
        app.loginForm.init();
      }
    });
  };

  app.loginForm.logout = function() {
    app.promise.post('/api/logout', {})
    .then(function(error, response) {
      if (error) {
        alert(app.i18n.translate('loginForm.messages.logoutFailed'));
      } else {
        app.loginForm.init();
      }
    });
  };
})();
