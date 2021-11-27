const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 4000;
<<<<<<< HEAD
const DB   = 'mongodb://localhost/notasapp';
=======
const DB = 'mongodb://localhost/notasapp';
>>>>>>> e169fe8 (Actualizacion)

mongoose.connect(DB).then(() => console.log('DB conectada'));

const app = express();
app.use(cors());
<<<<<<< HEAD
// para que aparezca algo en req.body
app.use(express.json());

app.use('/', require('./api/note'));

app.use(express.static('public'));

app.listen(PORT);
=======
//para que aparezca algo en req.body
app.use(express.json());

app.use('/',require ('./api/note'));

// const User = require('./models/User');

// app.get('/api/users', (req, res) => {
  // User.find((err, users) => {
  // res.json(users);
  // });
// });

app.use(express.static('public'));

app.listen(PORT);
>>>>>>> e169fe8 (Actualizacion)
