const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

server.use(cookieParser());
server.use(cookieSession({
    name: 'sess',
    keys: ['aaa', 'bbb', 'ccc'],
    maxAge: 99*365*24*3600*1000
}));

//cookie
server.use('/', function(req,res){
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
        req.session['count']++;
    }

    console.log(req.session['count']);

    res.send('ok');
});

server.listen(8080);







