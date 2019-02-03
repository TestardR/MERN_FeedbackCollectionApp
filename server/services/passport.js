const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// give a token to a user and add to a cookie
passport.serializeUser((user, done) => {
  // done is a callback, user.id allows for identification (id generated by mongoDB)
  done(null, user.id);
});

// turn the id into an user instance
// this user is added to req object as 'req.user'
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Async/Await
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // already existing recod with this profile ID
        // using return, we don't have to use else afterward
        return done(null, existingUser);
      }
      // make a new record with profile ID
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

// Promise
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback',
//       proxy: true,
//       userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       User.findOne({ googleId: profile.id }).then(existingUser => {
//         if (existingUser) {
//           // already existing recod with this profile ID
//           done(null, existingUser);
//         } else {
//           // make a new record with profile ID
//           new User({ googleId: profile.id })
//             .save()
//             .then(user => done(null, user));
//         }
//       });
//     }
//   )
// );
