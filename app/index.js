import express from 'express';
import path from 'path';

import data from './static/flights.js';

const PORT = 3000;
const __dirname = path.resolve();
const app = express();

app.get('/', (req, res) => {
  res.send( '<h1>Hello</h1>' );
});

app.get('/flight', (req, res) => {
  res.json( data.result.flights );
});

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
})