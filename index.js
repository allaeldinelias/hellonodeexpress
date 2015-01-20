var express= require("express"),
    app=express(),
    server = require('http').createServer(app),
    port = process.env.PORT ||8080,
    debug= require('debug')('index.js');

server.listen(port, function (){
    console.log("Server Listing at port %d",port);
    debug("Server Listing at port %d",port);
});

app.get("/student/:id",function(req, res){
    res.end(req.params.id+ " elias!");
});
app.use(express.static(__dirname + '/www/'));
