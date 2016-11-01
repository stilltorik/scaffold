(function() {
  'use strict';

  app.i18n.registerEN = function() {
    app.i18n.register('en', {
    landingPage: {
      title: 'Landing page %{content}',
      distance: 'distance',
      mm: {
        counter: 'distance',
        1: '1 millimiter',
        n: '%{distance} millimiters'
      }
    },
    register: {
      username: 'Username',
      password: 'Password',
      email: 'Email address',
      submitButton: 'Create user',
      messages: {
        usernameMissing: 'The username is required',
        passwordMissing: 'The password is required',
        userAdded: 'The user was successfully created!',
        userNotAdded:  'Something wrong happened during user creation.'
      }
    },
    loginForm: {
      greetings: 'Hi %{username}!',
      newUserLink: 'Create user',
      username: 'Username',
      password: 'Password',
      login: 'Login',
      logout: 'Logout',
      messages: {
        usernameMissing: 'The username is required',
        passwordMissing: 'The password is required',
        loginFailed: 'Wrong credentials',
        logoutFailed: 'Logout failed'
      }
    }
  });
  };
})();
