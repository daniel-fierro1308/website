var express = require('express');
var app = express();
var puerto = 3000;

app.use(express.static(__dirname+'/public'));

app.set("view engine","jade");

app.disabled('view cache');

app.get('/',function(req,res){
 res.render('index');
});

app.get('/index.jade',function(req,res){
res.render('index');
});

app.get('/servicios.jade',function(req,res){
res.render('servicios');
});

app.get('/contacto.jade',function(req,res){
res.render('contacto');
});

app.listen(puerto,function(){
console.log("Esperando respuesta en el puerto " + puerto);
});