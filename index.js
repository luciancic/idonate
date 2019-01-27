const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const data = require('./data');

app.get('/', (req, res) => res.json(data))
app.get('/get', (req, res) => res.json(data))

app.get('/ping', (req, res) => res.send('pong!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))