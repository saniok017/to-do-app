const { Strategy } = require('passport-facebook');
const config = require('../config/config.json');

const facebookStrategy = new Strategy(config.facebookAuth,
  (accessToken, refreshToken, profile, done) => done(null, profile));

module.exports = facebookStrategy;
