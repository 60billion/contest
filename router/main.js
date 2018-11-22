module.exports = function(app)
{
    var express = require('express');
    var bodyparser = require('body-parser');
    app.use(bodyparser.json());

    var router = express.Router();
    router.get('/',function(req,res){
        res.render('index.html')
     });
}