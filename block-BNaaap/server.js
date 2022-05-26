var http = require('http');

var server = http.createServer(handelRequest);

function handelRequest(req,res){
    res.write("hi venataravindra");
    res.end('<h1>this is the sever request respones</h1>');
    res.writeHead(202,{'Content-Type':'text/html'});
}


server.listen(4444,() => {
    console.log("server listen on the port 4444");
});