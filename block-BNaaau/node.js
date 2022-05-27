var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    res.end("My first server in NodeJS")
}

server.listen(5100, () => {
    console.log("your o the port on 5100");
})