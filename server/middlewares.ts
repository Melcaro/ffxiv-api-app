import express from 'express';

export function middlewares(app: express.Application) {
  app.use(express.json());
  app.use('/', express.static(__dirname + '/../client/build'));
}
