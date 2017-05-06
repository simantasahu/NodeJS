var http = require('http');
var dt = require('./MyModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("My Name is :" + dt.MyName() );
	res.write(req.url);//Get Query String Data  Ex: http://localhost:8081/Simanta   Returns /Simanta
	res.end();
}).listen(8081);