// For this assignment you should write an http server in vanilla node
// that responds to several different routes.
// The server should respond to a request to /time
// that will send back the current time of the server.
// It should also respond to a get request to
// /greet/name where name is any single word string.
// It should send back a string that greets that name.
// It should also have a separate post request
// to /greet that takes the name in JSON format.
// There should be tests using chaiHTTP for both routes,
// as well as a Gruntfile/package.json

//GET OR REQ
//req.url: = '/'  -> need to grab name
// Rubric:
// Tests: 4pts
// Routes: 4pts
// Organization and gulpfile/package.json 2pts
'use strict';
var http =require ('http');



var server = http.createServer(function(req, res) {
  if (req.url === '/greet') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('hello ' + req.url);
    return res.end();
  }

//   if (req.method === 'POST') {
//     req.on('data', function(data) {
//       var parsed = JSON.parse(data.toString());
//       console.log(parsed.somevl);
//     });

//     res.writeHead(200, {
//       'Content-Type': 'application/json'
//     });

//     res.write('{"msg": "success!"}');
//     return res.end();
//   }

//   res.writeHead(404, {
//     'Content-Type': 'text/plain'
//   });

//   res.write('page not foud');
//   res.end();
// });

server.listen(3000, function() {
  console.log('server up');
});