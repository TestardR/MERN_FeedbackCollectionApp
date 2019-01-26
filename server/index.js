const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport'); // Passport - Google Strategy
require('./models/User'); // User Schema

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
