var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/views/:page', function(req, res, next) {
	console.log("GEREREER")
  res.render(req.params.page);
});

/* GET other page. */
router.get('/page', function(req, res, next) {
	console.log("IINN")
  // look for another layout res.render param; look at express documentation
  res.render('posts_feed');

});

module.exports = router;
