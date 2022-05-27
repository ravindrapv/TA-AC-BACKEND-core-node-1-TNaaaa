var http = require('http');

var server = http.createServer(handelRequest);


function handelRequest(req,res){
    console.log(req)
    res.end("request and response object");
}

server.listen(5000, () => {
    console.log("this is listen on the port odf 5000")
})