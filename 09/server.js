const express = require('express');

var server = express();

// server.use('/a.html', function(req,res) {
// //    res.write({a:12,b:5});
//    res.send({a:12,b:5});
//    res.end();
// });

// server.use('/b.html', function(req,res) {
//    res.send('123');
//    res.end();
// });

// server.get('/', function(req, res) {
//    console.log('有GET');
// });

// server.post('/', function(req, res) {
//    console.log('有POST');
// });

server.use('/', function(req, res) {
   console.log('use了');
});

server.listen(8080);

