var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
var router = require('./router/main')(app);
app.use(router);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';


app.listen(9000,function(){
    console.log("connected server-port 9000");
});