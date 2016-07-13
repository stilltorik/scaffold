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
    autocomplete: {
      title: 'My autocomplete'
    }
  });
  };
})();