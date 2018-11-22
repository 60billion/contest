var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());

var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';

app.get('/',function(req,res){
    res.render('index.html');
});

app.listen(9000,function(){
    console.log("connected server-port 9000");
});