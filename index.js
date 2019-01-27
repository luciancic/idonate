const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/ping', (req, res) => res.send('pong!'))

app.get('/kick', (req, res) => res.send('ass!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))