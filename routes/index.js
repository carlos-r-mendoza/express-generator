var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET page. */
// router.get('/', function(req, res, next){
// 	res.render('/views/index')
// })

router.get('/views/login', function(req, res, next) {
  res.render('login');
});

router.get('/views/:page', function(req, res, next) {
  if(req.user) {
  	res.render(req.params.page);
  } else {
  	res.render('login')
  }
});

router.get('/authenticatedUserInfo', function(req, res, next){
	res.json(req.user);
})

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                   						failureRedirect: '/login-page' })
);

router.get('/logout', function(req, res, next) {
	req.logout();
	res.status(200).redirect('/');
});

router.get('/auth/google', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login-page' }),
    function (req, res) {
        res.redirect('/');
});



module.exports = router;
