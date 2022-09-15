const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// body parser diye req.body access kora jay aramse... :)
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {

    console.log(path.join(__dirname + '/index.html'))
    res.send("amar sonar bangla")
})

app.get('/abc', (req, res) => {
    console.log(req.body)
    res.send('done')
})
app.listen(port, () => {
    console.log(`app is listening port: ${port}`)
})