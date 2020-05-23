const ejs=require('ejs');

ejs.renderFile('./views/6.ejs', {css_path: '../style/admin.css'}, function (err, data){
  console.log(data);
});

