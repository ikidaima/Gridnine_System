import express from 'express';
import path from 'path';
import cors from 'cors';

import data from './static/flights.js';

const PORT = 3000;
const __dirname = path.resolve();
const app = express();

app.use( express.static(path.join(__dirname, '../client/dist')) );
app.use( cors() );

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, '../client/dist/index.html') );
});

app.get('/flight', (req, res) => {
  res.json( JSON.stringify(data) );
});

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
})