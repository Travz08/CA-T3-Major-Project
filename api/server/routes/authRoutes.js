const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('../config/keys');

module.exports = (app) => {
  // route to start google auth
  // 2nd argument will be telling express to pass user to passport
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email',]
    })
  );

  // for when user gets callback
  // difference to route above is that this url will have the code from google.
  // passport, GoogleStrategy will see that and say we will use the code and turn it into a profile.
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/classroom')
  })

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
};
