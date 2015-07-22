// 'use strict';

// var express = require('express');
// var router = express.Router();


// //passport.authenticate takes the authentication strategy being implemented
// //successRedirect: page to send user if authentication was successful
// //failureRedirect: page to send user if authentication failed
// //failureFlash: etting the failureFlash option to true instructs Passport to flash an error message using the message given by the strategy's verify callback, if any.
// //successFlash: A successFlash option is available which flashes a success message when authentication succeeds.
// //To enable flash in Express 3.x & plus (deprecated since Express 2.x), install connect-flash (https://github.com/jaredhanson/connect-flash)
// router.post('/login', passport.authenticate('local', { successRedirect: '/views/success',
//                                    						failureRedirect: '/views/login' })
// );

// router.get('/auth/google', passport.authenticate('google', {
// 	    scope: [
// 	        'https://www.googleapis.com/auth/userinfo.profile',
// 	        'https://www.googleapis.com/auth/userinfo.email'	    ]
// 	})
// );

// router.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function (req, res) {
//         res.redirect('/');
//     }
// );

// module.exports = router;