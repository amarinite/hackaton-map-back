import express from 'express';
import bodyParser from 'body-parser';

import db from './db.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/monuments', async (req, res) => {
  const { data, error } = await db.from('monuments').select('*');
  console.log(data);
  res.send(data);
});

app.get('/users', async (req, res) => {
  const { data, error } = await db.from('users').select('*');
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
