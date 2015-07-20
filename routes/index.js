var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET other page. */
router.get('/page/:id', function(req, res, next) {
  res.render(req.params.id);
});

module.exports = router;
