var http = require('http');
var fs = require('fs');
var server = http.createServer(hanelRequest);


function hanelRequest(req,res){
  if (req.method == 'GET' && req.url == '/index') {
    res.setHeader('Content-Type', 'text/html');
       fs.readFile('./index.html', (err, content) =>{
           if(err) console.log(err);
           res.end(content);
       })
  } 
  
  if(req.url.split('.').pop() === '/css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('./style.css' + req.url, (err, content) => {
      if(err) return console.log(err);
      res.end(content)
    })
  }
};

server.listen(5555, () => {
    console.log("server port is on 5555");
})