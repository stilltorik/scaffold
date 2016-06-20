(function() {
    app.landingPage = {};

    app.landingPage.init = function() {
        document.getElementById('content').innerHTML = templates.pages_landingPage_landingPageContent();
    };
})();
