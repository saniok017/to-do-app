const next = require('next');
const express = require('express');
const mongoose = require('mongoose');
const middlewares = require('./server/middleware/middleware');
const routesHandle = require('./server/routes/routesHandle');
const config = require('./server/config/config');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected'); },
  (err) => { console.log(`Can not connect to the database ${err}`); },
);

app.prepare()
  .then(() => {
    const server = express();

    middlewares(server);

    routesHandle(server, handle, app);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
