const fs = require('fs');

// writeFile(文件名，内容，回调)
fs.writeFile('bbb.txt', 'where are you from', function(err) {
    console.log(err);
});