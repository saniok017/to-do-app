const { Strategy } = require('passport-twitter');
const config = require('../config/config.json');

let trustProxy = false;
if (process.env.DYNO) {
  // Apps on heroku are behind a trusted proxy
  trustProxy = true;
}

config.twitterAuth.proxy = trustProxy;

const twitterStrategy = new Strategy(config.twitterAuth,
  (token, tokenSecret, profile, done) => done(null, profile));

module.exports = twitterStrategy;
