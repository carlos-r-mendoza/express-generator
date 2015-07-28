'use strict';
var Users = require('./user-data');

module.exports = function(passport, LocalStrategy) {

	passport.use(new LocalStrategy(function(username, password, done) {

	    var i;

	    for(i = 0; i < Users.length; i++) {
	      console.log('inside loop', Users[i].username, Users[i].password)
	      if(Users[i].username === username) {
	        if(Users[i].password === password) {
	          // if user authenticated
	          console.log('userssssss')
	          return done(null, Users[i]);
	        } else {

	          // if wrong password
	          return done(null, false);
	        }
	      }
	    }

	    // if wrong username
	    return done(null, false);

	  }
	));


};