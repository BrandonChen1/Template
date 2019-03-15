var express = require('express');
var app = express();
const path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', "ejs");
app.get('/', function(req, res){
    res.render(__dirname + '/views/index.ejs');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('playEvent', function(msg){
        io.emit('playEvent');
    });
    socket.on('pauseEvent', function(msg){
       io.emit('pauseEvent');
    });
    socket.on('skipAround', function(data){
       io.emit('skipAround', data);
    });
    socket.on('chooseVideo', function(data){
        io.emit('chooseVideo', data);
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});