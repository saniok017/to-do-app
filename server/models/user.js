const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String,
  githubId: String,
});

module.exports = mongoose.model('User', UserSchema);
