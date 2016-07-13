(function(){
  'use strict';
  Handlebars.registerHelper('i18n',
    function(options){
      return app.i18n.translate(options.hash.string, options.hash);
    }
  );
  
  app.i18n.registerEN();
  app.i18n.registerFR();
  app.i18n.setDefault('en');
  app.i18n.setLanguage('fr');
})();