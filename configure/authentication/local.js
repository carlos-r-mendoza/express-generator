'use strict';
LocalStrategy = require('passport-local').Strategy;
Users = require('./user-data');

module.exports = {

  //Authentication strategy configuration
  //By default, LocalStrategy expects to find credentials in parameters named username and password.
  passport.use(new LocalStrategy(function(username, password, done) {
      console.log('backend auth', username, password)

      for(var i = 0; i < Users.length; i++) {
        console.log('inside loop', Users[i].username, Users[i].password)
        if(Users[i].username === username) {
          if(Users[i].password === password) {
            // if user authenticated
            return done(null, user);
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