const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/ping', (req, res) => res.send('pong!'))

app.get('/kick', (req, res) => res.send('ass!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))