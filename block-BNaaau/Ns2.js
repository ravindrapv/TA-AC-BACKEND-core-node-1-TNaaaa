var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    console.log(req.url);
    console.log(req.mthod);
    res.end("My first server in NodeJS")
}

server.listen(5566, () => {
    console.log("your o the port on 5100");
})