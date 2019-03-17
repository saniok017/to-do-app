const { Strategy } = require('passport-github2');
const User = require('../models/user');
const config = require('../config/config.json');

const githubStrategy = new Strategy(config.githubAuth,
  (accessToken, refreshToken, profile, done) => User
    .findOne({ githubId: profile.id })
    .then(user => (user || new User({ githubId: profile.id, username: profile.username }).save()))
    .then(data => done(null, data.toJSON()))
    .catch(err => done(err)));

module.exports = githubStrategy;
