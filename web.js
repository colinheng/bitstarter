var indexhtml = "index.html";
var express = require('express');
var app = express.createServer(express.logger());
var responsestring = new Buffer(27);

fs.readFile(indexhtml, function (err, responsestring) {
  if (err) throw err;
  console.log(buf(toString(responsestring));
});

app.get('/', function(request, response) {
  response.send(responsestring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




var responsestring = new Buffer(27);
fs.readFile(indexhtml, function (err, responsestring)) {
  if (err) throw err;
  console.log(buf(toString(responsestring));
});

