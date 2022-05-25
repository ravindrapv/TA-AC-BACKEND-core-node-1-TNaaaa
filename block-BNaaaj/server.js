var urlString = "https://airindia.com/fares/calculate?from=delhi&to=detroit";
var url = require('url');

var parsedUrl = url.parse(urlString);

console.log(parsedUrl);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
