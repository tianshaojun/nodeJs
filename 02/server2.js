const http = require('http');

var server = http.createServer(function(req, res) {
    // console.log('有人来了');
    console.log(req.url);
    res.write('abc');
    res.end();
});

// 监听
server.listen(8080);

