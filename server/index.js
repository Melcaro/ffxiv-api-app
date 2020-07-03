const express = require('express');
require('dotenv').config();

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

middlewares(app);
routes(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/index.html'), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
