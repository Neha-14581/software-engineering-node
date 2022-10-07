const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

app.get('/hello', (req, res) =>
  res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);


//const options = {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    autoIndex: false,
//    maxPoolSize: 10,
//    serverSelectionTimeoutMS: 5000,
//    socketTimeoutMS: 45000,
//    family: 4
//}
//
//mongoose.connect('mongodb://localhost:27017/tuiter', options);

//require('./users/service')(app);
//app.listen(4000);
