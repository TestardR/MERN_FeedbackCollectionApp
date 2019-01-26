const express = require('express');
require('./services/passport');
require('./routes/authRoutes')(app);

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
