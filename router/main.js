module.exports = function(app)
{
    var express = require('express');
    var bodyparser = require('body-parser');
    app.use(bodyparser.json());
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    var router = express.Router();
    router.get('/',function(req,res){
        res.render('index.html')
     });

     return router;
}