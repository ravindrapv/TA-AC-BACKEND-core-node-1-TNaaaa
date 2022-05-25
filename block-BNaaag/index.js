fs.readFile('./index.md','utf8', (err, content) => {
  console.log(content);
});

// sych
console.log("first");
for(let i=1; i<=100000; i++){
 return i;
}
console.timeLog("this is second");

// asych

console.timeLog("hi this is first one");
setTimeout(() => {
  console.log("this is timeout log");  
}, t1000);


var buff1 = buffer.alloc(10);

console.log(buff1);
