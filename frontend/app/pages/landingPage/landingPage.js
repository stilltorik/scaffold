(function() {
    app.landingPage = {};

    app.landingPage.init = function() {
        document.getElementById('content').innerHTML = templates.widgets_autocomplete_autocomplete();
    };
})();
