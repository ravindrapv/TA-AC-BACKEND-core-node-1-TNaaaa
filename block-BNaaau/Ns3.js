var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    res.end("entire request headers in response")
}

server.listen(7000, () => {
    console.log("server listening on port 7000");
})