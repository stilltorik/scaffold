var express = require('express');
var router = express.Router();

/* GET add user page. */
router.get('/', function(req, res, next) {
  res.render('pages/layout.hbs',
    {
      title: 'Register',
      initFunction: 'app.register.init();',
      layout: false
    }
  );
});

module.exports = router;
