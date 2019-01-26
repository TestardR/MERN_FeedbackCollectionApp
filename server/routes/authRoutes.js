const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // test route to see if user can log in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
