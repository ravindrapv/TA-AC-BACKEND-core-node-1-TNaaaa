var http = require('http');
const { url } = require('inspector');
var fs = require('fs');
var server = http.createServer(hanelRequest);



function hanelRequest(req,res){
  if (req.method == 'GET' && req.url == '/file') {
    res.setHeader('Content-Type', 'text/plain');
       fs.readFile('./node.html', (err, content) =>{
           if(err) console.log(err);
           res.end(content);
       })
      
  } 
  
   if(req.method == 'GET' && req.url == '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
};

server.listen(5555, () => {
    console.log("server port is on 5555");
})