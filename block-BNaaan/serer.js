var http = require('http');
var server = http.createServer(handalRequest);



function handalRequest(request,response){
    response.end("this is venkataravindra pv");
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
}


server.listen(3000, () => {
    console.log("server on the host in 3000");
})
