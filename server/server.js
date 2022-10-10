const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});``

app.get('/api/notes', (req, res) => {
  db.queryAsync(`SELECT * FROM notes`)
  .then((results) => {
    res.type('json');
    res.send(results);
  })
  .catch((err) => {
    console.log('err, could not retrieve notes', err);
    res.status(500);
    res.send('Error. Could not retrieve notes');
  })
});