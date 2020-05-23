const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use(cookieParser('wesdfw4r34tf'));

//cookie
server.use('/', function(req,res){
    req.secret='wesdfw4r34tf';
    res.cookie('user1', 'blue1',{signed: true});

    console.log('签名cookie', req.signedCookies);
    console.log('无签名cookie', req.cookies);

    res.send('ok');
});

server.listen(8080);







