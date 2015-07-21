var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/views/index', function(req, res, next) {
  res.render('index');
});

router.get('/views/posts-feed', function(req, res, next) {
  res.render('posts-feed');
});


module.exports = router;
