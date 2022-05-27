var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    console.log(req.headers);
    res.end("user-agent from request headers")
}

server.listen(5555, () => {
    console.log("your o the port on 5555");
})