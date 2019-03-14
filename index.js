const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

var app = express();
var io = require('socket.io')(app);

app.use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index.ejs'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));


io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});