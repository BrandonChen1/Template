const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
var app = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index.ejs'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

