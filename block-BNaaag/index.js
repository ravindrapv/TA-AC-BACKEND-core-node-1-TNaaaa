var {readFile,readFileSync} = require('fs');

readFile('./content.md','utf8', (err,content)=> {
    console.log(content);
})


var resulte = readFileSync('./content.md', 'utf8');

console.log(resulte);
// // sych
// console.log("first");
// for(let i=1; i<=100000; i++){
//  return i;
// }
// console.timeLog("this is second");

// // asych

// console.timeLog("hi this is first one");
// setTimeout(() => {
//   console.log("this is timeout log");  
// }, t1000);


var buff1 = Buffer.alloc(10);
buff1.write("welcome to buffer");
console.log(buff1);
