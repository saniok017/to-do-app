const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  githubId: Number,
  store: Array,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
