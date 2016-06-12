var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/landingPage/landingPage', { title: 'HelloWorld', layout: 'pages/layout.hbs' });
});

module.exports = router;
