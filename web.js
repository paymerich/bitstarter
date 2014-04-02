var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

//var buffer = new Buffer(1024);
var buffer = fs.readFileSync('./index.html' );

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
