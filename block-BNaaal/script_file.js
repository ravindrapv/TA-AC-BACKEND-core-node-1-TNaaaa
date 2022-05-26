let http = require('http');
const { request } = require('https');

http.createServer((request,response) => {
    console.log(request,response);

    response.end("Welocome to node.js");
}).listen(3000,'localhost');

