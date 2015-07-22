var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET page. */
router.get('/views/:page', function(req, res, next) {
  res.render(req.params.page);
});

//passport.authenticate takes the authentication strategy being implemented
//successRedirect: page to send user if authentication was successful
//failureRedirect: page to send user if authentication failed
//failureFlash: etting the failureFlash option to true instructs Passport to flash an error message using the message given by the strategy's verify callback, if any.
//successFlash: A successFlash option is available which flashes a success message when authentication succeeds.
//To enable flash in Express 3.x & plus (deprecated since Express 2.x), install connect-flash (https://github.com/jaredhanson/connect-flash)
router.post('/login', passport.authenticate('local', { successRedirect: '/views/success',
                                   						failureRedirect: '/views/login' })
);

module.exports = router;
