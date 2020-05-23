const express = require('express');

module.exports = function() {
    var router = express.Router();

    router.get('/1.html', function (req, res) {
        // res.send('我是文章').end();
        res.render('./1.ejs', {title: '我是标题', a: 12, b: 5});
    });
    router.get('/2.html', function (req, res) {
        res.send('我也是文章').end();
    });

    return router;
};