var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h3>Welcome to altcampus</h3>');
    res.writeHead()
}

server.listen(8000, () => {
    console.log("server listening on port 8000");
})