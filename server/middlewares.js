const express = require('express');

function middlewares(app) {
  app.use(express.json());
  app.use('/', express.static(__dirname + '/../client/build'));
}

module.exports = middlewares;
