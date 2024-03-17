const express = require('express');
const connectMongoDB = require('./config/db');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

connectMongoDB();

app.use(cors());

app.use(bodyParser.json()); 

app.use((req, res, next) => {
  res.setHeader(
    'GET, POST, PATCH, PUT, DELETE'
  );

  next();
});


app.use(express.json());

app.use(router);

app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build'));
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.json({ message: error.message});
});

const PORT = process.env.PORT || 5000;
console.log(PORT)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
