const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Connect Database

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(keys.mongoURI, { useMongoClient: true });
}

// Configure Server

const app = express();
app.use(bodyParser.json());

require('./models/User');
require('./config/server')(app, keys.cookieKey);
require('./controllers')(app);

app.on('uncaughtException', (req, res, next, err) => {
  res.send({
    status: res.statusCode ? res.statusCode.toString() : '500',
    message: err.toString()
  });
});

// Resolve Path for Production Build

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
