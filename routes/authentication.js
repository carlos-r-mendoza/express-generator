// 'use strict';

// var express = require('express');
// var router = express.Router();
// var passport = require('passport');


// //passport.authenticate takes the authentication strategy being implemented
// //successRedirect: page to send user if authentication was successful
// //failureRedirect: page to send user if authentication failed
// //failureFlash: etting the failureFlash option to true instructs Passport to flash an error message using the message given by the strategy's verify callback, if any.
// //successFlash: A successFlash option is available which flashes a success message when authentication succeeds.
// //To enable flash in Express 3.x & plus (deprecated since Express 2.x), install connect-flash (https://github.com/jaredhanson/connect-flash)
// router.post('/login', passport.authenticate('local', { successRedirect: '/',
//                                    						failureRedirect: '/login-page' })
// );

// router.get('/auth/google', passport.authenticate('google', {
//     scope: [
//         'https://www.googleapis.com/auth/userinfo.profile',
//         'https://www.googleapis.com/auth/userinfo.email'
//     ]
// }));

// router.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login-page' }),
//     function (req, res) {
//     	console.log('inside google')
//         res.redirect('/');
// });

// module.exports = router;