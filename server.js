const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const port = 3005;
const users = require('./Routes/api/users');
const services = require('./Routes/api/services');
const cors = require("cors");
const db = require('./config/keys').mongoURL;

//Connect to DB
mongoose
  .connect(db)
  .then(() => console.log('fimex DB connected'))
  .catch(err => console.log(err));

app.use(cors({}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//User Routes
app.use('/api/users', users);
app.use('/api/services', services);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});