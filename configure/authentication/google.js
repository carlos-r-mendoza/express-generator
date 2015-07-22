'use strict';

//not public information
var google_credentials = require('./google-credentials'); 

module.exports = function(passport, GoogleStrategy) {

	var verify_callback = function (accessToken, refreshToken, profile, done) {
	    return done(null, profile);
	}

	passport.use('google', new GoogleStrategy(google_credentials, verify_callback));

};