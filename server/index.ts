import express from 'express';
require('dotenv').config();
import middlewares from './middlewares';
import routes from './routes';
import path from 'path';

const app = express();

middlewares(app);
routes(app);

app.get('/*', function (req: express.Request, res: express.Response) {
  res.sendFile(
    path.join(__dirname, '../client/public/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
