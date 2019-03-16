const passport = require('passport');
const path = require('path');
const ensureAuthenticated = require('../lib/ensureAuthenticated');
const BD = require('../config/BD');

const routesHandle = (server, handle, app) => {
  server.get('/user', ensureAuthenticated, (req, res) => {
    const ID = req.user.id;
    res.send({ user: req.user, mentor: BD.get(ID) });
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
      const ID = req.user.id;

      const queryParams = {
        logineduser: req.user,
        loginedMentor: BD.get(ID),
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
