(function() {
  'use strict';
  /*
  * Strings format
  * 'My name is @{name}' with variables = {name: 'Bob'}
  *
  * to register a set of strings
  *
  * app.i18n.register('en', {
  *   user: {
  *    name: 'My name is @{name}',
  *    logout: 'Logout',
  *    age: {
  *      counter: 'age'
  *      1: 'I am one year old.',
  *      2: 'I am two years old',
  *      n: 'I am @{age} years old'
  *    }
  *   }
  * });
  * 
  */
  var defaultLanguage, currentLanguage;
  var translations = {};
  
  app.i18n.setDefault = function(lang) {
    defaultLanguage = lang;
    currentLanguage = currentLanguage || defaultLanguage;
  };
  app.i18n.setLanguage = function(lang) {
    currentLanguage = lang;
  };
  
  app.i18n.translate = function(str, variables) {
    if (!currentLanguage) {
      console.error('No language defined!!');
      return '';
    }
    var strValue = getParam(translations[currentLanguage], str);
    if (strValue === undefined) {
      console.error('string', str, 'not translated in', currentLanguage);
      return '';
    }
    if (strValue.counter) {
      var counter = variables[strValue.counter];
      if (!counter || typeof counter !== 'number') {
        console.error('Invalid counter for string', str);
        return;
      }
      strValue = strValue[counter] || strValue.n;
    }
    strValue = strValue.replace(/%{(\w+)}/g, function(a, b) {
      return variables[b] || a;
    });
    return strValue;
  };
  
  function getParam(object, path) {
    var splitPath = path.split('.');
    for (var i = 0; i < splitPath.length; i++) {
      object = object[splitPath[i]];
      if (object === undefined) return undefined;
    }
    return object;
  }
  
  app.i18n.register = function(lang, strings) {
    translations[lang] = translations[lang] || {};
    translations[lang] = _.defaults(strings, translations[lang]);
  };
  
})();