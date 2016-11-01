
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/layout.hbs',
    {
      title: 'HelloWorld',
      initFunction: 'app.landingPage.init();',
      loginForm: true,
      layout: false
    }
  );
});

module.exports = router;
