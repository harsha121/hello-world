const http = require("http");
const os = require("os");

console.log("Kubia is starting");

var server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end("You have hit "+os.hostname() +"\n");

})

server.listen(8080);
