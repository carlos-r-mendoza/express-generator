var express = require('express');
var router = express.Router();
var passport = require('passport');
var fs = require('fs');

// messages to send back
var success = { message: 'success' };
var failed = { message: 'failed' };

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

// Authentication Routes

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

// Create Account Routes
  // serves create account pages
router.post('/verify-username', function(req, res, next){

  fs.readFile('./configure/authentication/user-data.json', {encoding: 'utf8'}, function(err, data){
    if (err) throw err;
    var all_users_info = JSON.parse(data);
    // id for new save if necessary
    var id = all_users_info[all_users_info.length-1].id + 1;

    // check to see if username is available
    for(var i = 0; i < all_users_info.length; i++) {
      if (req.body.username === all_users_info[i].username) {
        res.json(failed).end();
        break;
      } else if (i === all_users_info.length-1) {
        req.body.id = id;
        all_users_info.push(req.body)
        saveUser(JSON.stringify(all_users_info, null, 2))
        res.json(success).end();
        break;
      }
    }

  // save user function
  function saveUser(data) {
    fs.writeFile('./configure/authentication/user-data.json', data, {encoding: 'utf8'}, function(err) {
      if (err) throw err;
      console.log('User data updated!');
    });
  }

  });


  // function saveUser(data) {
  //   fs.writeFile('./configure/authentication/user-data.json', data, {encoding: 'utf8'}, function(err) {
  //     if (err) throw err;
  //     console.log('User data updated!');
  //      res.json(success).end();
  //   });
  // }

});


router.get('/create-account/:page', function(req, res, next) {
  console.log("creating account")
  res.render('forms/' + req.params.page);
});

  // verifies user's assets is > 20k
    // if less than 20k, account cannot be opened
router.post('/verify-income', function(req, res, next){

  if(req.body.assets < 20000) {
    res.json({ message: 'Sorry. We cannot approve your account.'})
  }


});



module.exports = router;
