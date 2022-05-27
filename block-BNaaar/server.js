var http = require('http');
const { url } = require('inspector');

var server = http.createServer(hanelRequest);



function hanelRequest(req,res){
  if (req.method == 'GET' && req.url == '/') {
    res.setHeader('Content-Type', 'text/plain');
      res.write("Welcome to homepage");
      res.end();
  } else if (req.method == 'GET' && req.url == '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method == 'POST' && req.url == '/about') {
      res.write("this is a post request")
      res.end();
  }
};

server.listen(5000, () => {
    console.log("server port is on 5000");
})