const mongoose =  require('mongoose');
const User = mongoose.model('users');
const bodyParser = require('body-parser');

// Google Oauth and passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
    console.log('Access Token', accessToken)
    console.log('Refresh Token', refreshToken)
    console.log('Profile', profile)

    new User({googleId: profile.id, profileName: profile.displayName, first_name: profile.name.givenName, last_name: profile.name.familyName }).save();
      console.log('Access Token', accessToken)
  })
);

// nothing is being returned so can just call it in server.js
// as require('etc')
