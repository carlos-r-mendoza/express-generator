var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


var session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//***** Step 1
// auth configuration

// express session
app.use(session({ secret: 'meanstackapp', 
                  resave: false,
                  saveUninitialized: false}));

// passport session
app.use(passport.initialize());
app.use(passport.session());

//telling passport how to attach a user to a session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//telling passport how to get an actual user from the session
passport.deserializeUser(function(id, done) {
    console.log('desearializing', id)
    var user = {username: 'carlos',
                  id: '1', 
                  password: '1234'};  

    done(null, user);
});


//Authentication strategy configuration
// By default, LocalStrategy expects to find credentials in parameters named username and password.
passport.use(new LocalStrategy(function(username, password, done) {

    var i,
        Users = [
                  {username: 'carlos',
                  id: '1', 
                  password: '1234'},
                  {username: 'emmie',
                  id: '2', 
                  password: '1234'},
                  {username: 'nastia',
                  id: '3', 
                  password: '1234'},
                  {username: 'albert',
                  id: '4', 
                  password: '1234'}
              ];

    // var Users = {
    //   carlos: {
    //     id: 1,
    //     password: '1234'
    //   }
    // }

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

passport.use(new GoogleStrategy({ 
  clientID: '215286627926-o0tuifk9s7d5vvju1103f638ua81jgun.apps.googleusercontent.com',
  clientSecret: 't-6fBgiuO-i-RJ8P_SNbIAxX',
  callbackURL: 'https://localhost:3000/auth/google/callback' 
  },
  function (token, tokenSecret, profile, done) {
    console.log('google profile', profile)
    var user = {
      profile: profile,
      id: '5',
      google: {
        id: profile.id
      }
    };
      
    return done(null, user);
   })
);

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
