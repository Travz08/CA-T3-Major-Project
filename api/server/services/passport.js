const mongoose =  require('mongoose');
const User = mongoose.model('users');
const bodyParser = require('body-parser');

// Google Oauth and passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// going to define an arrow function and pass it to serialize user. passport method.
// the user is just what we pulled out of the database, same as below in findOne.
// turned the mongoose model instance user, into an id.
passport.serializeUser((user, done) => {
  done(null, user.id)
});

// 1st argument is the token we previously stuffed into the cookie (user.id)
// going to do the opposite, we are going to turn an id into a mongoose model isntance.
// remember any time we deal with mongoose it is asynchronous hence will return a promise.
passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});



passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
},
async (accessToken, refreshToken, profile, done) => {

// Asynchronus method so it returns a promise. // refactored using ES2017 - Es6 version is down below.
const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we have user with an id in our database.
        done(null, existingUser);
      } else {
        // creating a new user. 
        const user = await new User({ googleId: profile.id, profileName: profile.displayName, first_name: profile.name.givenName, last_name: profile.name.familyName}).save();

        done(null, user);
      }
    }
  )
);


// // Asynchronus method so it returns a promise.
//     User.findOne({ googleId: profile.id }).then((existingUser => {
//       if (existingUser) {
//         // we have user with an id in our database.
//         done(null, existingUser);
//       } else {
//         // we will create a user into our database.
//         // remember calling new User - creates a mongoose model instance.
//         // A model instance represents a single record inside of the collection.
//         new User({
//           googleId: profile.id,
//            profileName: profile.displayName,
//             first_name: profile.name.givenName,
//              last_name: profile.name.familyName
//            })
//            .save()
//            .then(user => done(null, user));
//       }
//     }))
//
//
//   })
// );
