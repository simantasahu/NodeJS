var fs = require('fs');
fs.appendFile('abc.txt','Hello Simanta From Append File Function',function(err){
    if(err) throw err;
    console.log('Saved');
});