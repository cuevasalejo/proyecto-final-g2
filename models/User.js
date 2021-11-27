<<<<<<< HEAD
// en User.js
=======
  // en User.js
>>>>>>> e169fe8 (Actualizacion)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
