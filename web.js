var indexhtml = "index.html";
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var responsestring = new Buffer(27);

fs.readFile(indexhtml, function (err, responsestring) {
  if (err) throw err;
  console.log(responsestring.toString('utf-8'));
});

app.get('/', function(request, response) {
  response.send(responsestring.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
