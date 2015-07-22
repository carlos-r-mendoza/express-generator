// 'use strict';

// var session = require('express-session'),
//     passport = require('passport');

// module.exports = function (app) {

// 	// express session
// 	app.use(session({ secret: 'meanstackapp', 
// 	                  resave: false,
// 	                  saveUninitialized: false}));

// 	// passport session
// 	app.use(passport.initialize());
// 	app.use(passport.session());

// 	//telling passport how to attach a user to a session
// 	passport.serializeUser(function(user, done) {
// 	  done(null, user.id);
// 	});

// 	// telling passport how to get an actual user from the session
// 	passport.deserializeUser(function(id, done) {
// 	    done(err, user);
// 	});

// };