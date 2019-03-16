const { Strategy } = require('passport-github2');
const config = require('../config/config.json');

const githubStrategy = new Strategy(config.githubAuth,
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  });

module.exports = githubStrategy;
