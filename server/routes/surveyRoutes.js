const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const SUrvey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // take all the recipients, make an array on the basis of ',', loop this array to give a new array of emails
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
