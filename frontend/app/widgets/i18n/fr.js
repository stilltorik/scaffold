(function() {
  'use strict';
  
  app.i18n.registerFR = function() {
    app.i18n.register('fr', {
    landingPage: {
      title: '%{content} de la page initiale',
      distance: 'distance',
      mm: {
        counter: 'distance',
        1: '1 millimètre',
        n: '%{distance} millimètres'
      }
    },
    autocomplete: {
      title: 'Mon autocomplete'
    }
  });
  };
})();