const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: Number,
  store: Array,
});

module.exports = mongoose.model('User', UserSchema);
