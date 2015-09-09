
// Write a simple tcp logging server.
// This server should receive tcp requests
// and save the request into a file.
// Each request should be saved into it's
//  own file and you'll have to find
//  something unique to name them.
//  You can use a UUID library or
//  the current time or any other means
//  of having unique strings that you can think of.


//superagent localhost:3000 post \{ someeval: "'some string'" \}
'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {


  socket.on('data', function(data) {
  var currentDate = new Date();
  var time = currentDate.getHours() + '_' +
      currentDate.getMinutes() + '_' +
      currentDate.getSeconds();

  var bufferData = data.toString();
  console.log(bufferData);
  fs.writeFile(time + 'data.js', bufferData);

  });

  socket.on('end', function() {
    console.log('disconnected');
  });
});

server.listen(3000);

