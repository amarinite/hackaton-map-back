import express from 'express';
import bodyParser from 'body-parser';

import dbConnection from './db.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Mehtods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/monuments', async (req, res) => {
  const { data, error } = await dbConnection.from('monument').select('*');
  console.log(data);
  res.send(data);
});

app.get('/users', async (req, res) => {
  const { data, error } = await dbConnection.from('user').select('*');
  console.log(data);
  res.send(data);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
