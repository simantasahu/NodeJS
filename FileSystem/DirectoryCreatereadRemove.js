var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/Temp',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});
console.log("Going to read directory /tmp");
fs.readdir("/Temp",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});
// console.log("Going to delete directory /tmp/test");
// fs.rmdir("/tmp/test",function(err){
//    if (err) {
//       return console.error(err);
//    }
// );