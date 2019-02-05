const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // after the user comes back from the oauth flow, passport middle takes over, and tell the response to redirect
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // test route to see if user can log in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
