var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});	
    res.end('Hello World! Simanta Sahu saurav');
	//res.end();
}).listen(8081);