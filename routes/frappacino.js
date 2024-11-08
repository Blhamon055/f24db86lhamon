var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frappacino', { title: 'Search Results: Frappacino' });
});

module.exports = router;
