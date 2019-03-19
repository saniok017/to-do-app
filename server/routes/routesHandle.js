const passport = require('passport');
const path = require('path');
const mongoose = require('mongoose');
const ensureAuthenticated = require('../lib/ensureAuthenticated');

const User = mongoose.model('User');

const routesHandle = (server, handle, app) => {
  server.get('/user', ensureAuthenticated, (req, res) => {
    res.send({ user: req.user });
  });

  server.put('/user', ensureAuthenticated, (req, res) => {
    User.findOneAndUpdate(
      {
        id: req.user.id,
      },
      {
        $set: {
          id: req.user.id,
          store: req.body.store,
        },
      },
      {
        _id: -1,
        upsert: true,
      },
      (err, result) => {
        if (err) return res.send(err);
        res.send(result);
      },
    );
  });

  server.get('/service-worker.js', (req, res) => {
    const filePath = path.join(__dirname, '../../.next', '/service-worker.js');
    app.serveStatic(req, res, filePath);
  });

  server.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    (req, res) => {
    });

  server.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      const renderPage = '/';

      const queryParams = {
        logineduser: req.user,
      };
      app.render(req, res, renderPage, queryParams);
    });

  server.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  server.get('*', (req, res) => handle(req, res));
};

module.exports = routesHandle;
