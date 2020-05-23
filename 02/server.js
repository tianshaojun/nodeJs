const http = require('http');

var server = http.createServer(function(request, response) {
    console.log('有人来了');
});

// 监听
server.listen(8080);

