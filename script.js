const http = require('http');
var fs = require('fs')
var express = require('express'); 
const { error } = require('console');
var app = express(); 
 
app.get('/website/index.html', function(req, res) { 
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(fs.readFileSync('index.html')); 
          
            res.end(); 
     
}); 
app.get('/website/index.html/home', function(req, res) { 
    res.setHeader('Content-Type', 'text/plain'); 
    res.send('Vous êtes dans la page home'); 
}); 
app.get('/website/index.html/features', function(req, res) { 
    res.setHeader('Content-Type', 'text/plain'); 
    res.send('Vous êtes dans la page home'); 
}); 
app.get('/website/index.html/faqs', function(req, res) { 
    res.setHeader('Content-Type', 'text/plain'); 
    res.send('Vous êtes dans la page home'); 
}); 
app.get('/website/index.html/about', function(req, res) { 
    res.setHeader('Content-Type', 'text/plain'); 
    res.send('Vous êtes dans la page home'); 
}); 

app.use(function(req, res, next){ 
    res.setHeader('Content-Type', 'text/plain'); 
    res.status(404).send('Page introuvable !'); 
}); 
app.listen(3000,()=>{
    console.log("Server is running at the port 3000");
})
