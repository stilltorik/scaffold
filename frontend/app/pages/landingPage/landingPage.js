(function() {
  'use strict';
  app.landingPage = {};

  app.landingPage.init = function() {
      document.getElementById('content').innerHTML =
      templates.pages_landingPage_landingPage({distanceInMM: app.utils.convertMinMM(37)});
  };
})();
