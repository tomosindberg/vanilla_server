
//superagent localhost:3000 post \{ someeval: "'some string'" \}

'use strict';
var http =require ('http');
var htttpServer = module.exports;


var server = http.createServer(function(req, res) {
  var currentDate = new Date();
  var time = currentDate.getHours() + ":" +
      currentDate.getMinutes();

// superagent localhost:3000/time
  if (req.url === '/time') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('current time:' + time);
    return res.end();
  }

  //superagent localost:3000/greet/stan post \{person: "'stan'" \}
   if (req.method === 'POST') {
    req.on('data', function(data) {
      var parsed = JSON.parse(data.toString());
      console.log(parsed.person);
      // res.write(JSON.stringify({msg: 'hello ' + parsed.person}));
    });
  }

  var path = req.url.split('/');
  if (path[1] === 'greet') {
    // console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // var user = req.url.slice(7);
    res.write('hello ' + path[2]);
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