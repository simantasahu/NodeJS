var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('DemoFile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write("File Read End");
    res.end();
  });
  // fs.readFile("abc.txt",function(err,data){
  //   //res.writeHead(200,{'Content-Type': 'text/html'});
  //   res.write(data);
  //   res.end();
  // });
}).listen(8081);
