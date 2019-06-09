import * as express from 'express';

export const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
