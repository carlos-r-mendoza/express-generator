'use strict';

//not public information
var google_credentials = require('./google-credentials'); 

module.exports = function(passport, GoogleStrategy) {

	var verify_callback = function (accessToken, refreshToken, profile, done) {
	    console.log('google profile', profile)
	    var user = {
	      googleId: profile.id
	    };
	    return done(null, profile);
	}

	passport.use('google', new GoogleStrategy(google_credentials, verify_callback));

};