// 'use strict';



// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// module.exports = function(app) {

// 	var googleCredentials = {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: process.env.CALLBACK_URL
//     }	

// 	var verifyCallback = function (accessToken, refreshToken, profile, done) {

//         UserModel.findOne({ 'google.id': profile.id }, function (err, user) {

//             if (err) return done(err);

//             if (user) {
//                 done(null, user);
//             } else {
//                 UserModel.create({
//                     google: {
//                         id: profile.id
//                     }
//                 }).then(function (user) {
//                     done(null, user);
//                 }, function (err) {
//                     console.error('Error creating user from Google authentication', err);
//                     done(err);
//                 });
//             }

//         });

//     };

//     passport.use(new GoogleStrategy(googleCredentials, verifyCallback));

//     app.get('/auth/google', passport.authenticate('google', {
//         scope: [
//             'https://www.googleapis.com/auth/userinfo.profile',
//             'https://www.googleapis.com/auth/userinfo.email',
//             'https://www.googleapis.com/auth/contacts.readonly'
//         ]
//     }));

//     app.get('/auth/google/callback',
//         passport.authenticate('google', { failureRedirect: '/login' }),
//         function (req, res) {
//             res.redirect('/');
//         });


// }