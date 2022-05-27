var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('<h3>Welcome to altcampus</h3>');
    
}

server.listen(8000, () => {
    console.log("server listening on port 8000");
})