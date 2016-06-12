var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
  res.render('404', { title: 'Page not found' });
});

module.exports = router;
