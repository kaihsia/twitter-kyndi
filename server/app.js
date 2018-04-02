var PORT = 4000;
var express = require('express');
var bodyParser = require('body-parser');
var twitter = require('./twitter');
var app = express();
var server = app.listen(PORT);
var io = require('socket.io').listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SEARCH QUERY
app.post('/search', function(req, res) {
  const find = req.body.query;
  io.on('connection', function(socket){
    console.log('a user connected');
  });
  const twee = io.of('tweet');
  
  twitter.client.stream('statuses/filter', { track: find }, function(stream) {
    stream.on('data', function (data) {
      io.emit('tweet', data.text);
      console.log('.', data.text);
    });
  });
});

