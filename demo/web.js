/* Server requires */

var express = require('express'),
		logfmt = require('logfmt'),
		lessMiddleware = require('less-middleware'),
		socket = require('socket.io');

/* Start server */

var port = process.env.PORT || 5000;

var server = express(),
		io = socket.listen(server.listen(port, function() {
			  console.log("Listening on " + port);
			}));

/* Server configuration */

server.configure(function() {

	server.use(logfmt.requestLogger());

	server.use(lessMiddleware({
		src: '/less',
		dest: '/css',
		root: __dirname + '/public',
		compress: true
	}));

	server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/public'));

});

/* IO configuration */

io.sockets.on('connection', function(socket) {

	socket.on('join', function(data) {
		socket.broadcast.emit('message', { message: data.name + ' joined the room.' });
		socket.emit('message', { message: 'You joined the room.' });
	});

	socket.on('chat', function(data) {
		socket.broadcast.emit('message', { message: data.name + ' said : ' + data.message });
		socket.emit('message', { message: 'You said : ' + data.message });
	});

	socket.on('disconnect', function() {
		socket.broadcast.emit('User disconnected.');
	});

});
