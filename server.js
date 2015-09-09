
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
var htttpServer = module.exports;


var server = http.createServer(function(req, res) {
  var currentDate = new Date();
  var time = currentDate.getHours() + ":" +
      currentDate.getMinutes();

  if (req.url === '/time') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('current time:' + time);
    return res.end();
  }

  //superagent localost:3000/ post \ {person: "'stan'"} \
   if (req.method === 'POST') {
    req.on('data', function(data) {
      var parsed = JSON.parse(data.toString());
      res.write(JSON.stringify({msg: 'hello ' + parsed.person}));
    });
  }

  var greetAddress = req.url.slice(0,6);
  if (greetAddress === '/greet') {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    var user = req.url.slice(7);
    res.write('hello ' + user);
    return res.end();
  }
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  console.log('server error');
});

server.listen(3000, function() {
  console.log('server up');
});