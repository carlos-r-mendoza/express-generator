var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET page. */
router.get('/views/:page', function(req, res, next) {
  res.render(req.params.page);
});

router.post('/login', passport.authenticate('local'));

module.exports = router;
