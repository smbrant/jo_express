
/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.register('.html', require('jade'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Jo in Express',
    layout: false
  });
});

//app.get('/joapp/:app', function(req, res){
//  res.render('/public/joapp/'+req.params.app+'/index.html', {
//    app: req.params.app,
//    layout: false
//  });
//});

app.get('/joapp/:app', function(req, res){
  console.log('app='+req.params.app);
  fs.readFile(__dirname + '/public/joapp/'+req.params.app+'/index.html', 'utf8', function(err, text){
    res.send(text);
  });
});

//app.get('/', function(req, res) {
//    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
//        response.send(text);
//    });
//});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
