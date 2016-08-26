var http  = require("http");
var port = 9999;

var app = http.createServer(function (req, res) {
	res.writeHead(200, {'content-Type': 'text/plain'});
	res.end("index.html");
});
 app.listen(port);

console.log('Server started: http://localhost:' + port + '/');
