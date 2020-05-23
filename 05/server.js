const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res) {
    var str = '';  //接收数据
    
    var i=0;
    //data-有一段数据到达(很多次)
    req.on('data', function(data){
        str+=data;
        console.log(`第${i++}次收到数据`);
    });
    //end-数据全部到达(一次)
    req.on('end', function(){
        var POST = querystring.parse(str);
        console.log(POST);
    });
}).listen(8080);

