var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    res.statusCode = 202;
    res.end("status code is 202");
}

server.listen(3333, () => {
    console.log("server listening on port 3333");
})